import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Display from './Display';
import TabDisplay from './TabDisplay';

export default function Posts() {
  const [disp, toggleDisp] = useState(true);
  const Disp1 = {
    tabs: [{
      title: 'Stories',
      Component: TabDisplay
    },
    {
      title: 'News',
      Component: TabDisplay
    }
    ]
  };
  const Disp2 = {
    tabs: [{
      title: 'Hate Speech',
      Component: TabDisplay
    },
    {
      title: 'Vandalism',
      Component: TabDisplay
    },
    {
      title: 'Attacks',
      Component: TabDisplay
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
