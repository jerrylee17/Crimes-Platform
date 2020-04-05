import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';


import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyA6KVNAW2N58iXzI-jxbsd7rfsl_E6d8D4',
  authDomain: 'crimes-agaisnt-asians.firebaseapp.com',
  databaseURL: 'https://crimes-agaisnt-asians.firebaseio.com',
  projectId: 'crimes-agaisnt-asians',
  storageBucket: 'crimes-agaisnt-asians.appspot.com',
  messagingSenderId: '10758215319',
  appId: '1:10758215319:web:df06ef67312ab626dbfbd2'
};

function App() {
  return (
    <div className='index'>
      <Routing />
    </div>
  );
}

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>, document.getElementById('root')
);

