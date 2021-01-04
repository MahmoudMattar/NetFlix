export default function selectionFilter(content, category) {
  let filteredContent;
  switch (category) {
    case 'series': 
      filteredContent = [
        { title: 'Documentaries', data: content?.filter((item) => item.genre === 'documentaries') },
        { title: 'Comedies', data: content?.filter((item) => item.genre === 'comedies') },
        { title: 'Children', data: content?.filter((item) => item.genre === 'children') },
        { title: 'Crime', data: content?.filter((item) => item.genre === 'crime') },
        { title: 'Feel Good', data: content?.filter((item) => item.genre === 'feel-good') },
      ];
      break;
    case 'films':
      filteredContent = [
        { title: 'Drama', data: content?.filter((item) => item.genre === 'drama') },
        { title: 'Thriller', data: content?.filter((item) => item.genre === 'thriller') },
        { title: 'Children', data: content?.filter((item) => item.genre === 'children') },
        { title: 'Suspense', data: content?.filter((item) => item.genre === 'suspense') },
        { title: 'Romance', data: content?.filter((item) => item.genre === 'romance') },
      ];
      break;
    case 'mylist':
      filteredContent = [
        { title: 'My List', data: content?.filter((item) => item.genre === 'added') },
      ];
    break;
  }
  return filteredContent;
}

