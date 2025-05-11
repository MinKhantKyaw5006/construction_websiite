import React from 'react'
import { Button } from './ui/button'
import { RiArrowRightUpLine } from 'react-icons/ri'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <section className='h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative' >
    {/*overlay*/}
    <div className='absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10'></div>
    <div className='container mx-auto h-full flex items-center'>
      <div className='z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]'>
        <h1 className='h1 text-white mb-4'>
          <span className='text-accent'>Building</span> robust lasting 
          solutions</h1>
          <p className='text-white mb-9'>From concept to completion, we ensure every details is optimized for strength and endurance, creating solutions that
            inspire confidence and stand firm for years.
          </p>
          {/*btn*/}
          <div>
            <CustomButton text="See Our Work"/>
          </div>
      </div>
      
    </div>
    </section>
  )
}

export default Hero