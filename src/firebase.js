import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDS_zUQfyrSqurLzR5_uDJJOEC7MunUZuA",
  authDomain: "live-chat-8c99d.firebaseapp.com",
  projectId: "live-chat-8c99d",
  storageBucket: "live-chat-8c99d.appspot.com",
  messagingSenderId: "1048264999537",
  appId: "1:1048264999537:web:bdb00542ebc9d76cd6d1d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth()
export const storage = getStorage();
export const db = getFirestore();