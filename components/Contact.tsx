import React from 'react'
import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from 'react-icons/ri'
import Socials from './Socials'
import Form from './Form'

const Contact = () => {
  return (
    <section className='pt-16 xl:pt-32' id='contact'>
      <div className='container mx-auto'>
        {/* Box wrapper needs relative for the accent line to be absolute inside */}
        <div className='relative w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px]'>
          {/* Accent line inside the top of the box */}
          <div className='absolute top-0 left-0 w-full h-[4px] bg-accent' />

          {/* Actual box content with padding and border */}
          <div className='border-t border-border/20 pt-6 flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]'>
            {/* Info section */}
            <div className='w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]'>
              <h4 className='text-[26px] font-primary font-bold mb-6'>Contact Us</h4>
              <p className='mb-9'>
                dummy text dummy textdummy textdummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text
              </p>

              <div className='flex flex-col gap-[40px] mb-16'>
                {/* Contact item 1 */}
                <div className='flex items-start gap-[20px]'>
                  <RiChat1Line className='text-[28px] text-accent' />
                  <div>
                    <h5 className='text-[22px] font-semibold font-primary leading-none mb-2'>Chat to Us</h5>
                    <p className='mb-4'>Our friendly team is here to help.</p>
                    <p className='font-semibold text-primary'>sandtechth@gmail.com</p>
                  </div>
                </div>

                {/* Contact item 2 */}
                <div className='flex items-start gap-[20px]'>
                  <RiMapPin2Line className='text-[28px] text-accent' />
                  <div>
                    <h5 className='text-[22px] font-semibold font-primary leading-none mb-2'>Office</h5>
                    <p className='mb-4'>Come and say hello at our office.</p>
                    <p className='font-semibold text-primary'>Samut Prakan, Thailand</p>
                  </div>
                </div>

                {/* Contact item 3 */}
                <div className='flex items-start gap-[20px]'>
                  <RiSmartphoneLine className='text-[28px] text-accent' />
                  <div>
                    <h5 className='text-[22px] font-semibold font-primary leading-none mb-2'>Phone</h5>
                    <p className='mb-4'>Mon-Fri from 8am to 5pm</p>
                    <p className='font-semibold text-primary'>+613866227</p>
                  </div>
                </div>
              </div>
              <Socials containerStyles='flex gap-[40px]' iconStyles='text-primary text-[20px]'/>
            </div>

            {/* Form section */}
            <div className='flex-1'>
              <h2 className='h2 mb-3'>Request A Quote</h2>
              <p className='mb-9'>
                dummy text dummy textdummy textdummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
