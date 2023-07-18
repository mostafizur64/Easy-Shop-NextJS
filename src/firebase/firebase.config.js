// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXTJS_PUBLIC_apiKey,
  authDomain:process.env.NEXTJS_PUBLIC_authDomain,
  projectId:process.env.NEXTJS_PUBLIC_projectId,
  storageBucket:process.env.NEXTJS_PUBLIC_storageBucket,
  messagingSenderId:process.env.NEXTJS_PUBLIC_messagingSenderId,
  appId:process.env.NEXTJS_PUBLIC_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);