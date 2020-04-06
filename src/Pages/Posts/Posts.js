import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Disp1 from './Disp1';
import Disp2 from './Disp2';

export default function Posts() {
  const [disp, toggleDisp] = useState(true);
  return (
    <div>
      <Button onClick={() => toggleDisp(!disp)} > Click to toggle displays </Button>
      {disp ? (
        <Disp1 />
      ) : (
        <Disp2 />
      )}
    </div>
  );
}