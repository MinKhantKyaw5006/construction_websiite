"use client";
import React, { useState, useEffect } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { RiMenu3Fill } from 'react-icons/ri'
import Logo from './Logo';
import Socials from './Socials';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: 'FAQ', path: 'faq' },
  { name: "contact", path: "contact" },
]

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      // Set your desktop breakpoint here (e.g. 1280px for xl)
      if (window.innerWidth >= 1280) {
        setIsOpen(false) // Close sidebar when window is wider than desktop breakpoint
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='text-white flex items-center justify-center text-3xl' onClick={() => setIsOpen(true)}>
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className='bg-primary border-none text-white'>
        <div className='flex flex-col pt-16 pb-8 items-center justify-between h-full'>
          <SheetHeader>
            <SheetTitle>
              <Logo height={40} width={40} />
            </SheetTitle>
            <SheetDescription className='sr-only'>
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className='w-full flex flex-col gap-10 justify-center text-center'>
            {links.map((link, index) => (
              <li key={index} className='text-white uppercase font-primary font-medium tracking-[1.2px]'>
                <ScrollLink
                  to={link.path}
                  smooth
                  spy
                  duration={500}
                  className='cursor-pointer'
                  activeClass='text-accent'
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <Socials containerStyles='text-white text-xl flex gap-6' />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavMobile;
