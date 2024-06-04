import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
// import { useRoute } from "@react-navigation/native";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { NewRanking } from "../feed/newActivity";

const RankingClasses = () => {
  const course = "Cs"; // Get course from navigation params

  const [note, setNote] = useState("");
  const [hardScale, setHardScale] = useState(0);
  const [funScale, setFunScale] = useState(0);
  const [quarterYearOffered, setQuarterYearOffered] = useState("");
  const [professorName, setProfessorName] = useState("");
  const [notes, setNotes] = useState("");

  const handleScalePress = (type, value) => {
    if (type === "hard") {
      setHardScale(value);
    } else if (type === "fun") {
      setFunScale(value);
    }
    console.log(`${type} rating selected:`, value);
  };

  const renderScale = (type) => {
    const colors = [
      "#dc9e9e",
      "#dcaa9e",
      "#dcb89e",
      "#dcc39e",
      "#dcd29e",
      "#dbdc9e",
      "#ccdc9e",
      "#b6dc9e",
      "#9edcb3",
      "#9edcda",
    ];

    const selectedScale = type === "hard" ? hardScale : funScale;

    return colors.map((color, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.scaleItem,
          {
            backgroundColor: color,
            borderWidth: selectedScale === index + 1 ? 2 : 0.3,
          },
        ]}
        onPress={() => handleScalePress(type, index + 1)}
      >
        <Text style={styles.scaleText}>{index + 1}</Text>
      </TouchableOpacity>
    ));
  };

  const handlePost = async () => {
    const userID = auth.currentUser.email.split("@")[0];
    const userDocRef = doc(db, "Users", userID);
    console.log(userDocRef);
    rank = handleRanking();

    try {
      await updateDoc(doc(db, "Users", userID), {
        myClasses: arrayUnion({
          coure: course,
          quarterYearOffered: quarterYearOffered,
          professorName: professorName,
          rank: rank,
          notes: notes,
        }),
      });
      console.log("Class ranked successfully");
      NewRanking(course, quarterYearOffered, rank);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  function handleRanking() {
    hard = ((hardScale - 1) / 9) * 0.4;
    fun = ((funScale - 1) / 9) * 0.6;
    return (fun - hard) * 9 + 1;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wholeScreen}>
        <View style={styles.classBeingRanked}>
          <Text style={styles.courseCode}>{course}</Text>
          <Text style={styles.className}>
            Mathematical Foundations of Computing
          </Text>
        </View>

        <View style={styles.rankingWrapper}>
          <View style={styles.frameParent}>
            <Text style={styles.questionText}>How hard was it?</Text>
            <View style={styles.rankingScale}>{renderScale("hard")}</View>

            <Text style={styles.questionText}>How fun was it?</Text>
            <View style={styles.rankingScale}>{renderScale("fun")}</View>

            <TextInput
              style={styles.inputFieldSmall}
              placeholder="Quarter and Year"
              value={quarterYearOffered}
              onChangeText={setQuarterYearOffered}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
            <TextInput
              style={styles.inputFieldSmall}
              placeholder="Professor"
              value={professorName}
              onChangeText={setProfessorName}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />

            <View style={styles.notesWrapper}>
              <Image
                style={styles.profilePic}
                resizeMode="cover"
                source={require("../../assets/RichardSallerPic.png")}
              />
              <TextInput
                style={styles.inputFieldNotes}
                placeholder="Notes"
                value={notes}
                onChangeText={setNotes}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                <Text style={styles.postButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(202, 209, 212, 0.09)",
    paddingHorizontal: 6,
    paddingVertical: 20,
  },
  classBeingRanked: {
    backgroundColor: "white",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.4,
    borderRadius: 5,
    padding: 10,
  },
  courseCode: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    fontSize: 20,
  },
  className: {
    fontFamily: "Inter-Regular",
    fontSize: 20,
  },
  rankingWrapper: {
    borderColor: "black",
    borderWidth: 0.4,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    textAlign: "left",
    lineHeight: 24,
    color: "#000",
    fontSize: 20,
    paddingVertical: 19,
  },
  rankingScale: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  scaleItem: {
    marginLeft: 10,
    padding: 5,
    height: 26,
    width: 25,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
  },
  scaleText: {
    fontSize: 15,
    textAlign: "center",
    color: "#000",
  },
  notesWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  inputFieldSmall: {
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    backgroundColor: "#fff",
    width: "80%",
    height: 40,
    marginVertical: 10,
  },
  inputFieldNotes: {
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    backgroundColor: "#fff",
    flex: 1,
    height: 40,
    marginRight: 8,
  },
  postButton: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  postButtonText: {
    fontSize: 17,
    color: "#3d47a6",
    fontWeight: "500",
  },
});

export default RankingClasses;
