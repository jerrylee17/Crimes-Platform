import React from 'react';
import Tab from '../Tab';

export default function Vandalism() {

  const sample = {
    name: 'Vandalism',
    posts: [{
      id: 12345,
      content: 'Hello My name is Cian and I like to eat\
        lots of food every day. Here is one way to do it, no regex though, \
        it only grabs the first two words and must have a space between those words. \
        Here is one way to do it, no regex though, it only grabs the first two words \
        and must have a space between those words.',
    }]
  };
  return (
    <div>
      <Tab {...sample} />
    </div>
  );
}
