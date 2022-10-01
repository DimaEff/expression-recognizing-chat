// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCayePJYTxkL3Eqp2qCVb1aSTu1YctH8IY",
    authDomain: "expression-detection-chat.firebaseapp.com",
    projectId: "expression-detection-chat",
    storageBucket: "expression-detection-chat.appspot.com",
    messagingSenderId: "1093272618395",
    appId: "1:1093272618395:web:b016b46fbb56c69c26cd3e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
