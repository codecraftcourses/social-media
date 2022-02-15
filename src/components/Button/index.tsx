import React from 'react';
import type ButtonProps from './ButtonProps';

function Button({ children }: ButtonProps) {
  return (
    <button
      className="rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white"
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
