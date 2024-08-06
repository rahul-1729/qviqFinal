import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBX3A5rlP9FPX8vNkw45yZDXaCkfmTJ2Ew",
  authDomain: "qviqassignment.firebaseapp.com",
  projectId: "qviqassignment",
  storageBucket: "qviqassignment.appspot.com",
  messagingSenderId: "871130119876",
  appId: "1:871130119876:web:3fd63d87be7e96f65b5391",
  measurementId: "G-13C3LK9Y8K"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);