import React from 'react'
import Pretitle from './Pretitle'
import Image from 'next/image'
import CustomButton from './CustomButton'



const About = () => {
  return (
    <div className='pt-16 xl:pt-32' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center'>
          {/*text*/}
          <div className='flex-1'>
            <div className='max-w-[540px]'>
              {/*pretitle*/}
              <Pretitle text="About us"/>
              <h2 className="h2 mb-6">Focused On Excellence In Every Project</h2>
              <p className='mb-11 text-justify'>Our unweavering commitment to Excellence drives every project we 
                undertake. From concept to completion, we meticulously craft solutions
                that embody quality, precision and innovation.
              </p>
              <div className='w-max flex flex-col text-right mb-10'>
                <Image src="/assets/img/about/signature.svg" width={154} height={38} alt=''/>
                <p>Company Ceo</p>
            </div>
            {/*btn*/}
            <CustomButton text='Contact Us'/>
            </div>

          </div>
          {/*img*/}
          <div className='flex-1 xl:flex xl:justify-center'>
            <div className='xl:w-[444px] xl:h-[493px] relative'>
              {/*bg*/}
              <div className='hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10'></div>
              <Image src={"/assets/img/about/img.jpg"} width={444}  height={493} alt='' className='object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About