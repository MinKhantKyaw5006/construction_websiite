import React from 'react';

type PretitleProps = {
  text: string;
  center?: boolean;
};

const Pretitle = ({ text, center = false }: PretitleProps) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
      <div className='w-2 h-2 bg-accent'></div>
      <p className='font-primary tracking-[3.2px] uppercase'>{text}</p>
      <div className='w-2 h-2 bg-accent'></div>
    </div>
  );
};

export default Pretitle;
