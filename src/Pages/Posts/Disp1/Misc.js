import React from 'react';
import Tab from '../../../Components/UIComponents/Tab';

export default function Misc() {

  const sample = {
<<<<<<< HEAD:src/Pages/Posts/Disp1/Misc.js
    name: 'Misc',
=======
    name: <h2><strong>STORIES</strong></h2>,
>>>>>>> tabs and page styling for posts compkete:src/Pages/Posts/Tab1.js
    posts: [{
      id: 12345,
      content: 'Hello! My name is Cian and I like to eat\
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
