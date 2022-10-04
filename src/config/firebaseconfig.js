import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCo61tKwLN6Wmw7TcX6tfmjVOK6-i-sfcM",
  authDomain: "receitas-3cf91.firebaseapp.com",
  projectId: "receitas-3cf91",
  storageBucket: "receitas-3cf91.appspot.com",
  messagingSenderId: "962641746831",
  appId: "1:962641746831:web:9f45aad62d3ab4ff1449fa"
};
  
  // Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig)


export const db = getFirestore(app)




