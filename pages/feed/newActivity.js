import { Timestamp } from "firebase/firestore";
import { auth } from "../../firebase";
import { setDoc } from "firebase/firestore";

export async function NewRanking(className, quarter, ranking) {
  try {
    data = {
      classRanked: className,
      quarterTaken: quarter,
      ranking: ranking,
      professorName: "",
      Timestamp: Date.now,
      user: auth.currentUser.email.split("@")[0],
      comments: {
        user: "Test User",
        comment: "Text Comment",
      },
    };
    await setDoc(doc(db, "Feed", "NewRanking: " + Timestamp.toString, data));
  } catch (err) {
    setError(err.message);
  }
}

export async function NewClassAdded(className, professorName) {
  try {
    const data = {
      classRanked: className,
      quarterTaken: "",
      ranking: null,
      professorName: professorName,
      Timestamp: Date.now,
      user: auth.currentUser.email.split("@")[0],
      comments: {
        user: "Test User",
        comment: "Text Comment",
      },
    };
    await setDoc(doc(db, "Feed", "NewClassAdded: " + Timestamp, data));
  } catch (err) {
    setError(err.message);
  }
}

export async function NewRec(className, professorName) {
  try {
    const data = {
      classRanked: className,
      quarterTaken: "",
      ranking: null,
      professorName: professorName,
      Timestamp: Date.now,
      user: auth.currentUser.email.split("@")[0],
      comments: {
        user: "Test User",
        comment: "Text Comment",
      },
    };
    await setDoc(doc(db, "Feed", "NewRec: " + Timestamp, data));
  } catch (err) {
    setError(err.message);
  }
}
