  import React from 'react'
  import Image from 'next/image'
  import CustomButton from './CustomButton'
  import Pretitle from './Pretitle'
  import Slider from './Slider'

  const Testimonials = () => {
    return (
      <section className='pt-16 xl:pt-32'>
        <div className='container mx-auto'>
          <div className="flex flex-col xl:flex-row relative">
            {/*text */}
            <div className='flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0'>
              <Pretitle text='Testimonials'/>
              <h2 className="h2 mb-6">Built on Trust, Proven By Results</h2>
              <p className='mb-10 max-w-[420px]'>From Home to commerical spaces, our clients share their experiences of working with us. See how we've helped them bring their dreams to live with expert craftmanship</p>
              <CustomButton text='Work with Us'/>   
            </div>
            {/*img and slider*/}
            <div className='flex-1'>
              <div className='relative hidden xl:flex xl:w-[570px] xl:h-[580px]'>
                <Image src="/assets/img/testimonials/img.jpg" fill className='object-cover' quality={100} alt=''/>
              </div>
              <div className='xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max bg-pink-300'>
                <Slider/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Testimonials