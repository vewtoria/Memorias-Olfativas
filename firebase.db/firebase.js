// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARsalzjXtFaFMbtDVG3sko84x4m2qbVvg",
    authDomain: "memorias-olfativas-af877.firebaseapp.com",
    databaseURL: "https://memorias-olfativas-af877-default-rtdb.firebaseio.com",
    projectId: "memorias-olfativas-af877",
    storageBucket: "memorias-olfativas-af877.appspot.com",
    messagingSenderId: "860524787926",
    appId: "1:860524787926:web:71802e3fb5054c2606f177",
    measurementId: "G-2955PQSEDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
