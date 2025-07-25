import React from 'react'
import {RiPhoneFill, RiMailFill } from "react-icons/ri"
import Socials from './Socials'
const Topbar = () => {
  return (
    <section className='py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#0bc0f4] to-[#0bc0f4] flex items-center' id='home'>
        <div className='container mx-auto'>
            {/* phone mail and social links*/}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
                <div className='hidden xl:flex items-center gap-8'>
                    {/* phone */}
                    <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 bg-primary text-white flex items-center justify-center'>
                            <RiPhoneFill/>
                        </div>
                        <p className='font-medium text-primary'> +664390844</p>
                    </div>

                    {/* mail */}
                    <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 bg-primary text-white flex items-center justify-center'>
                            <RiMailFill/>
                        </div>
                        <p className='font-medium text-primary'> sandtechth@gmail.com</p>
                    </div>

                </div>
                {/*socials*/}
                <Socials containerStyles="flex items-center gap-8 mx-auto xl:mx-0" iconStyles="text-primary"/>
            </div>

        </div>
    </section>
  )
}

export default Topbar