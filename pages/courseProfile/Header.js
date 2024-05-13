import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Add, Bookmark } from "../../assets/icons";

const CourseHeader = () => {
  return (
    <View style={styles.buttondefaultParent}>
      <View style={[styles.buttondefault, styles.addAndSaveFlexBox]}>
        <Text style={styles.recommend}>RECOMMEND</Text>
      </View>
      <View style={[styles.addAndSave, styles.addAndSaveFlexBox]}>
        <Add />
        <Bookmark />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addAndSaveFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  recommend: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#000",
    textAlign: "center",
  },
  buttondefault: {
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#aeb1ba",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
  },
  ggaddIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  saveIcon: {
    width: 26,
    height: 29,
    marginLeft: 4,
    overflow: "hidden",
  },
  addAndSave: {
    marginLeft: 20,
  },
  buttondefaultParent: {
    backgroundColor: "#fff",
    width: "100%",
    //padding: 20,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
});

export default CourseHeader;
