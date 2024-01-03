import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcapmNAxNCD2-U-5W5Tvn2fkZ0nPSaeMM",
    authDomain: "food-apps-6f0bc.firebaseapp.com",
    projectId: "food-apps-6f0bc",
    storageBucket: "food-apps-6f0bc.appspot.com",
    messagingSenderId: "385928746115",
    appId: "1:385928746115:web:c16dc0872a333811c8b7b6",
    measurementId: "G-YWB8SBK4DM"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);