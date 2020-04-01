import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6KVNAW2N58iXzI-jxbsd7rfsl_E6d8D4",
  authDomain: "crimes-agaisnt-asians.firebaseapp.com",
  databaseURL: "https://crimes-agaisnt-asians.firebaseio.com",
  projectId: "crimes-agaisnt-asians",
  storageBucket: "crimes-agaisnt-asians.appspot.com",
  messagingSenderId: "10758215319",
  appId: "1:10758215319:web:df06ef67312ab626dbfbd2"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

ReactDOM.render(
  <App />, document.getElementById('root')
);

