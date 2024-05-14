import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Add, Bookmark } from "../../assets/icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";

const CourseHeader = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleRecommend = () => {
    navigation.navigate("Recommend");
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
