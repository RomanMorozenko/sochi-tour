import { initializeApp } from 'firebase/app';
import { getFirestore,collection } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQwrPAPd4aJkFaH4Y8d4wK6Iai-Ev8jNQ",
    authDomain: "onchill-59f86.firebaseapp.com",
    projectId: "onchill-59f86",
    storageBucket: "onchill-59f86.appspot.com",
    messagingSenderId: "832200468390",
    appId: "1:832200468390:web:fd3cd100bfe69792449167",
    measurementId: "G-5J9Y4QBVCC"
};

initializeApp(firebaseConfig);

// init db
export const db = getFirestore();

// collection ref
export const excursionsData = collection(db,'excursions');
export const excursionReviewsData = collection(db,'excursionsReviews');
export const toursData = collection(db,'tours');

