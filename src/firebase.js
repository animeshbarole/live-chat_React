import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDku1Xgj-8n0RrDXOpelsfv7gavECmcoPs",
  authDomain: "live-chat-1121c.firebaseapp.com",
  projectId: "live-chat-1121c",
  storageBucket: "live-chat-1121c.appspot.com",
  messagingSenderId: "219183531519",
  appId: "1:219183531519:web:a5778fcb3d0660769113ca"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth()
export const storage = getStorage();
export const db = getFirestore();
