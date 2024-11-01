import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBiRnQWRZgfHPtCHD-xia5dTYuKQGPHK8U",
  authDomain: "ecommerce-nicolas-lopez.firebaseapp.com",
  projectId: "ecommerce-nicolas-lopez",
  storageBucket: "ecommerce-nicolas-lopez.firebasestorage.app",
  messagingSenderId: "752075703827",
  appId: "1:752075703827:web:e6eacc299b0ede5677e1e6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db; 


