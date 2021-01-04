import React, { useState, useContext, createContext} from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
  Add,
  Like,
  Dislike,
  Remove,
} from './styles/player';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FeatureContext } from '../card/index';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');
  

  return (
    <PlayerContext.Provider
      value={{showPlayer, setShowPlayer, trailerUrl, setTrailerUrl }}
    >
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer, trailerUrl } = useContext(PlayerContext);

  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 0,
    },
  };

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <YouTube videoId={trailerUrl} opts={opts} />
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer, setTrailerUrl } = useContext(
    PlayerContext
  );
  const { itemFeature } = useContext(FeatureContext);
  const handleClick = (movie) => {
    if (!showPlayer) {
      movieTrailer(
        movie?.title || movie?.name || movie?.original_name || '',
        ''
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => setTrailerUrl('cSqi-8kAMmM'))
        .then(() => setShowPlayer(!showPlayer));
    } else {
      setTrailerUrl('');
      setShowPlayer(!showPlayer);
    }
  };

  return (
    <Button onClick={() => handleClick(itemFeature)} {...restProps}>
      Play
    </Button>
  );
};

Player.Add = function PlayerAdd({ ...restProps }) {
  const { itemFeature, setSelectedItems, selectedItems } = useContext(FeatureContext);
  
  const addToSelectedItems = (itemFeature) => {
    setSelectedItems([...selectedItems,itemFeature.docId])
    firebase
      .firestore()
      .collection('mylist')
      .add({
        title: `${itemFeature.title}`,
        description: `${itemFeature.description}`,
        id: `${itemFeature.docId}`,
        genre: `added`,
        maturity: `${itemFeature.maturity}`,
        slug: `${itemFeature.slug}`,
      });
  };

  const isAdded = selectedItems.includes(itemFeature.docId);
  // 3awez a disable el button bta3 el film elle added 
  return (
    <Add key={itemFeature.docId} onClick={() => addToSelectedItems(itemFeature)}>
      {isAdded ? <i class="fas fa-check"></i> :  <i class="fas fa-plus"></i>}
    </Add>
  );
};

Player.Like = function PlayerLike({ ...restProps }) {
  //3awez a toggle el button if clicked and set background as hover for the clicked item
  return (
    <Like>
      <i class="far fa-thumbs-up"></i>
    </Like>
  );
};

Player.Dislike = function PlayerDislike({ ...restProps }) {
  //3awez a toggle el button if clicked and set background as hover
  return (
    <Dislike>
      <i class="far fa-thumbs-down"></i>
    </Dislike>
  );
};

Player.Remove = function PlayerRemove({ ...restProps }) {
  const { itemFeature } = useContext(FeatureContext);
  const handleClick = (itemFeature) => {
    firebase.firestore().collection('mylist').doc(itemFeature.docId).delete();
  };

  return <Remove onClick={() => handleClick(itemFeature)}>X</Remove>;
};
/*title: `${itemFeature.title}`,
description: `${itemFeature.description}`,
id:`${itemFeature.docId}`,
genre: 'added',
maturity: `${itemFeature.maturity}`,
slug: `${itemFeature.slug}`, */
