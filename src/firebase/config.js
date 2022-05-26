import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBUyuPuyJw_PPsJepdVo6sCLDIbplg_NKU",
  authDomain: "trelloclone-4b3b1.firebaseapp.com",
  projectId: "trelloclone-4b3b1",
  storageBucket: "trelloclone-4b3b1.appspot.com",
  messagingSenderId: "661785364847",
  appId: "1:661785364847:web:21ec4c8f70b9ec5e6f809a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init service
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);

export { projectFirestore, projectAuth };
