import React from 'react'
import Pretitle from './Pretitle'
import {motion} from'framer-motion'
import {fadeIn} from "@/variants"
import FaqItems from './ui/FaqItems'

const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "Timelines vary based on projects size and complexity.",
  },
  {
    title: "Do I need permit for my project?",
    description: "Timelines vary based on projects size and complexity.",
  },
  {
    title: "What material works best for my project?",
    description: "Timelines vary based on projects size and complexity.",
  },
  {
    title: "What is an approximate cost for a house construction?",
    description: "Timelines vary based on projects size and complexity.",
  },
    {
    title: "Can I make changes after constructions starts?",
    description: "Timelines vary based on projects size and complexity.",
  },
    {
    title: "How many workers to hire for my construction?",
    description: "Timelines vary based on projects size and complexity.",
  }
]

//animation variants for faq items
const faqItemVariants = {
  hidden: {opacity: 0, y:30},
  visible: (index : number)=>({
    opacity: 1,
    y:0,
    transition: {delay: index * 0.1, duration: 0.3} //staggered animation
  }),
};

const Faq = () => {
  return (
    <section className='pt-16 xl:pt-32'>
      <div className="container mx-auto">
        {/*text*/}
        <div className='text-center max-w-[540px] mx-auto xl:mb-20'>
          <Pretitle text='Faq' center/>
          <h2 className='h2 mb-3'>Got Questions? We've Got You Covered</h2>
          <p className='mb-11 max-w-[480px] mx-auto'>
            From Project Planning to Final touches, we've answered the most common questions to help you make informed decisions.
          </p>
        </div>
        {/*faq items here*/}
        <ul className='w-full flex flex-col'>
          {faqItemsData.map((item,index) =>{
            return <li key={index}>
              <FaqItems title={item.title} description={item.description}/>
            </li>
          })}
        </ul>

      </div>
    </section>
  )
}

export default Faq