import type User from './User';

type Post = {
  id: string;
  user: User;
  createdAt: Date;
  body: string;
  likes: number;
};

export default Post;
