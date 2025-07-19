import React, { useState } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import { Button } from './button';

interface FaqItemProps {
  title: string;
  description: string;
}

const FaqItems: React.FC<FaqItemProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <Button
          className="w-[44px] h-[44px] flex items-center justify-center"
          style={{
            backgroundColor: 'var(--accent-color-alt)', // set button bg
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill className="text-white text-2xl transition-opacity duration-300" />
          ) : (
            <RiAddFill className="text-white text-2xl transition-opacity duration-300" />
          )}
        </Button>

      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[200px] opacity-100 p-4' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        <p className="pb-8 flex items-center max-w-[860px]">{description}</p>
      </div>
    </div>
  );
};

export default FaqItems;
