import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Display from './Display';
import Attacks from './Disp2/Attacks';
import Hate from './Disp2/Hate';
import Vandalism from './Disp2/Vandalism';
import Stories from './Disp1/Stories.js';
import News from './Disp1/News.js';

export default function Posts() {
  const [disp, toggleDisp] = useState(true);
  const Disp1 = {
    tabs: [{
      title: 'Stories',
      Component: Stories
    },
    {
      title: 'News',
      Component: News
    }
    ]
  };
  const Disp2 = {
    tabs: [{
      title: 'Hate Speech',
      Component: Hate
    },
    {
      title: 'Vandalism',
      Component: Vandalism
    },
    {
      title: 'Attacks',
      Component: Attacks
    }
    ]
  };

  return (
    <div>
      <Button onClick={() => toggleDisp(!disp)} > Click to toggle displays </Button>
      {disp ? (
        <Display {...Disp1} />
      ) : (
        <Display {...Disp2} />
      )}
    </div>
  );
}
