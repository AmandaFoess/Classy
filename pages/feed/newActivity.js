import { Timestamp, addDoc, setDoc, collection, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export async function NewRanking(className, quarter, ranking) {
  try {
    data = {
      class: className,
      quarter: quarter,
      ranking: ranking,
      action: " ranked ",
      user: auth.currentUser.email.split("@")[0],
      comments: {
        user: "Test User",
        comment: "Text Comment",
      },
    };
    await addDoc(collection(db, "Feed"), data);
  } catch (error) {
    console.error("Error fetching feed data: ", error);
  }
}

export async function NewClassAdded(className) {
  try {
    const data = {
      class: className,
      quarter: "",
      ranking: "?",
      action: " added ",
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
      class: className,
      quarter: "",
      ranking: "?",
      action: " recommended ",
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
