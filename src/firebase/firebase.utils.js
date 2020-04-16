import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzg7-lMHzXjYyyub187fFgBZWTzpmBqEk",
    authDomain: "crwn-db-13b97.firebaseapp.com",
    databaseURL: "https://crwn-db-13b97.firebaseio.com",
    projectId: "crwn-db-13b97",
    storageBucket: "crwn-db-13b97.appspot.com",
    messagingSenderId: "1090951543713",
    appId: "1:1090951543713:web:71480fdf161d5c82af69e0",
    measurementId: "G-9XNDMB5HNQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;