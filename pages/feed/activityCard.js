import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Bookmark, Heart, Comment } from "../../assets/icons";

const ActivityCard = ({ name, course, rank }) => {
  return (
    <View style={styles.feedUpdateslikebookmarked}>
      <View style={styles.profilePicSallerParent}>
        <Image
          style={styles.profilePicSaller}
          resizeMode="cover"
          source="Profile Pic- Saller.png"
        />
        <View style={[styles.abcRankedCs103Parent, styles.wrapperSpaceBlock]}>
          <Text style={styles.abcRankedCsContainer}>
            <Text style={styles.abc}>{name}</Text>
            <Text style={styles.ranked}>{` ranked `}</Text>
            <Text style={styles.abc}>{course}</Text>
          </Text>
          <Text style={[styles.spring2024, styles.textTypo]}>Spring 2024</Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>{rank}</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.wrapperFlexBox]}>
        <View style={styles.frameGroup}>
          <View style={styles.vectorWrapper}>
            <Heart />
          </View>
          <Pressable style={styles.mdiLightcomment} onPress={() => {}}>
            <Comment />
          </Pressable>
        </View>
        <View>
          <Bookmark />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    marginLeft: 21,
    justifyContent: "center",
  },
  textTypo: {
    fontFamily: "Inter-ExtraLight",
    fontWeight: "200",
    textAlign: "center",
    fontSize: 20,
  },
  wrapperFlexBox: {
    paddingHorizontal: 9,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  profilePicSaller: {
    width: 69,
    height: 67,
  },
  abc: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  ranked: {
    fontFamily: "Inter-Regular",
  },
  abcRankedCsContainer: {
    textAlign: "center",
    fontSize: 20,
    color: "#0c0000",
  },
  spring2024: {
    marginTop: 10,
    color: "#0c0000",
    fontWeight: "200",
  },
  abcRankedCs103Parent: {
    padding: 10,
    overflow: "hidden",
  },
  text: {
    color: "#0b0b0b",
  },
  wrapper: {
    borderRadius: 50,
    borderColor: "#0f0e0e",
    borderWidth: 1,
    width: 50,
    height: 50,
    paddingVertical: 11,
    marginLeft: 21,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0)",
    paddingHorizontal: 9,
    borderStyle: "solid",
  },
  profilePicSallerParent: {
    width: 387,
    height: 123,
    paddingHorizontal: 19,
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden",
  },
  vectorIcon: {
    width: 28,
    height: 23,
  },
  vectorWrapper: {
    paddingHorizontal: 7,
    paddingVertical: 9,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  mdiLightcomment: {
    width: 33,
    height: 31,
    marginLeft: 3,
  },
  frameGroup: {
    backgroundColor: "rgba(245, 245, 245, 0)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    height: 61,
    justifyContent: "flex-end",
    marginTop: -17,
    paddingVertical: 0,
  },
  feedUpdateslikebookmarked: {
    backgroundColor: "rgba(202, 209, 212, 0.09)",
    borderColor: "#000",
    borderWidth: 0.3,
    flex: 1,
    height: 175,
    paddingHorizontal: 6,
    paddingVertical: 0,
    overflow: "hidden",
    width: "100%",
    borderStyle: "solid",
  },
});

export default ActivityCard;
