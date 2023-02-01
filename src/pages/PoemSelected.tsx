import ReactHowler from 'react-howler';
import { useLocation } from 'react-router-dom';
import { PoemData } from '../types/poems';
import { useState, useEffect } from 'react';



const PoemSelected = () => {
  const location = useLocation();
  const state = location.state as PoemData; // trick to set type for location.state - https://github.com/reach/router/issues/414

  const selectedPoem = state.poem!.replaceAll('\\n', '\n');

  // ! needed to tell TS compiler poem is always defined

  const selectedPoemDescription = state.description;
  const selectedPoemTitle = state.name;
  const selectedAudioURL = new URL(`../assets/audios/${state.audio_file}`, import.meta.url).href // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url

  console.log(location);

  // Adjusting Audio

  const [isPlaying, setPlaying] = useState(false);

  const playAudio = () => {
    setPlaying(true); // Flip boolean to Play/Pause Sound
  };
  const stopAudio = () => {
    setPlaying(false); // Flip boolean to Play/Pause Sound
  };

  // React Howler can't seem to replay an audio consistently (very frustrating), so added this function to play the start of the next audio clip

  const promptNextAudio = () => {
    setTimeout(() => {
      setPlaying(false);
      console.log('started again');
    }, 0);
  };

  return (
    <section>
      <div className='py-4 text-center font-tangerine text-5xl'>
        {selectedPoemTitle}
      </div>
      <div className='mb-6 border-b-2 border-dashed border-black pb-6 text-center font-baskerville'>
        {selectedPoemDescription}
      </div>
      <ReactHowler
        src={[selectedAudioURL]}
        playing={isPlaying}
        onEnd={promptNextAudio}
      />
      <button onClick={playAudio}>Play</button>
      <button onClick={stopAudio}>Stop</button>
      <div className='whitespace-pre-wrap text-center font-baskerville  italic'>
        {selectedPoem}
      </div>
    </section>
  );
};

export default PoemSelected;
