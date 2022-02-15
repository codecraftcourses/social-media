import React from 'react';
import type PostStatProps from './PostStatProps';
import Icon from '../Icon';

function PostStat({ icon, count }: PostStatProps) {
  return (
    <div className="flex space-x-2 text-gray-500">
      <Icon icon={icon} />
      <p className="text-sm">{count}</p>
    </div>
  );
}

export default PostStat;
