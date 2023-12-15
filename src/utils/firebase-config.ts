import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: 'AIzaSyCQwrPAPd4aJkFaH4Y8d4wK6Iai-Ev8jNQ',
  authDomain: 'onchill-59f86.firebaseapp.com',
  //authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: 'onchill-59f86',
  //projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: 'onchill-59f86.appspot.com',
  //storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: '832200468390',
  //messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: '1:832200468390:web:fd3cd100bfe69792449167',
  //appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: 'G-5J9Y4QBVCC'
  //measurementId: import.meta.env.VITE_FIREBASE_MEASURMENT_ID
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const excursionsData = collection(db, 'excursions');
export const excursionReviewsData = collection(db, 'excursionsReviews');
export const toursData = collection(db, 'tours');
export const excursionsDatesData = collection(db, 'excur-dates');
export const favoritesData = collection(db, 'favorites');
