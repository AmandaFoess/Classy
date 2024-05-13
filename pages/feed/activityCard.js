import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Bookmark, Heart, Comment } from "../../assets/icons";

const MAX_TEXT_LENGTH = 20; // Maximum characters for student name and class

const ActivityCard = ({ name, course, rank }) => {  
  const rankedTextComponent = (name, course) => (
    <Text style={styles.abcRankedCsContainer} >
      <Text style={styles.abc}>{name}</Text>
      <Text style={styles.ranked}>{` ranked `}</Text>
      <Text style={styles.abc}>{course}</Text>
    </Text>
  );


  return (
    <View style={styles.feedUpdateslikebookmarked}>
      <View style={styles.profilePicSallerParent}>
        <Image
          style={styles.profilePicSaller}
          resizeMode="cover"
          source={require("/Users/evyshen/Documents/GitHub/Classy/assets/RichardSallerPic.png")}
        />
        <View style={styles.abcRankedCs103Parent} >
        {rankedTextComponent(name, course)}
          <Text style={[styles.spring2024] }>Spring 2024</Text>
        </View>
        <View style={styles.rankingWrapper}>
          <Text style={[styles.rank]}>{rank}</Text>
        </View>
      </View>
      <View style={[styles.reactionsParent]}>
        <View style={styles.reactions}>
        <Pressable style = {styles.iconWrapper}>
            <Heart />
            </Pressable>
          <Pressable onPress={() => {}}>
            <Comment />
          </Pressable>
          <Pressable  >
          <Bookmark />
          </Pressable>
      </View>
    </View>
    <Text style = {styles.time}>
      Yesterday
    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    marginTop: -20,
    paddingLeft: 10,
  },
  profilePicSaller: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginLeft: 10,
  },
  abc: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  ranked: {
    fontFamily: "Inter-Regular",
    
  },
  abcRankedCsContainer: {
    textAlign: "left",
    fontSize: 20,
    // color: "#0c0000",
    // borderColor: "purple",
    // borderWidth: 5,
    // width: 50,
    
  },
  spring2024: {
    marginTop: 10,
    color: "#0c0000",
    // borderColor: "orange",
    // borderWidth: 5,
    alignItems: "left",
    fontFamily: "Inter-ExtraLight",
    fontWeight: "200",
    fontSize: 20,
  },
  abcRankedCs103Parent: {
    width: 230,
    height: 100,
    padding: 10,
    // borderColor: "green",
    // borderWidth: 5,
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  rank: {
    color: "#0b0b0b",
    fontSize: 20,
    fontFamily: "Inter-ExtraLight",
   },
  rankingWrapper: {
    borderRadius: 50,
    borderColor: "#0f0e0e",
    width: 50,
    height: 50,
    // paddingVertical: 11,
    marginLeft: 21,
    justifyContent: "center",
    paddingHorizontal: 9,
    borderStyle: "solid",
    alignItems: "center",
    // borderColor: "blue",
    borderWidth: 1.6,
    backgroundColor: "white",  
  },
  profilePicSallerParent: {
    // width: 387,
    height: 123,
    paddingHorizontal: 0,
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    margineLeft: 20,
    // borderColor: "red",
    // borderWidth: 5,
    backgroundColor: "rgba(255, 255, 255, 0)",
    // overflow: "hidden",
  },
  
  reactions: {
    backgroundColor: "rgba(245, 245, 245, 0)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    // borderColor: "red",
    // borderWidth: 5,
    width: 120,
  },
  iconWrapper: {
    padding: 10,

  },
  reactionsParent: {
    height: 61,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: -20,
    paddingVertical: 0,
    // borderColor: "pink",
    // borderWidth: 5,
    // width: 30,
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
    // borderColor: "green",
    // borderWidth: 5,
  },
});

export default ActivityCard;
