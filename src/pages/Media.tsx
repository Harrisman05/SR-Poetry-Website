import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Media = () => {
  return (
    <section className='flex flex-col font-baskerville'>
      <h1 className='py-4 text-center text-3xl md:text-4xl'>Media</h1>
      <p className='border-b-2 border-dashed border-black pb-6 text-center text-lg md:text-xl'>
        You can find me on various social media platforms:
      </p>
      <div className='mx-auto py-4 grid grid-cols-2 gap-x-10 gap-y-8 items-center bg-slate-300 text-center'>
        <a href='https://www.youtube.com/@Seamus_the_Poet' target="_blank" className='flex items-center justify-between cursor-pointer hover:text-hyperlink-blue hover:underline'>
          <p className='font-youtube-sans text-3xl font-bold text-hyperlink-blue'>YouTube</p>
          <YouTubeIcon className='text-youtube-red hover:brightness-125' sx={{ fontSize: 70 }} />
        </a>
        <a href='https://www.youtube.com/@Seamus_the_Poet' className='text-2xl text-hyperlink-blue hover:underline'>
          @Seamus_the_Poet
        </a>
        <div className='flex items-center justify-between gap-3'>
          <p className='text-3xl font-roboto'>Instagram</p>
          <InstagramIcon
          className='text'
          sx={{fontSize: 70}}
          />
        </div>
        <p className='text-2xl'>Coming soon...</p>
      </div>
    </section>
  );
};
export default Media;
