'use client'

import React from 'react'
import Pretitle from './Pretitle'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { Link as ScrollLink } from 'react-scroll'
import { RiCheckboxCircleFill } from 'react-icons/ri'

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <div
              className="
                max-w-[540px] 
                mx-auto xl:mx-0 
                text-center xl:text-left
                flex flex-col items-center xl:items-start
              "
            >
              {/* pretitle */}
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">
                Focused On Excellence In Every Project
              </h2>
              <p className="mb-11 text-justify">
                Our unwavering commitment to Excellence drives every project we
                undertake. From concept to completion, we meticulously craft solutions
                that embody quality, precision and innovation.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                {/* <Image src="/assets/img/about/signature.svg" width={154} height={38} alt=''/> */}
                {/* <p>Company Ceo</p> */}
              </div>
              {/* btn */}
              <ScrollLink to="contact" smooth spy>
                <CustomButton text="Contact Us" />
              </ScrollLink>
            </div>
          </div>

          {/* img */}
          <div className="flex-1 flex justify-center xl:justify-end">
            <div
              className="
                relative
                w-full max-w-[520px] h-[550px] 
                border-4 border-accent
                overflow-hidden
                group
                cursor-pointer
              "
            >
              <Image
                src="/assets/img/about/aboutsandtech.jpg"
                fill
                alt=""
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={100}
              />

              {/* Optional info overlay panel - you can remove if you want */}
              {/* <div className="absolute bottom-4 left-4 bg-primary bg-opacity-90 p-4 rounded-md max-w-[90%] text-white">
                <h4 className="uppercase font-primary font-semibold tracking-[1px] mb-1">About Us</h4>
                <p className="text-sm">
                  Excellence in every project — precision and innovation at its best.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
