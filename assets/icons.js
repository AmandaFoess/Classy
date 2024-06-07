import Svg, { Path, G, Defs, Rect, ClipPath } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

// Function to handle bookmarking a class
const handleBookmarkClass = async (
  userID,
  course,
  professorName,
  isBookmarked,
  setIsBookmarked
) => {
  try {
    const userDocRef = doc(db, "Users", "UserID1"); // MUST UPDATE WITH ACTUAL USER ID ONCE SET UP
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      //console.log(userData);
      const { myClasses, classesToTake, recsForYou } = userData;

      // Check if the class is already in "myClasses"
      if (myClasses.some((myClass) => myClass.course === course)) {
        // Class is already in "myClasses", do nothing
        return;
      }

      // Toggle bookmark state and update Firestore accordingly
      if (isBookmarked) {
        //console.log();
        // Remove the class from "classesToTake" or "recsForYou" if already bookmarked
        if (
          classesToTake.some((classToTake) => classToTake.course === course)
        ) {
          await updateDoc(userDocRef, {
            classesToTake: arrayRemove({ course, professorName }),
          });
        }
        setIsBookmarked(false);
      } else {
        // Add the class to "classesToTake" if not already bookmarked
        if (recsForYou.some((recForYou) => recForYou.course === course)) {
          const updatedRecsForYou = recsForYou.filter(
            (rec) => rec.course !== course
          );
          console.log("inRecsForYou");
          await updateDoc(userDocRef, {
            recsForYou: updatedRecsForYou,
          });
        }
        await updateDoc(userDocRef, {
          classesToTake: arrayUnion({ course, professorName }),
        });
        setIsBookmarked(true);
      }
    } else {
      console.error("User document not found");
    }
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export function Bookmark({ userID, course, professorName }) {
  const [isBookmarked, setIsBookmarked] = useState(false); // State to manage the bookmark button

  const handleBookmarkPress = () => {
    handleBookmarkClass(
      userID,
      course,
      professorName,
      isBookmarked,
      setIsBookmarked
    );
  };

  return (
    <TouchableOpacity onPress={handleBookmarkPress}>
      <Ionicons
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        size={24}
        color={isBookmarked ? "gray" : "black"}
      />
    </TouchableOpacity>
  );
}

// export function Bookmark() {
//   const [isBookmarked, setIsBookmarked] = useState(false); // State to manage the bookmark button

//   const handleBookmarkPress = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   return (
//     <TouchableOpacity onPress={handleBookmarkPress}>
//       <Ionicons
//         name={isBookmarked ? "bookmark" : "bookmark-outline"}
//         size={24}
//         color={isBookmarked ? "gray" : "black"}
//       />
//     </TouchableOpacity>
//   );
// }

export function Heart() {
  const [isLiked, setIsLiked] = useState(false); // State to manage the like button

  const handleHeartPress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity onPress={handleHeartPress}>
      <Ionicons
        name={isLiked ? "heart" : "heart-outline"}
        size={27}
        color={isLiked ? "red" : "black"}
      />
    </TouchableOpacity>
  );
}

export function Comment() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="31"
      viewBox="0 0 33 31"
      fill="none"
    >
      <Path
        d="M6.875 3.875H24.75C25.844 3.875 26.8932 4.28326 27.6668 5.00996C28.4404 5.73666 28.875 6.72229 28.875 7.75V19.375C28.875 20.4027 28.4404 21.3883 27.6668 22.115C26.8932 22.8417 25.844 23.25 24.75 23.25H18.4387L13.3512 28.0421C13.1038 28.2746 12.76 28.4167 12.375 28.4167C12.0103 28.4167 11.6606 28.2806 11.4027 28.0383C11.1449 27.7961 11 27.4676 11 27.125V23.25H6.875C5.78098 23.25 4.73177 22.8417 3.95818 22.115C3.1846 21.3883 2.75 20.4027 2.75 19.375V7.75C2.75 6.72229 3.1846 5.73666 3.95818 5.00996C4.73177 4.28326 5.78098 3.875 6.875 3.875ZM24.75 5.16667H6.875C6.14565 5.16667 5.44618 5.43884 4.93046 5.92331C4.41473 6.40778 4.125 7.06486 4.125 7.75V19.375C4.125 20.0601 4.41473 20.7172 4.93046 21.2017C5.44618 21.6862 6.14565 21.9583 6.875 21.9583H12.375V27.125L17.875 21.9583H24.75C25.4793 21.9583 26.1788 21.6862 26.6945 21.2017C27.2103 20.7172 27.5 20.0601 27.5 19.375V7.75C27.5 7.06486 27.2103 6.40778 26.6945 5.92331C26.1788 5.43884 25.4793 5.16667 24.75 5.16667Z"
        fill="black"
      />
      <Path
        d="M6.875 3.875H24.75C25.844 3.875 26.8932 4.28326 27.6668 5.00996C28.4404 5.73666 28.875 6.72229 28.875 7.75V19.375C28.875 20.4027 28.4404 21.3883 27.6668 22.115C26.8932 22.8417 25.844 23.25 24.75 23.25H18.4387L13.3512 28.0421C13.1038 28.2746 12.76 28.4167 12.375 28.4167C12.0103 28.4167 11.6606 28.2806 11.4027 28.0383C11.1449 27.7961 11 27.4676 11 27.125V23.25H6.875C5.78098 23.25 4.73177 22.8417 3.95818 22.115C3.1846 21.3883 2.75 20.4027 2.75 19.375V7.75C2.75 6.72229 3.1846 5.73666 3.95818 5.00996C4.73177 4.28326 5.78098 3.875 6.875 3.875ZM24.75 5.16667H6.875C6.14565 5.16667 5.44618 5.43884 4.93046 5.92331C4.41473 6.40778 4.125 7.06486 4.125 7.75V19.375C4.125 20.0601 4.41473 20.7172 4.93046 21.2017C5.44618 21.6862 6.14565 21.9583 6.875 21.9583H12.375V27.125L17.875 21.9583H24.75C25.4793 21.9583 26.1788 21.6862 26.6945 21.2017C27.2103 20.7172 27.5 20.0601 27.5 19.375V7.75C27.5 7.06486 27.2103 6.40778 26.6945 5.92331C26.1788 5.43884 25.4793 5.16667 24.75 5.16667Z"
        stroke="#F32121"
      />
    </Svg>
  );
}

export function Add() {
  const [isAdded, setIsAdded] = useState(false); // State to manage the bookmark button

  const handleAddPress = () => {
    setIsAdded(!isAdded);
  };

  return (
    <TouchableOpacity onPress={handleAddPress}>
      <Ionicons
        name={isAdded ? "checkmark-circle" : "checkmark-circle-outline"}
        size={24}
        color={isAdded ? "gray" : "black"}
      />
    </TouchableOpacity>
  );
}
