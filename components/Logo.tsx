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
      {/* Logo image with fixed dimensions */}
      <Image
        src="/assets/SandTechLogo-01.png"
        alt="Logo"
        width={width}
        height={height}
        className="object-contain"
      />

      {/* Company name text */}
      <div className="leading-tight">
        <span className="block font-primary font-semibold text-lg text-white">
          SANDTECH
        </span>
        <span className="block text-xs text-white">
          Engineering Company Limited
        </span>
      </div>
    </Link>
  );
};

export default Logo;
