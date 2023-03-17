// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtid3dkCUljuPuwgnRhrTL2IRDM9c0wYE",
  authDomain: "applibslist-26f94.firebaseapp.com",
  projectId: "applibslist-26f94",
  storageBucket: "applibslist-26f94.appspot.com",
  messagingSenderId: "199595668669",
  appId: "1:199595668669:web:8f0d43f813f59098d833d4",
  measurementId: "G-WZ51XVGZLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
