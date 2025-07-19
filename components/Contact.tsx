'use client'

import React from 'react'
import { RiChat1Line, RiSmartphoneLine, RiLineLine } from 'react-icons/ri'
import Socials from './Socials'
import Form from './Form'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto">
        <div className="relative w-full shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px]">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-accent" />

          <div className="border-t border-border/20 pt-6 flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* Info section */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 flex flex-col items-center xl:items-start text-center xl:text-left">
              <h4 className="text-[26px] font-primary font-bold mb-6">Contact Us</h4>
              <p className="mb-9">
                Get in touch with us via email, LINE, or phone. We're here to help you with your project needs.
              </p>

              <div className="flex flex-col gap-[40px] mb-16 w-full">
                {/* Contact item 1 */}
                <div className="flex flex-col items-center xl:flex-row xl:items-start gap-[20px]">
                  <RiChat1Line className="text-[28px] text-accent shrink-0" />
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Chat with Us
                    </h5>
                    <p className="mb-4">
                      Our friendly team is ready to answer your questions.
                    </p>
                    <p className="font-semibold text-primary">sandtechth@gmail.com</p>
                  </div>
                </div>

                {/* Contact item 2 - LINE Official */}
                <div className="flex flex-col items-center xl:flex-row xl:items-start gap-[20px]">
                  <RiLineLine className="text-[28px] text-accent shrink-0" />
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Line Official
                    </h5>
                    <p className="mb-4">Scan to chat with us directly on LINE.</p>
                    <div className="relative w-full max-w-[260px] mx-auto">
                      <Image
                        src="/assets/img/contact/lineofficial.jpg"
                        width={260}
                        height={260}
                        alt="Line Official QR Code"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact item 3 */}
                <div className="flex flex-col items-center xl:flex-row xl:items-start gap-[20px]">
                  <RiSmartphoneLine className="text-[28px] text-accent shrink-0" />
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">We’re available Mon–Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-primary">+664390844</p>
                  </div>
                </div>
              </div>

              <Socials
                containerStyles="flex gap-[40px] justify-center xl:justify-start"
                iconStyles="text-primary text-[20px]"
              />
              {/* New paragraph about payment options */}
              <p className="mt-8 text-sm text-secondary max-w-[380px]">
                We accept payments via Kasikorn Bank for your convenience and secure transactions.
              </p>
            </div>

            {/* Form section */}
            <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left xl:self-stretch">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Let us know what you need, and we’ll get back to you with a tailored quote.
              </p>

              <div className="w-full">
                <Form />
              </div>

              {/* Payment Methods section below Form */}
              <div className="mt-12 w-full">
                <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
                <div className="w-full">
                  <Image
                    src="/assets/img/contact/sandtech header.jpg"
                    alt="Payment Methods"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
