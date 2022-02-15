import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import type IconProps from './IconProps';

function Icon({ icon, size = 20 }: IconProps) {
  switch (icon) {
    case 'heart':
      return <IoHeartOutline size={size} />;
    default:
      return null;
  }
}

export default Icon;
