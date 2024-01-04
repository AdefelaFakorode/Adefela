import React from 'react'
import BBP1 from "../assets/BBP1.jpg"
import BBP2 from "../assets/BBP2.jpg"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-primary ">
      {/*About text*/}
      <div className='flex justify-center text-primaryTextColor font-bold text-6xl'>
        <h1>About Me</h1>
      </div>
      
      {/*Card*/}
      <div className='flex justify-center'>
      <div className=' w-96 h-72 rounded-3xl  bg-secondary'></div>
      </div>

      <div className='flex-col justify-center space-x-56'>
        {/*Images*/}
      <img src={BBP1} alt="bbp1" className='w-48 h-72 rounded-3xl' />
      <img src={BBP2} alt="bbp2" className='w-48 h-72 rounded-3xl' />
      </div>

    </div>
  )
}

export default About
