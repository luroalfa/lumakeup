// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain:process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  // measurementId: process.env.REACT_APP_MEASUREMENTID
  apiKey: "AIzaSyAfYKR4TNxULR_lH2WT6NgusWwnwDnJWl4",
  authDomain: "luciamonge-fd722.firebaseapp.com",
  projectId: "luciamonge-fd722",
  storageBucket: "luciamonge-fd722.appspot.com",
  messagingSenderId: "401636064658",
  appId: "1:401636064658:web:786f7f2379be5baaa5554b",
  measurementId: "G-854H1T6K2B"
};

// Initialize Firebase
export const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
const db = getFirestore(config);
const storage = getStorage(config);
