import React from 'react';
import type PostsProps from './PostsProps';
import Post from '../Post';

function Posts({ posts }: PostsProps) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default Posts;
