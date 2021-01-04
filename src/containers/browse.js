import React, { useState, useEffect, useContext } from 'react'
import Fuse from 'fuse.js'
import { Card, Header, Loading, Player } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'
import axios from '../constants/axios'
import requests from '../constants/requests'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

export function BrowseContainer({ category, slides, categoryChange }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [slideRows, setSlideRows] = useState([])
  const [movie, setMovie] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  useEffect(() => {
    setSlideRows(slides)
  }, [slides])

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    })
    const results = fuse.search(searchTerm).map(({ item }) => item)

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results)
    } else {
      setSlideRows(slides)
    }
  }, [searchTerm])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      // Math.floor(Math.random() * request.data.results.length -1)
      return request
    }
    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 0,
    },
  }

  const handleClick = (movie) => {
    //console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(
        movie?.title || movie?.name || movie?.original_name || '',
        ''
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => setTrailerUrl('cSqi-8kAMmM'))
    }
  }

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src={`${movie?.backdrop_path}`} dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => categoryChange('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => categoryChange('films')}
            >
              Films
            </Header.TextLink>
            <Header.TextLink
              active={category === 'mylist' ? 'true' : 'false'}
              onClick={() => categoryChange('mylist')}
            >
              My List
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink to={ROUTES.ACCOUNT}>
                    <Link
                      style={{ color: 'white', textDecoration: 'none' }}
                      to={ROUTES.ACCOUNT}
                    >
                      {user.displayName}
                    </Link>
                  </Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink to={ROUTES.ACCOUNT}>
                    <Link
                      style={{ color: 'white', textDecoration: 'none' }}
                      to={ROUTES.ACCOUNT}
                    >
                      Settings
                    </Link>
                  </Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>
            {movie?.title || movie?.name || movie?.original_name}
          </Header.FeatureCallOut>
          <Header.Text>{truncate(movie?.overview, 150)}</Header.Text>
          <Header.PlayButton onClick={() => handleClick(movie)}>
            Play
          </Header.PlayButton>
        </Header.Feature>
      </Header>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

      <Card.Group>
        {slideRows?.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities slideItem={slideItem}>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                {category !== 'mylist' ? (
                  <span>
                    <Player.Add></Player.Add>
                    <Player.Like></Player.Like>
                    <Player.Dislike></Player.Dislike>
                  </span>
                ) : (
                  <Player.Remove />
                )}
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
