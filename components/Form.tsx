import React from 'react'
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select"
import {Input} from './ui/input'
import {Textarea} from './ui/textarea'
import CustomButton from './CustomButton'
import { cn } from '@/lib/utils'

const Form = () => {
  return (
    <form className='flex flex-col'>
    <div className='flex flex-col gap-[20px] mb-[20px]'>
        <Input type='fullname' placeholder='Full Name'/>
        <Input type='email' placeholder='Email address'/>
        <div className='flex flex-col xl:flex-row gap-[20px]'>
            <Input type='phone' placeholder='Phone number'/>
        <Select>
          <SelectTrigger
            className={cn(
              "h-[54px] min-h-[54px] items-center", // <- force height
              "w-full px-6 py-0 text-base font-normal border border-border bg-white shadow-xs",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "transition-all outline-none flex rounded-none"
            )}
          >


            <SelectValue placeholder="Select a service" />
          </SelectTrigger >

          <SelectContent> 
            <SelectGroup>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="renovation">Renovation</SelectItem>
              <SelectItem value="restoration">Restoration</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        </div>
      </div>
      <div className='flex flex-col gap-6'>
        {/*text area*/}
        <Textarea className='h-[180px] resize-none rounded-none' placeholder='Enter your message'/>
        {/*btn */}
        <CustomButton text='Send message'/>
      </div>
    </form>
  )
}

export default Form