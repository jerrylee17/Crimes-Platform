import React from 'react';
import Tab from '../Tab';

export default function Stories() {

  const sample = {
    name: 'Stories',
    posts: [{
      id: 12345,
      content: 'Hello! My name is Cian and I like to eat\
        lots of food every day. Here is one way to do it, no regex though, \
        it only grabs the first two words and must have a space between those words. \
        Here is one way to do it, no regex though, it only grabs the first two words \
        and must have a space between those words.',
    },
    {
      id: 123456,
      content: 'Sometimes I get very hungry',
    }
    ]
  };
  return (
    <div>
      <Tab {...sample} />
    </div>
  );
}
