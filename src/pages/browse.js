import React, { useState, useEffect, useCallback, useContext } from 'react';
import { BrowseContainer } from '../containers/browse';
import { selectionFilter } from '../utils';
import { FirebaseContext } from '../context/firebase';

export default function Browse() {
  const [category, setCategory] = useState('series');
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  const categoryChange = (category) => {
    setCategory(category);
  };

  useState(
    firebase
      .firestore()
      .collection(category)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(selectionFilter(allContent, category));
        
      }),
    []
  );

  return (
    <BrowseContainer
      category={category}
      slides={content}
      categoryChange={categoryChange}
    />
  );
}
