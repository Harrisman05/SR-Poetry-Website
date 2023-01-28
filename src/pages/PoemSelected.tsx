import { useLocation } from 'react-router-dom';
import { PoemData } from '../types/poems';

const PoemSelected = () => {
  const location = useLocation();
  const state = location.state as PoemData // trick to set type for location.state - https://github.com/reach/router/issues/414

  const selectedPoem = state.poem!.replaceAll('\\n', '\n'); 
  
  // ! needed to tell TS compiler poem is always defined
  
  const selectedPoemDescription = state.description;
  const selectedPoemTitle = state.name;

  console.log(location);

  return (
    <section>
      <div className='text-center font-tangerine py-4 text-5xl'> {selectedPoemTitle} </div>
      <div className='text-center font-baskerville pb-6 mb-6 border-b-2 border-black border-dashed'> {selectedPoemDescription} </div>
      <div className='text-center font-baskerville italic  whitespace-pre-wrap'>{selectedPoem}</div>
    </section>
  );
};

export default PoemSelected;
