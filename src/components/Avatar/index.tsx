import React from 'react';
import type AvatarProps from './AvatarProps';

function Avatar({ src, alt }: AvatarProps) {
  return (
    <img
      className="h-10 w-10 rounded-full"
      src={src}
      alt={alt}
      width={40}
      height={40}
    />
  );
}

export default Avatar;
