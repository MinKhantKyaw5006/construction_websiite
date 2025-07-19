import React from 'react'
import Image from 'next/image'
import Pretitle from './Pretitle'
import { RiCheckboxCircleFill } from 'react-icons/ri'

const workData = [
  {
    img: "/assets/img/work/restorationtemp.jpg",
    name: "restoration",
    description:
      "Restoring and preserving structures with care, from historic landmarks to damaged properties.",
    href: "",
  },
  {
    img: "/assets/img/work/constructiontemp.jpg",
    name: "construction",
    description:
      "Building robust and innovative spaces from the ground up with precision and expertise.",
    href: "",
  },
  {
    img: "/assets/img/work/renovationtemp.jpg",
    name: "renovation",
    description:
      "Transforming and modernizing interiors and exteriors to suit your vision and lifestyle.",
    href: "",
  },
  {
    img: "/assets/img/work/consultingtemp.jpg",
    name: "consulting",
    description:
      "Guiding your project from concept to completion with strategic planning and expert advice.",
    href: "",
  },
];

const Work = () => {
  return (
    <div className='pt-16 xl:pt-32' id='projects'>
      <div className='container mx-auto'>
        <div className='text-center max-w-[540px] mx-auto xl:mb-20'>
          <Pretitle text='Our Work' center />
          <h2 className='h2 mb-3'>Discover our Projects</h2>
          <p className='mb-11 max-w-[480px] mx-auto'>
            Providing expert services designed to deliver quality and innovation in every project we undertake
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          {workData.map((item, index) => (
            <div
              key={index}
              className='w-full h-[492px] relative overflow-hidden group flex justify-center border-4 border-accent'
            >
              <Image
                src={item.img}
                fill
                className='object-cover'
                alt=""
                quality={100}
              />

              {/* info panel */}
              <div className='w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500'>
                <div className='pl-8'>
                  <h4 className='text-white font-primary font-semibold tracking-[1px] uppercase'>
                    {item.name}
                  </h4>
                  <div className='flex items-start gap-1'>
                    <RiCheckboxCircleFill className='text-accent text-xl mt-1' />
                    <p className='text-sm'>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work
