import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Bookmark } from "../../assets/icons"; // Assuming these are custom SVG components or similar

const CourseHeader = ({ navigation, classID }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleRecommend = () => {
    navigation.navigate("Recommend");
  };

  const handleAdd = () => {
    navigation.navigate("Add Class", {
      classID: classID,
    });
  };

  return (
    <View style={styles.buttondefaultParent}>
      <TouchableOpacity
        style={styles.addAndSaveFlexBox}
        onPress={handleBackPress}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Pressable
        style={[styles.buttondefault, styles.addAndSaveFlexBox]}
        onPress={handleRecommend}
      >
        <Text style={styles.recommend}>RECOMMEND</Text>
      </Pressable>
      <View style={[styles.addAndSave, styles.addAndSaveFlexBox]}>
        <TouchableOpacity onPress={handleAdd}>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
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
    marginLeft: 20,
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
  addAndSave: {
    marginLeft: 20,
  },
  buttondefaultParent: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
});

export default CourseHeader;
