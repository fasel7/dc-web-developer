// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQowquJoLcW9b3clmwxRtroHcX5VD8ZF0',
  authDomain: 'food-pickup-fe54a.firebaseapp.com',
  databaseURL: 'https://food-pickup-fe54a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'food-pickup-fe54a',
  storageBucket: 'food-pickup-fe54a.appspot.com',
  messagingSenderId: '220091676889',
  appId: '1:220091676889:web:230513a23d8168a895a6c8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
