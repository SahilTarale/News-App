// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt0xybozQ5DFuRzThXtch6s01AkoHLhEA",
  authDomain: "news-app-9e8b0.firebaseapp.com",
  projectId: "news-app-9e8b0",
  storageBucket: "news-app-9e8b0.appspot.com",
  messagingSenderId: "226750148048",
  appId: "1:226750148048:web:8f34620e207ff9cb8c5dd5",
  measurementId: "G-ZJJBZ436G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);