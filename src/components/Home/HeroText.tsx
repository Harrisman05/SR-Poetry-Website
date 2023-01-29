import { TypeAnimation } from 'react-type-animation';

const HeroText = () => {
  return (
    <div>
      <h1 className='font-tangerine text-6xl text-center w-con'>
        Séamus
        <span className='block'>Rattigan</span>
      </h1>
      <TypeAnimation
        className='font-handlee text-lg leading-10 text-center'
        sequence={[
          'London Irish Poet',
          5000,
          'Poet for the people',
          5000,
          "Rovin' fella",
          5000,
          'Storyteller',
          5000
        ]}
        speed={5}
        wrapper='p'
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
};

export default HeroText;
