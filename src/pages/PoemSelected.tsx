import { useLocation } from 'react-router-dom';
import { PoemData } from '../types/poems';

const PoemSelected = () => {
  const location = useLocation();
  const state = location.state as PoemData; // trick to set type for location.state - https://github.com/reach/router/issues/414

  const selectedPoem = state.poem!.replaceAll('\\n', '\n');

  // ! needed to tell TS compiler poem is always defined

  const selectedPoemDescription = state.description;
  const selectedPoemTitle = state.name;

  console.log(location);

  return (
    <section>
      <div className='py-4 text-center font-tangerine text-5xl'>
        {' '}
        {selectedPoemTitle}{' '}
      </div>
      <div className='mb-6 border-b-2 border-dashed border-black pb-6 text-center font-baskerville'>
        {' '}
        {selectedPoemDescription}{' '}
      </div>
      <div className='whitespace-pre-wrap text-center font-baskerville  italic'>
        {selectedPoem}
      </div>
    </section>
  );
};

export default PoemSelected;
