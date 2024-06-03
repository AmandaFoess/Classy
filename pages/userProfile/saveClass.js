import firestore from '@react-native-firebase/firestore';
import { auth } from "../../firebase";

const saveClass = async (classId) => {
    const user = auth.currentUser;
  
    if (user) {
      try {
        const userDocRef = firestore.collection('Users').doc(user.uid);
  
        // Get the current user's data
        const userDoc = await userDocRef.get();
  
        if (userDoc.exists) {
          const userData = userDoc.data();
  
          // Check if the class is already in the "want to take" list
          if (!userData.wantToTake.includes(classId)) {
            // Update the user's "want to take" list
            await userDocRef.update({
              wantToTake: firebase.firestore.FieldValue.arrayUnion(classId)
            });
  
            console.log('Class saved to "want to take" list');
          } else {
            console.log('Class is already in the "want to take" list');
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error saving class:', error);
      }
    } else {
      console.log('No user is signed in');
    }
  };

