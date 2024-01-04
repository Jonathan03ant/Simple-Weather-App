// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKPL7HDpE6LLe0L14ZLYAIgcTWjxHGLkE",
  authDomain: "weatherapp-10182.firebaseapp.com",
  projectId: "weatherapp-10182",
  storageBucket: "weatherapp-10182.appspot.com",
  messagingSenderId: "67219202728",
  appId: "1:67219202728:web:9461803ae85c669331189d",
  measurementId: "G-SG62Y4R456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);