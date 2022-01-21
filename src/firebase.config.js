import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGBGAG1hPHWm5Or2Glr25z65gHXF9Wzvg",
  authDomain: "fadhilnigo-porto.firebaseapp.com",
  projectId: "fadhilnigo-porto",
  storageBucket: "fadhilnigo-porto.appspot.com",
  messagingSenderId: "772895862137",
  appId: "1:675183936714:web:384d6b3be0e9ef91c56033"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()