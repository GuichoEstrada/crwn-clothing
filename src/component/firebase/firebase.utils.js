import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAxbiFEodyOeVIzR4zngnQX5k7Ij6vZdfo",
    authDomain: "crwn-clothing-db-ec1ae.firebaseapp.com",
    projectId: "crwn-clothing-db-ec1ae",
    storageBucket: "crwn-clothing-db-ec1ae.appspot.com",
    messagingSenderId: "793689629750",
    appId: "1:793689629750:web:7ddac13c13069ee18de497",
    measurementId: "G-1EDBPKZDTN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;