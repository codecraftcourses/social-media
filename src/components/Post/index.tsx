import React from 'react';
import type PostProps from './PostProps';
import Card from '../Card';
import Avatar from '../Avatar';
import { dayjs } from '../../lib';
import PostStat from '../PostStat';

function Post({ post }: PostProps) {
  return (
    <li>
      <Card>
        <div className="flex space-x-4">
          <Avatar src={post.user.photoURL} alt={post.user.username} />
          <div className="space-y-4">
            <div className="flex space-x-2">
              <h2 className="text-sm font-semibold">{post.user.username}</h2>
              <p className="text-sm text-gray-500">
                {dayjs(post.createdAt).fromNow()}
              </p>
            </div>
            <p className="text-sm text-gray-500">{post.body}</p>
            <PostStat icon="heart" count={post.likes} />
          </div>
        </div>
      </Card>
    </li>
  );
}

export default Post;
