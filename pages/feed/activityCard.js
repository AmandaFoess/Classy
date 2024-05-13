import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Bookmark, Comment } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const MAX_TEXT_LENGTH = 20; // Maximum characters for student name and class

const ActivityCard = ({ name, course, rank }) => {
  const navigation = useNavigation();

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleHeartPress = () => {
    setIsLiked(!isLiked); // Toggle the isLiked state
  };

  const handleCommentPress = () => {
    navigation.navigate("Comment Screen");
  };

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked); // Toggle the isLiked state
  };

  const rankedTextComponent = (name, course) => (
    <Text style={styles.abcRankedCsContainer}>
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
        <View style={styles.abcRankedCs103Parent}>
          {rankedTextComponent(name, course)}
          <Text style={[styles.spring2024]}>Spring 2024</Text>
        </View>
        <View style={styles.rankingWrapper}>
          <Text style={[styles.rank]}>{rank}</Text>
        </View>
      </View>
      <View style={styles.reactionsParent}>
        <View style={styles.reactions}>
          <TouchableOpacity onPress={handleHeartPress}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={27}
              color={isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCommentPress}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBookmarkPress}>
            <Ionicons
              name={isBookmarked ? "bookmark" : "bookmark-outline"}
              size={24}
              color={isBookmarked ? "gray" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.time}>Yesterday</Text>
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
    // marginLeft: 5,
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
  },
  spring2024: {
    marginTop: 10,
    color: "#0c0000",
    alignItems: "left",
    fontFamily: "Inter-ExtraLight",
    fontWeight: "200",
    fontSize: 20,
  },
  abcRankedCs103Parent: {
    width: 230,
    height: 100,
    padding: 10,
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
    marginLeft: 21,
    justifyContent: "center",
    paddingHorizontal: 9,
    borderStyle: "solid",
    alignItems: "center",
    borderWidth: 1.6,
    backgroundColor: "white",
  },
  profilePicSallerParent: {
    height: 123,
    paddingHorizontal: 0,
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  reactions: {
    backgroundColor: "rgba(245, 245, 245, 0)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
