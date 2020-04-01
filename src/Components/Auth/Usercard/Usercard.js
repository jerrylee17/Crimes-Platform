import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthedAnd, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { Media } from 'reactstrap';
import GoogleLogin from '../Login/Login.js';
import Signout from '../Signout/Signout.js';

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

function Usercard() {
    return (
        <>
            <div style={{ padding: '.5rem' }}>
                <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
                    <FirebaseAuthConsumer>
                        <IfFirebaseUnAuthed>
                            {({ isSignedIn, user, providerId }) => {
                                return (
                                    <GoogleLogin />
                                )
                            }}
                        </IfFirebaseUnAuthed>
                        <IfFirebaseAuthedAnd filter={({ providerId }) => providerId !== "anonymous"}>
                            {({ isSignedIn, user, providerId }) => {
                                var { displayName, photoURL } = user;
                                return (
                                    <>
                                        <Media right>
                                            <Media object src={photoURL} />
                                        </Media>
                                        <p>{displayName}</p>
                                        <Signout />
                                    </>
                                );
                            }}
                        </IfFirebaseAuthedAnd>
                    </FirebaseAuthConsumer>
                </FirebaseAuthProvider>
            </div>
        </>
    );
}

export default Usercard