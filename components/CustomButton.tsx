'use client';

import React, { ButtonHTMLAttributes } from 'react';

import { RiArrowRightUpLine } from 'react-icons/ri';
import { Button } from './ui/button';

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const CustomButton = ({ text, ...props }: CustomButtonProps) => {
  return (
    <Button
      {...props} // spread native button props like 'type', 'disabled', etc.
      className="w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-accent-2 text-primary rounded-none group hover:bg-accent hover:text-primary"
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center">
        <RiArrowRightUpLine className="text-white text-xl transition-transform duration-200 group-hover:rotate-45" />
      </div>
    </Button>
  );
};

export default CustomButton;
