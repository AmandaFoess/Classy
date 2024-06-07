import { Timestamp, addDoc, setDoc, doc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";

export async function NewRanking(className, quarter, ranking) {
  let utcString = new Date().toUTCString();
  let date = new Date(utcString);

  let formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short", // Day of the week, e.g., "Wed"
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit", // Include seconds
    hour12: true, // Use 12-hour time format
    timeZone: "PDT",
  });

  let dateTime = formatter.format(date);
  try {
    let data = {
      class: className || "",
      quarter: quarter || "",
      ranking: ranking || 0,
      action: " ranked ",
      timePosted: dateTime,
      user: auth.currentUser ? auth.currentUser.email.split("@")[0] : "unknown",
      comments: {
        user: "Test User",
        comment: "Text Comment",
      },
    };
    //await addDoc(collection(db, "Feed"), data);
    await setDoc(doc(db, "Feed", data.timePosted), data);
  } catch (error) {
    console.error("Error pushing new ranking data: ", error);
  }
}

export async function NewClassAdded(className) {
  try {
    const data = {
      class: className,
      quarter: "",
      ranking: "?",
      action: " added ",
      postTime: Timestamp.now().toString(),
      user: auth.currentUser.email.split("@")[0],
      comments: {
        user: "Test User",
        comment: "Text Comment",
      },
    };
    await setDoc(doc(db, "Feed", "NewClassAdded: " + data.postTime, data));
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
      postTime: Timestamp.now().toString(),
      user: auth.currentUser.email.split("@")[0],
      comments: {
        user: "Test User",
        comment: "Text Comment",
      },
    };
    await setDoc(doc(db, "Feed", "NewRec: " + data.postTime, data));
  } catch (err) {
    setError(err.message);
  }
}
