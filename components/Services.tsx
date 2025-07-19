'use client'

import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { PiWallFill, PiPaintRollerFill, PiWrenchFill, PiUserGearFill } from 'react-icons/pi'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import Image from 'next/image'
import Pretitle from './Pretitle'
import { Link as ScrollLink } from 'react-scroll'

const serviceData = [
  {
    name: 'construction',
    icon: <PiWallFill />,
    title: 'Construction Services',
    description:
      'We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.',
    serviceList: [
      'Residential & Commercial Builds',
      'Structural Design & Engineering',
      'Site Preparation & Excavation',
      'Concrete Foundations & Slabs',
      'Framing & Roofing',
      'Interior & Exterior Finishes',
    ],
    thumbs: [
      { url: '/assets/img/services/construction1.jpg' },
      { url: '/assets/img/services/construction2.jpg' },
    ],
  },
  {
    name: 'decoration',
    icon: <PiPaintRollerFill />,
    title: 'Renovation & Decoration',
    description:
      'Revitalizing spaces with modern designs and high quality craftsmanship. Whether upgrading a home or remodeling an office, we bring fresh life to every project.',
    serviceList: [
      'Kitchen & Bathroom Remodels',
      'Flooring & Tiling',
      'Wall Treatments & Painting',
      'Lighting & Fixtures',
      'Custom Carpentry & Built-ins',
      'Basement & Attic Conversions',
    ],
    thumbs: [
      { url: '/assets/img/services/decoration1.jpg' },
      { url: '/assets/img/services/decoration2.jpg' },
    ],
  },
  {
    name: 'restoration',
    icon: <PiWrenchFill />,
    title: 'Restoration Services',
    description:
      'Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.',
    serviceList: [
      'Historic Building Restoration',
      'Water Damage Repair',
      'Fire & Smoke Damage Mitigation',
      'Mold Remediation',
      'Roof & Structural Repairs',
      'Facade & Masonry Restoration',
    ],
    thumbs: [
      { url: '/assets/img/services/restoration1.jpg' },
      { url: '/assets/img/services/restoration2.jpg' },
    ],
  },
  {
    name: 'consulting',
    icon: <PiUserGearFill />,
    title: 'Consulting Services',
    description:
      'Providing expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainability, our consulting service ensures project success.',
    serviceList: [
      'Project Planning & Scheduling',
      'Budgeting & Cost Estimation',
      'Regulatory & Code Compliance',
      'Sustainability Consulting',
      'Risk Assessment & Management',
      'Value Engineering & Optimization',
    ],
    thumbs: [
      { url: '/assets/img/services/consulting1.jpg' },
      { url: '/assets/img/services/consulting2.jpg' },
    ],
  },
]

const Services = () => {
  const [activeTab, setActiveTab] = useState('construction')
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to completion, with a focus on quality and innovation
          </p>
        </div>

        <Tabs
          defaultValue="construction"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row w-full gap-[30px]"
        >
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
            {serviceData.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none group"
              >
                <div
                  className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                    activeTab === item.name ? 'bg-primary text-white' : 'bg-accent text-primary'
                  }`}
                >
                  <div className="text-4xl">{item.icon}</div>
                </div>
                <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                  {item.name}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* tab content */}
          <div className="flex-1 bg-white shadow-custom h-auto p-[30px]">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div className="flex flex-col md:flex-row gap-[30px]">
                  
                  {/* images */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px] justify-center md:justify-start">
                    {item.thumbs.map((thumb, index) => (
                      <div key={index} className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]">
                        <Image src={thumb.url} fill alt="" className="object-cover rounded-md" />
                      </div>
                    ))}
                  </div>

                  {/* text & button */}
                  <div className="flex-1 flex flex-col gap-4">
                    <h3 className="h3 mb-6 text-center md:text-left">{item.title}</h3>
                    <p className="mb-10 text-center md:text-left">{item.description}</p>

                    {/* services list */}
                    <ul className="grid grid-cols-2 gap-4 mb-12">
                      {item.serviceList.map((service, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-[6px] h-[6px] bg-accent"></div>
                          <div className="capitalize font-medium text-primary">{service}</div>
                        </li>
                      ))}
                    </ul>

                    {/* button */}
                    <div className="flex justify-center md:justify-start">
                      <ScrollLink to="faq" smooth spy>
                        <CustomButton text="FAQ Section" />
                      </ScrollLink>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Services
