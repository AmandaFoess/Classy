import firestore from '@react-native-firebase/firestore';
import { auth } from "../../firebase";
import { useState, useEffect } from 'react';

const useWantToTakeClasses = () => {
  const [wantToTakeClasses, setWantToTakeClasses] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const unsubscribe = firestore
        .collection('Users')
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            setWantToTakeClasses(userData.classesToTake || []);
          } else {
            console.log('No such document!');
          }
        });

      return () => unsubscribe();
    } else {
      setWantToTakeClasses([]);
    }
  }, [user]);

  return wantToTakeClasses;
};

export default useWantToTakeClasses;
