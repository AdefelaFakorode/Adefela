import React from 'react'
import BBP1 from "../assets/BBP1.jpg"
import BBP2 from "../assets/BBP2.jpg"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-primary ">
      {/*About text*/}
      <div className='flex justify-center text-primaryTextColor font-bold text-3xl mb-3 mt-14'>
        <h1>About Me</h1>
      </div>
      
      {/*Card*/}
      <div className='flex justify-center'>
      <div className=' w-96 h-72 rounded-3xl  bg-secondary'>
        <p className='m-8 text-white w-80'>
        My name is Adefela Fakorode. Currently, I'm an undergraduate student-athlete at the College of Staten Island, 
        majoring in Computer Science. Deeply immersed in the world of Software Development, my passion lies in the exciting 
        realms of full-stack development, intuitive UI/UX design, the marvels of artificial intelligence, and fascinating 
        human-computer interactions.

        </p>
        </div>
      </div>

      <div className='flex-col justify-center space-x-60 mt-10'>
        {/*Images*/}
      <img src={BBP1} alt="bbp1" className='w-36 h-52 rounded-3xl ml-20' />
      <img src={BBP2} alt="bbp2" className='w-36 h-52 rounded-3xl' />
      </div>

    </div>
  )
}

export default About
