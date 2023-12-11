import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: 'AIzaSyCQwrPAPd4aJkFaH4Y8d4wK6Iai-Ev8jNQ',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASURMENT_ID
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const excursionsData = collection(db, 'excursions');
export const excursionReviewsData = collection(db, 'excursionsReviews');
export const toursData = collection(db, 'tours');
export const excursionsDatesData = collection(db, 'excur-dates');
