// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyA2DQi-q4-JKpih-VKk96ALpH0Tht2VYzA',

  authDomain: 'house-marketplace-app-a8d36.firebaseapp.com',

  projectId: 'house-marketplace-app-a8d36',

  storageBucket: 'house-marketplace-app-a8d36.appspot.com',

  messagingSenderId: '186309159689',

  appId: '1:186309159689:web:14cc6e78cf7f068482c1d8',
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore();
