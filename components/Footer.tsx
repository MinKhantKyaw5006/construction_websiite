import React from 'react'
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from 'react-icons/ri'
import Logo from './Logo'
import CustomButton from './CustomButton'

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary py-16 xl:py-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-[60px]">
          {/* logo and description */}
          <div className="flex-1 text-white">
            <div className="mb-6">
              <Logo height={40} width={40} />
            </div>
            <p className="leading-relaxed text-border">
              dummy text dummy textdummy textdummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text
            </p>
          </div>

          {/* contact section */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <RiMapPin2Fill className="text-accent text-xl mt-1" />
                <p>10560 Soi 1, Samut Prakan, Thailand</p>
              </li>
              <li className="flex items-start gap-4">
                <RiPhoneFill className="text-accent text-xl mt-1" />
                <p>+613866227</p>
              </li>
              <li className="flex items-start gap-4">
                <RiMailFill className="text-accent text-xl mt-1" />
                <p>sandtechth@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* newsletter or quick info */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-8">Newsletter</h4>
            <p className="mb-6">
              Stay updated with our latest news and offers. We promise not to spam!
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full rounded-md text-black"
              />
              <CustomButton text='Enter your Email'/>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
