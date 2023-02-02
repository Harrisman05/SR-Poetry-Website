const ContactMe = () => {
  return (
    <div className='font-baskerville'>
      <h1 className='my-10 text-center text-4xl'>Contact Me</h1>
      <form
        action='https://formsubmit.co/bd4b1add7bc8d333c94a705ae54d3153'
        method='POST'
        className='mx-auto grid w-9/12 max-w-sm'
      >
        <div>
          <label className='mb-3 block'>Full Name:</label>
          <input
            className='mb-3 w-full rounded-md border-2 border-gray-500 pl-1'
            type='text'
            name='name'
            required
          />
        </div>
        <div>
          <label className='mb-3 block'>Email:</label>
          <input
            className='mb-3 w-full rounded-md border-2 border-gray-500 pl-1'
            type='text'
            name='email'
            required
          />
        </div>
        <div>
          <label className='mb-3 block'>Message:</label>
          <textarea
            className='mb-3 h-56 w-full rounded-md border-2 border-gray-500 pl-1'
            name='message'
            required
          ></textarea>
        </div>
        <button
          className='text-2xl hover:text-hyperlink-blue hover:underline'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
