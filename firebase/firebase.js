import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIWImw1xSaHM6QK76j2vyL26d87dh1YQU",
    authDomain: "dulanjanweb.firebaseapp.com",
    projectId: "dulanjanweb",
    storageBucket: "dulanjanweb.appspot.com",
    messagingSenderId: "1070813733075",
    appId: "1:1070813733075:web:d866fb1121ae2a08e0b426"
  };

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };