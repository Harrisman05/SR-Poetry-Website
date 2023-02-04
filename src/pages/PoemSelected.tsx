import ReactHowler from 'react-howler';
import { Link, useLocation } from 'react-router-dom';
import { PoemData } from '../types/poems';
import { useEffect, useRef, useState } from 'react';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ReplayCircleFilled from '@mui/icons-material/ReplayCircleFilled';
import ReactAudioPlayer from 'react-audio-player';

const PoemSelected = () => {
  const location = useLocation();
  const state = location.state as PoemData; // trick to set type for location.state - https://github.com/reach/router/issues/414

  const selectedPoem = state.poem.replaceAll('\\n', '\n');

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

  const howler: any = useRef(null); // https://stackoverflow.com/questions/71016353/call-load-from-react-howler

  const resetAudio = () => {
    if (howler.current) {
      howler.current.stop();
      setPlaying(false);
    }
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
        <div className='py-4 text-center font-tangerine text-4xl md:text-5xl'>
          {selectedPoemTitle}
        </div>
        <div className='pb-4 text-center text-sm md:text-lg font-baskerville'>
          {selectedPoemDescription}
        </div>
        <div className='flex pb-4 font-baskerville font-bold'>
          <p className='mr-1'>Audio:</p>
          <ReactHowler
            format={['webm', '.webm', 'wav', '.wav']}
            html5={true}
            src={[selectedAudioURL]}
            playing={isPlaying}
            onEnd={promptNextAudio}
            ref={howler}
          />
          {isPlaying ? (
              <button className='mx-auto w-12 cursor-default'>
                <PauseCircleIcon
                  sx={{ color: 'crimson', '&:hover': { color: 'red' } }}
                  className='scale-150 cursor-pointer'
                  onClick={stopAudio}
                />
              </button>
          ) : (
              <button className='mx-auto w-12 cursor-default'>
                <PlayCircleIcon
                  sx={{ color: 'darkgreen', '&:hover': { color: 'green' } }}
                  className='scale-150 cursor-pointer'
                  onClick={playAudio}
                />
              </button>
          )}
          <button>
          <ReplayCircleFilled
            sx={{ color: 'navy', '&:hover': { color: 'blue' } }}
            className='ml-4 scale-150 cursor-pointer'
            onClick={resetAudio}
          />
          </button>
        </div>
      </div>
      <ReactAudioPlayer
      src={selectedAudioURL}
      autoPlay
      controls
      />
      <div className='whitespace-pre-wrap border-t-2 text-sm md:text-lg border-dashed border-black pt-4 text-center font-baskerville italic'>
        {selectedPoem}
      </div>
      <p className='text-center font-baskerville my-5'>
          <Link
            to='/poetry-index'
            className='text-hyperlink-blue hover:underline'
          >
            Return to Poetry Index
          </Link>
        </p>
    </section>
  );
};

export default PoemSelected;
