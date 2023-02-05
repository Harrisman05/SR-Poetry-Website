import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='font-baskerville text-md md:text-lg'>
      <p>I'm Séamus, the London Irishman poet, trying to put a smile on the face of people I've never met. With words of humour, history and my take on the life I've lived and still living!</p>
      <br />
      <p>Hoping to inspire people to pick up a pen and write a poem!
      </p>
      <br />
      <p>Check out my poetry by <Link to='/poetry-index' className='text-hyperlink-blue hover:underline'>clicking here...</Link></p>
    </div>
  )
}

export default About