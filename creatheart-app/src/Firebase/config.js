import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD325_OZEdX_ogj1axSzgHmujuc4ZUDUEA",
    authDomain: "creatheart-f0196.firebaseapp.com",
    projectId: "creatheart-f0196",
    storageBucket: "creatheart-f0196.appspot.com",
    messagingSenderId: "121855940630",
    appId: "1:121855940630:web:13d2a70e54e4c6681e3d37",
    measurementId: "G-L67X5CH7TF"
  };


 const app = initializeApp(firebaseConfig);
export const FirebaseApp = getFirestore(app);
 
