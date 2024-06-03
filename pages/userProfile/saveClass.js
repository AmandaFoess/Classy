import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';

// Function to handle bookmarking a class
const handleBookmarkClass = async (userID, course, professorName) => {
  try {
    const userDocRef = doc(db, "Users", userID);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const { myClasses, classesToTake, recsForYou } = userData;

      // Check if the class is already in "myClasses"
      if (myClasses.some((myClass) => myClass.course === course)) {
        // Class is already in "myClasses", do nothing
        return;
      }

      // Check if the class is in "classesToTake"
      if (classesToTake.some((classToTake) => classToTake.course === course)) {
        // Remove the class from "classesToTake"
        await updateDoc(userDocRef, {
          classesToTake: arrayRemove({ course, professorName })
        });
        return;
      }

      // Check if the class is in "recsForYou"
      if (recsForYou.some((recClass) => recClass.course === course)) {
        // Remove the class from "recsForYou" and add it to "classesToTake"
        await updateDoc(userDocRef, {
          recsForYou: arrayRemove({ course, professorName }),
          classesToTake: arrayUnion({ course, professorName })
        });
        return;
      }

      // Add the class to "classesToTake"
      await updateDoc(userDocRef, {
        classesToTake: arrayUnion({ course, professorName })
      });
    } else {
      console.error("User document not found");
    }
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

