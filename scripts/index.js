import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVXf__BWjtQbTKKmrwCe9f0Ou_bVF03ho",
  authDomain: "styro-cdb6c.firebaseapp.com",
  projectId: "styro-cdb6c",
  storageBucket: "styro-cdb6c.appspot.com",
  messagingSenderId: "583147899585",
  appId: "1:583147899585:web:71f9f4e005045f5bfea240",
  measurementId: "G-ENRR082ZF9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);