import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const RankingClasses = () => {
  const [note, setNote] = useState(""); // State to manage the input text
  const [hardScale, setHardScale] = useState(0); // State for hard scale
  const [funScale, setFunScale] = useState(0); // State for fun scale

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

  return (
    <View style={styles.wholeScreen}>
      <View style={styles.classBeingRanked}>
        <Text style={styles.courseCode}>CS 103</Text>
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
        </View>
      </View>

      <View style={styles.notesWrapper}>
        <Image
          style={styles.profilePic}
          resizeMode="cover"
          source={require("../../assets/RichardSallerPic.png")}
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputField}
            placeholder="Add Notes"
            value={note}
            onChangeText={setNote}
            multiline
          />
          <TouchableOpacity
            style={styles.postButton}
            onPress={() => {
              // Handle post action
              console.log("Note:", note);
              console.log("Hard Scale Rating:", hardScale);
              console.log("Fun Scale Rating:", funScale);
            }}
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    borderColor: "black",
    borderWidth: 0.4,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingLeft: 10,
  },
  inputField: {
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    backgroundColor: "#fff",
    flex: 1,
    marginRight: 8,
    height: 50,
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
