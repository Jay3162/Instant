import React, {useState, useEffect} from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBcnrEc4JHqxnGhbMDCGN6b4Wxxfw58vY",
  authDomain: "e-commerce-site-5a452.firebaseapp.com",
  projectId: "e-commerce-site-5a452",
  storageBucket: "e-commerce-site-5a452.appspot.com",
  messagingSenderId: "802947144947",
  appId: "1:802947144947:web:c18f7d0d2059458d17eb86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export function signup(email, password) {
    //allows us whether a new user was created successfully or not
    return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {

    return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
    return signOut(auth)
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser
}