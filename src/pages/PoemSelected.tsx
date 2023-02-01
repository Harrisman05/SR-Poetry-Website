import ReactHowler from 'react-howler';
import { useLocation } from 'react-router-dom';
import { PoemData } from '../types/poems';
import { useState } from 'react';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const PoemSelected = () => {
  const location = useLocation();
  const state = location.state as PoemData; // trick to set type for location.state - https://github.com/reach/router/issues/414

  const selectedPoem = state.poem!.replaceAll('\\n', '\n');

  // ! needed to tell TS compiler poem is always defined

  const selectedPoemDescription = state.description;
  const selectedPoemTitle = state.name;
  const selectedAudioURL = new URL(
    `../assets/audios/${state.audio_file}`,
    import.meta.url
  ).href; // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url

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
      <div className='flex flex-col items-center'>
        <div className='py-4 text-center font-tangerine text-5xl'>
          {selectedPoemTitle}
        </div>
        <div className='pb-4 text-center font-baskerville'>
          {selectedPoemDescription}
        </div>
        <div className='flex pb-4 font-baskerville font-bold'>
          <p>Audio:</p>
          <ReactHowler
            src={[selectedAudioURL]}
            playing={isPlaying}
            onEnd={promptNextAudio}
          />
          {isPlaying ? (
            <button className='mx-auto inline-block w-12 cursor-default'>
              <PauseCircleIcon
                sx={{ color: 'crimson', '&:hover': { color: 'red' }}}
                className='scale-150 cursor-pointer'
                onClick={stopAudio}
              />
            </button>
          ) : (
            <button className='mx-auto inline-block w-12 cursor-default'>
              <PlayCircleIcon
                sx={{ color: 'darkgreen', '&:hover': { color: 'green' } }}
                className='scale-150 cursor-pointer'
                onClick={playAudio}
              />
            </button>
          )}
        </div>
      </div>

      <div className='whitespace-pre-wrap border-t-2 border-dashed  border-black pt-4 text-center font-baskerville italic'>
        {selectedPoem}
      </div>
    </section>
  );
};

export default PoemSelected;
