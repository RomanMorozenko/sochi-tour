import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db, favoritesData } from './firebase-config.ts';

export const setFavoritesForUser = async (email: string) => {
  const userDocRef = doc(favoritesData, email);
  await setDoc(userDocRef, {
    id: email,
    excursions: [],
    tours: []
  });
};

export const updateFavorite = async (id: string, field: string, newValue: string) => {
  const favoriteDoc = doc(db, 'favorites', id);

  await updateDoc(favoriteDoc, {
    [field]: newValue
  });
};
