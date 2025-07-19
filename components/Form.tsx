'use client'

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import CustomButton from './CustomButton'
import { cn } from '@/lib/utils'

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Add API call here if needed
    setSubmitted(true)

    setFormData({
      fullname: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <div className='flex flex-col gap-[20px] mb-[20px]'>
        <Input
          type='text'
          name='fullname'
          placeholder='Full Name'
          value={formData.fullname}
          onChange={handleChange}
          required
        />
        <Input
          type='email'
          name='email'
          placeholder='Email address'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className='flex flex-col xl:flex-row gap-[20px]'>
          <Input
            type='tel'
            name='phone'
            placeholder='Phone number'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Select onValueChange={handleSelectChange} value={formData.service}>
            <SelectTrigger
              className={cn(
                "h-[54px] min-h-[54px] items-center",
                "w-full px-6 py-0 text-base font-normal border border-border bg-white shadow-xs",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "transition-all outline-none flex rounded-none"
              )}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>

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
        <Textarea
          name='message'
          placeholder='Enter your message'
          className='h-[180px] resize-none rounded-none'
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* Button + success message */}
        <div className='flex flex-col items-center xl:items-start gap-2'>
          <CustomButton text='Send message' type='submit' />

          {submitted && (
            <p className="mt-2 font-semibold text-center xl:text-left" style={{ color: 'var(--accent-color)' }}>
              Message sent! Thank you for reaching out.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

export default Form
