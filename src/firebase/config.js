import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLh_EA0F61_M1WWrCDjH_NPH0hl0yGZC4",
    authDomain: "olx-demo-43b04.firebaseapp.com",
    projectId: "olx-demo-43b04",
    storageBucket: "olx-demo-43b04.appspot.com",
    messagingSenderId: "418111143045",
    appId: "1:418111143045:web:2e9e5afac57093f14cfdec",
    measurementId: "G-TLCX3NH3X9"
  };

export default firebase.initializeApp(firebaseConfig)