import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { poemsCollection } from '../firebase-config';
import { getDocs } from 'firebase/firestore';
import { PoemData } from '../types/poems';
import { RotatingLines } from 'react-loader-spinner';

const Poetry = () => {
  const [poems, setPoems] = useState<PoemData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // useEffect executes when page loads. Make async request to firestore
    // to obtain all poem data  - https://www.youtube.com/watch?v=jCY6DH8F4oc

    const getPoemsFromDb = async () => {
      // Get documents from the poems collection
      setLoading(true);
      const data = await getDocs(poemsCollection);

      console.log(data);

      setTimeout(() => console.log(poems), 5000);
      
      // confusing syntax, but extract all the data and id from the data.docs property and map it to a new object

      setPoems(data.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))); // lose type safety setting database data to PoemsData array
      setLoading(false);
    };
    getPoemsFromDb();
  }, []);

  return (
    <section className='flex flex-col font-baskerville'>
      <h1 className='py-4 text-center text-3xl md:text-4xl'>Poetry index</h1>
      <p className='border-b-2 border-dashed border-black pb-6 text-center text-lg md:text-xl'>
        Select a poem from the list to read
      </p>
      <div className='flex flex-col items-center justify-center pt-4 '>
        {loading ? (
          <div className='flex flex-col items-center'>
            <p className='pb-5 font-baskerville text-xl'>Fetching poems...</p>
            <RotatingLines />
          </div>
        ) : null}
        {poems
          .sort((a, b) => a.upload_order - b.upload_order)
          .map((poem) => {
            return (
              <Link
                to='/poem-selected'
                state={poem}
                key={poem.id}
                className=' py-2 text-center font-tangerine text-3xl text-hyperlink-blue hover:underline'
              >
                {poem.name}
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Poetry;
