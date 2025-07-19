'use client';

import React, { useState, ChangeEvent } from 'react';
import { RiPhoneFill, RiMailFill, RiLineLine } from 'react-icons/ri';
import Logo from './Logo';
import CustomButton from './CustomButton';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="mt-16 xl:mt-32 bg-primary py-16 xl:py-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-[60px]">
          
          {/* Logo and description */}
          <div className="flex-1 text-white flex flex-col items-center xl:items-start text-center xl:text-left">
            <div className="mb-6 flex justify-center xl:justify-start">
              <Logo height={40} width={40} />
            </div>
            <p className="leading-relaxed text-border max-w-[400px] text-center xl:text-left">
              SandTech Engineering Company Limited is dedicated to delivering quality building services with integrity and professionalism. Your vision, our expertise.
            </p>
          </div>

          {/* Contact section */}
          <div className="flex-1 text-border flex flex-col items-center xl:items-start text-center xl:text-left">
            <h4 className="h4 text-white mb-8">Contact</h4>
            <ul className="space-y-6 max-w-[300px] w-full">
              <li className="flex flex-col items-center xl:flex-row gap-2 xl:gap-4">
                <RiLineLine className="text-accent text-2xl mb-1" />
                <p>sandtech engineering</p>
              </li>
              <li className="flex flex-col items-center xl:flex-row gap-2 xl:gap-4">
                <RiPhoneFill className="text-accent text-2xl mb-1" />
                <p>+664390844</p>
              </li>
              <li className="flex flex-col items-center xl:flex-row gap-2 xl:gap-4">
                <RiMailFill className="text-accent text-2xl mb-1" />
                <p>sandtechth@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div className="flex-1 text-border flex flex-col items-center xl:items-start text-center xl:text-left">
            <h4 className="h4 text-white mb-8">Newsletter</h4>
            <p className="mb-6 w-full max-w-[400px]">
              Stay updated with our latest news and offers. Subscribe to our newsletter!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 flex-1 rounded-md text-black bg-gray-100 border border-gray-300 focus:border-accent focus:ring-accent focus:ring-1 outline-none"
                aria-label="Email address"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <div className="flex justify-center sm:justify-start">
                <CustomButton
                  text="Subscribe"
                  onClick={handleSubmit}
                />
              </div>
            </div>

            {message && (
              <p className="mt-2 text-sm text-white" aria-live="polite">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
