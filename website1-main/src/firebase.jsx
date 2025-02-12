import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAubvb_HtiP9jzsJZ18YJPdQOT-_rk3kcI',
  authDomain: '<nexether-webpage.firebaseapp.com>',
  projectId: '<nexether-webpage>',
  storageBucket: '<nexether-webpage.firebasestorage.app>',
  messagingSenderId: '469373481493',
  appId: '1:469373481493:web:9adffe45f7a604ca46941c',
  measurementId: "G-TK8H2PBKKN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };