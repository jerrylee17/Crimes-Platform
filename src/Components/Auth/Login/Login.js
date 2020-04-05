import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { Button } from 'reactstrap';

const firebaseConfig = {
    apiKey: "AIzaSyA6KVNAW2N58iXzI-jxbsd7rfsl_E6d8D4",
    authDomain: "crimes-agaisnt-asians.firebaseapp.com",
    databaseURL: "https://crimes-agaisnt-asians.firebaseio.com",
    projectId: "crimes-agaisnt-asians",
    storageBucket: "crimes-agaisnt-asians.appspot.com",
    messagingSenderId: "10758215319",
    appId: "1:10758215319:web:df06ef67312ab626dbfbd2"
  };

//firebase.initializeApp(firebaseConfig);

function GoogleLogin() {

    const handleClick = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
    }
    return (
        <>
            <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
                <Button variant="success" onClick={handleClick}>
                    Sign In with Google
                </Button>
            </FirebaseAuthProvider>
        </>
    );
}

export default GoogleLogin