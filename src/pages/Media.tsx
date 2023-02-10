import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Media = () => {
  return (
    <section className='flex flex-col font-baskerville'>
      <h1 className='py-4 text-center text-3xl md:text-4xl'>Media</h1>
      <p className='border-b-2 border-dashed border-black pb-6 text-center text-lg md:text-xl'>
        You can find me on various social media platforms:
      </p>
      <div className='mx-auto grid grid-cols-2 items-center gap-x-3 gap-y-4  lg:gap-x-10 lg:gap-y-8 py-4 text-center'>
        <a
          href='https://www.youtube.com/@Seamus_the_Poet'
          target='_blank'
          className='flex cursor-pointer items-center justify-between hover:text-hyperlink-blue hover:underline'
        >
          <p className='font-youtube-sans text-xl lg:text-3xl font-bold text-hyperlink-blue'>
            YouTube
          </p>
          <YouTubeIcon
            className='text-youtube-red lg:scale-150 hover:brightness-125'
            sx={{ fontSize: 50 }}
          />
        </a>
        <a
          href='https://www.youtube.com/@Seamus_the_Poet'
          className='lg:text-2xl text-hyperlink-blue hover:underline'
        >
          @Seamus_the_Poet
        </a>
        <div className='flex items-center justify-between gap-3'>
          <p className='font-roboto text-xl lg:text-3xl'>Instagram</p>
          <InstagramIcon className='lg:scale-150' sx={{ fontSize: 50 }} />
        </div>
        <p className='lg:text-2xl'>Coming soon...</p>
      </div>
    </section>
  );
};
export default Media;
