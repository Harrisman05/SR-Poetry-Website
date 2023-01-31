const ContactMe = () => {
  return (
    <div className='font-baskerville'>
      <h1 className='text-center text-4xl my-10'>Contact Me</h1>
      <form
        action='https://formsubmit.co/'
        method='POST'
        className='w-9/12 max-w-sm mx-auto grid'
      >
        <div>
          <label className='block mb-3'>Full Name:</label>
          <input className='w-full mb-3 pl-1 border-2 border-gray-500 rounded-md' type='text' name='name' required />
        </div>
        <div>
          <label className='block mb-3'>Email:</label>
          <input className='w-full mb-3 pl-1 border-2 border-gray-500 rounded-md' type='text' name='email' required />
        </div>
        <div>
          <label className='block mb-3'>Message:</label>
          <textarea className='w-full h-56 mb-3 pl-1 border-2 border-gray-500 rounded-md' name='message' required></textarea>
        </div>
        <button className='text-2xl hover:text-hyperlink-blue hover:underline' type='submit'>Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
