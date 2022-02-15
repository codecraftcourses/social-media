import React from 'react';
import { Posts } from '../components';

function Home() {
  return (
    <Posts
      posts={[
        {
          id: '1',
          user: {
            id: '1',
            username: 'codecraftcourses',
            photoURL: 'https://avatars.githubusercontent.com/u/99753176?v=4',
          },
          createdAt: new Date(),
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, odio eu dignissim auctor, metus mi ultrices leo, sit amet maximus ligula dui non elit.',
          likes: 5,
        },
        {
          id: '2',
          user: {
            id: '1',
            username: 'codecraftcourses',
            photoURL: 'https://avatars.githubusercontent.com/u/99753176?v=4',
          },
          createdAt: new Date(),
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, odio eu dignissim auctor, metus mi ultrices leo, sit amet maximus ligula dui non elit.',
          likes: 11,
        },
        {
          id: '3',
          user: {
            id: '1',
            username: 'codecraftcourses',
            photoURL: 'https://avatars.githubusercontent.com/u/99753176?v=4',
          },
          createdAt: new Date(),
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, odio eu dignissim auctor, metus mi ultrices leo, sit amet maximus ligula dui non elit.',
          likes: 8,
        },
      ]}
    />
  );
}

export default Home;
