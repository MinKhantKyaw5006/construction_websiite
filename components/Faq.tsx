import React from 'react'
import Pretitle from './Pretitle'
import FaqItems from './ui/FaqItems'

// updated FAQ data
const faqItemsData = [
  {
    title: "How long does a typical construction project take?",
    description:
      "The timeline depends on the size and complexity of your project. A standard home build might take 6–12 months, while smaller renovations could be completed in a few weeks.",
  },
  {
    title: "Do I need a building permit before starting?",
    description:
      "Yes, most construction and renovation projects require a permit. We help our clients through the permitting process to ensure everything is compliant.",
  },
  {
    title: "Can I choose my own materials and finishes?",
    description:
      "Absolutely! We work with you to select materials, finishes, and fixtures that fit your style, needs, and budget.",
  },
  {
    title: "What is the approximate cost to build a new home?",
    description:
      "Costs vary widely depending on location, size, materials, and design. We can provide you with a detailed estimate after discussing your requirements.",
  },
  {
    title: "Can I make changes to the design after construction has started?",
    description:
      "Minor changes are possible, but they may affect the timeline and budget. We’ll discuss options and implications with you before proceeding.",
  },
  {
    title: "How many workers will be on site during construction?",
    description:
      "The number of workers depends on the stage and scope of the project. Typically, there are 5–15 skilled workers on site to ensure progress stays on schedule.",
  },
]

const Faq = () => {
  return (
    <section className='pt-16 xl:pt-32' id="faq">
      <div className="container mx-auto">
        {/* text */}
        <div className='text-center max-w-[540px] mx-auto xl:mb-20'>
          <Pretitle text='Faq' center />
          <h2 className='h2 mb-3'>Got Questions? We've Got You Covered</h2>
          <p className='mb-11 max-w-[480px] mx-auto'>
            From project planning to the finishing touches, here are answers to the most common questions to help you make informed decisions.
          </p>
        </div>

        {/* faq items */}
        <ul className='w-full flex flex-col gap-4'>
          {faqItemsData.map((item, index) => (
            <li key={index}>
              <FaqItems title={item.title} description={item.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq
