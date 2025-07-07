// app/firebase.ts or firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk-6NuY106ngpEgDyry47JxpTqAP5aGnk",
  authDomain: "zedops-10039.firebaseapp.com",
  projectId: "zedops-10039",
  storageBucket: "zedops-10039.appspot.com",
  messagingSenderId: "172548410901",
  appId: "1:172548410901:web:faf6f882a5466fe6a9c81c",
  measurementId: "G-ZMEF3VN2NP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
