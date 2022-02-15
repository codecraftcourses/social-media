import React from 'react';
import type CardProps from './CardProps';

function Card({ children }: CardProps) {
  return <div className="rounded-lg border p-4">{children}</div>;
}

export default Card;
