import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 230, height = 48 }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* Logo image */}
      <div style={{ width, height }} className="relative overflow-hidden">
        <Image
          src="/assets/sandtechlogo-01.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Company name text */}
      <span className="font-primary font-semibold text-lg text-white">
        SANDTECH
      </span>
      <span>Engineering Company limited</span>
    </Link>
  );
};

export default Logo;
