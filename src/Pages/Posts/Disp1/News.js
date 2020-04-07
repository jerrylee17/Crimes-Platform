import React from 'react';
import Tab from '../../../Components/UIComponents/Tab';

export default function News() {

  const sample = {
    name: 'News',
    posts: [{
      id: 12345,
      message: 'Hello My name is Cian and I like to eat\
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
