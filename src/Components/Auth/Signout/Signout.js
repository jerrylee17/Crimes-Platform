import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button } from 'reactstrap';

function Signout() {

  const handleClick = async () => {
    await firebase
      .app()
      .auth()
      .signOut();
    console.log('Signedout');
  };
  return (
    <div>
      <Button variant="danger" onClick={handleClick}>
                    Sign Out
      </Button>
    </div>
  );
    
}

export default Signout;