import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";

const RankingClasses = () => {
  const [note, setNote] = useState(""); // State to manage the input text

  return (
    <View style={styles.wholeScreen}>
      <View>
        <View style={styles.classBeingRanked}>
          <Text style={styles.courseCode}>CS 103</Text>
          <Text style={styles.className}>
            Mathematical Foundations of Computing
          </Text>
        </View>

        <View style={styles.rankingWrapper}>
          <View style={[styles.frameParent]}>
            <View style={styles.howHardWasItWrapper}>
              <Text style={[styles.howHardWas]}>How hard was it?</Text>
            </View>
            <View style={styles.rankingScale}>
              <View style={styles.frameWrapperLayout}>
                <Text style={styles.text}>1</Text>
              </View>
              <View style={[styles.container, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>2</Text>
              </View>
              <View style={[styles.frame, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>3</Text>
              </View>
              <View style={[styles.frameView, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>4</Text>
              </View>
              <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>5</Text>
              </View>
              <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>6</Text>
              </View>
              <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>7</Text>
              </View>
              <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>8</Text>
              </View>
              <View style={[styles.wrapper5, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>9</Text>
              </View>
              <View style={[styles.wrapper6, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>10</Text>
              </View>
            </View>
            <View style={styles.howHardWasItWrapper}>
              <Text style={[styles.howHardWas]}>How fun was it?</Text>
            </View>
            <View style={styles.rankingScale}>
              <View style={styles.frameWrapperLayout}>
                <Text style={[styles.text, styles.textTypo]}>1</Text>
              </View>
              <View style={[styles.container, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>2</Text>
              </View>
              <View style={[styles.frame, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>3</Text>
              </View>
              <View style={[styles.frameView, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>4</Text>
              </View>
              <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>5</Text>
              </View>
              <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>6</Text>
              </View>
              <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>7</Text>
              </View>
              <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>8</Text>
              </View>
              <View style={[styles.wrapper5, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>9</Text>
              </View>
              <View style={[styles.wrapper6, styles.frameWrapperLayout]}>
                <Text style={[styles.text, styles.textTypo]}>10</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.notesWrapper}>
        <Image
          style={styles.profilePicSaller}
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
              /* Handle post action */
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
  classBeingRanked: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 0.4,
    borderRadius: 5,
    padding: 10,

    // width: 200,
  },
  courseCode: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    fontSize: 20,
  },
  frameWrapperLayout: {
    marginLeft: 10,
    padding: 5,
    height: 26,
    width: 25,
    borderRadius: 5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
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
    flexDirection: "column",
    // color: "#000",
    backgroundColor: "#fff",
  },

  howHardWas: {
    textAlign: "left",
    lineHeight: 24,
    color: "#000",
    fontSize: 20,
  },
  howHardWasItWrapper: {
    // width: 426,
    paddingHorizontal: 50,
    paddingVertical: 19,
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // borderColor: "green",
    // borderWidth: 5,
  },

  entireRankWrapper: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "orange",
    borderWidth: 5,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
    color: "#000",
  },
  wrapper: {
    backgroundColor: "#dc9e9e",
    padding: 5,
    height: 26,
    width: 25,
    borderRadius: 5,
    // justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    // borderColor: "green",
    // borderWidth: 6,
  },
  container: {
    backgroundColor: "#dcaa9e",
  },
  frame: {
    backgroundColor: "#dcb89e",
  },
  frameView: {
    backgroundColor: "#dcc39e",
  },
  wrapper1: {
    backgroundColor: "#dcd29e",
  },
  wrapper2: {
    backgroundColor: "#dbdc9e",
  },
  wrapper3: {
    backgroundColor: "#ccdc9e",
  },
  wrapper5: {
    backgroundColor: "#b6dc9e",
  },
  wrapper6: {
    backgroundColor: "#9edcb3",
  },
  rankingScale: {
    height: 56,
    paddingHorizontal: 14,
    paddingVertical: 39,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
    // borderColor: "red",
    // borderWidth: 3,
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
  },

  wholeScreen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // borderColor: "blue",
    // borderWidth: 3,
    justifyContent: "space-evenly",
    backgroundColor: "rgba(202, 209, 212, 0.09)",
    paddingHorizontal: 6,
    paddingVertical: 20,
    borderStyle: "solid",
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
    width: 37,
    height: 38,
    // paddingRight: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingLeft: 10,

    // borderColor: "green",
    // borderWidth: 2,
  },
  inputField: {
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginRight: 8,
    height: 50,
    // borderColor: "green",
    // borderWidth: 2,
  },
  inputText: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8",
  },
  postButton: {
    // backgroundColor: "#0f172a",
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 6,
    // height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  postButtonText: {
    fontSize: 17,
    color: "#3d47a6",
    fontWeight: "500",
  },
  profilePicSaller: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // marginLeft: 5,
  },
});

export default RankingClasses;
