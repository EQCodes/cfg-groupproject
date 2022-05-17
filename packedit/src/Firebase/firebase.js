
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// import firebase from 'firebase';
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBAPH3vFV_dNAEfRma7vGVSCFeommkjryo",
  authDomain: "todo-react-ba358.firebaseapp.com",
  projectId: "todo-react-ba358",
  storageBucket: "todo-react-ba358.appspot.com",
  messagingSenderId: "521096983391",
  appId: "1:521096983391:web:9e9bc113fca3c7dca7fcea",
  measurementId: "G-M02KZC1ZQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


