import { useState, useEffect } from 'react';

import { poemsCollection } from '../firebase-config';
import { getDocs } from 'firebase/firestore';

const Poetry = () => {
  const [poems, setPoems] = useState([]);
  const poemsCollectionRef = poemsCollection; // create reference to the poems collection

  useEffect(() => {
    // useEffect executes when page loads. Make async request to firestore
    // to obtain all poem data

    const getPoemsFromDb = async () => {
      // Get documents from the poems collection
      const data: any = await getDocs(poemsCollectionRef);

      // confusing syntax, but extract all the data and id from the data.docs
      // property and map it to a new object

      setPoems(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };

    getPoemsFromDb();
  }, []);

  return (
    <div>
      {poems.map((poem: any) => {

        const santised = poem.poem.replaceAll('\\n', '\n');
        
        return <div key={poem.id} className='whitespace-pre-wrap'>{santised}</div>;
      })}
    </div>
  );
};

export default Poetry;
