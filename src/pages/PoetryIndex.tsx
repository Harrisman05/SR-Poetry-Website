import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { poemsCollection } from '../firebase-config';
import { getDocs } from 'firebase/firestore';
import { PoemData } from '../types/poems';

const Poetry = () => {
  const [poems, setPoems] = useState<PoemData[]>([]);

  useEffect(() => {
    // useEffect executes when page loads. Make async request to firestore
    // to obtain all poem data  - https://www.youtube.com/watch?v=jCY6DH8F4oc

    const getPoemsFromDb = async () => {
      // Get documents from the poems collection
      const data = await getDocs(poemsCollection);

      console.log(data);

      // confusing syntax, but extract all the data and id from the data.docs
      // property and map it to a new object

      setTimeout(() => console.log(poems), 5000);

      setPoems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getPoemsFromDb();
  }, []);

  return (
    <section className='flex flex-col bg-slate-300 font-baskerville'>
      <div className='text-center text-lg'>Poetry index title</div>
      <div className='text-xs'>
        Poetry index description - Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Debitis, obcaecati! Laborum nulla sunt dolorum quos
        sit recusandae sapiente perferendis, ducimus consequuntur laboriosam
        aperiam! Earum minima corporis consectetur fugit! Soluta neque rerum
        voluptatum saepe hic obcaecati alias iste laboriosam distinctio ad
        corrupti repudiandae illo, commodi facilis enim? Voluptatem quos
        assumenda magnam.
      </div>

      <div className='flex flex-col'>
        {poems.map((poem) => {
          return (
            <Link
              to='/poem-selected'
              state={poem}
              key={poem.id}
              className=' text-center font-tangerine text-lg text-hyperlink-blue hover:underline'
            >
              {poem.name}{' '}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Poetry;
