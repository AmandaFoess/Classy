import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CommentScreen = () => {
  const navigation = useNavigation();

  const [comment, setComment] = useState(""); // State to manage the input text
  const [isLiked, setIsLiked] = useState(false); // State to manage the like button
  const [isBookmarked, setIsBookmarked] = useState(false); // State to manage the bookmark button

  const handleHeartPress = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleBackPress = () => {
    navigation.navigate("Feed");
  };

  return (
    <View style={styles.container}>
      <View style>
        <View style={styles.backButtonWrapper}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackPress}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.activityCard}>
          <View style={styles.profileSection}>
            <View style={styles.profilePicWrapper}>
              <Text style={styles.profilePicText}>ES</Text>
            </View>
          					<View style={styles.abcBookmarkedCs103Parent}>
            						<Text style={styles.spring2024Typo}>
              							<Text style={styles.abc}>ABC</Text>
              							<Text style={styles.bookmarked}>{` bookmarked `}</Text>
              							<Text style={styles.abc}>CS 103</Text>
              							<Text style={styles.bookmarked}>{` `}</Text>
            						</Text>
            						<Text style={[styles.spring2024, styles.spring2024Typo]}>Spring  2024</Text>
          					</View>
                            
        				</View>
        				<View style={[styles.likeCommentBookmarkBar, styles.unlikedParentSpaceBlock]}>
          					<View style={[styles.unlikedParent, styles.unlikedParentSpaceBlock]}>
            						<View style={styles.unliked}>
              							<Heart/>
            						</View>
                                        <Comment/>
            						{/* <Image style={[styles.mdiLightcommentIcon, styles.iconLayout]} resizeMode="cover" source="mdi-light:comment.png" /> */}
          					</View>
          					<View style={styles.bookmarkedWrapper}>
            						<Image style={[styles.bookmarkedIcon, styles.iconLayout]} resizeMode="cover" source="Bookmarked.png" />
          					</View>
        				</View>
      			</View>
      			<View style={styles.commentFooterWrapper}>
        				<View style={[styles.commentFooter, styles.parentFlexBox]}>
          					<Image style={styles.profilePicSaller1} resizeMode="cover" source="Profile Pic- Saller.png" />
          					<View>
            						<View style={styles.inputwithButton}>
              							<View style={styles.default}>
                								<View style={[styles.field, styles.fieldFlexBox]}>
                  									<Text style={[styles.email, styles.emailFlexBox]}>Comment, or tag a friend</Text>
                								</View>
              							</View>
              							<View style={[styles.button, styles.fieldFlexBox]}>
                								<Text style={[styles.subscribe, styles.emailFlexBox]}>Post</Text>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  time: {
    fontColor: "gray",
  },
  profilePicSaller: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // marginLeft: 5,
  },
  activityCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicWrapper: {
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "#f4f5f8",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  profilePicText: {
    fontSize: 34,
    color: "#aeb1ba",
    fontWeight: "500",
    textAlign: "center",
  },
  activityInfo: {
    flex: 1,
  },
  activityText: {
    fontSize: 20,
    textAlign: "left",
    color: "#0c0000",
  },
  boldText: {
    fontWeight: "600",
  },
  semesterText: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "left",
    color: "#0c0000",
    fontWeight: "200",
  },
  reactions: {
    // height: 61,
    // alignItems: "flex-end",
    justifyContent: "space-evenly",
    // marginTop: 10,
    width: 120,
    flexDirection: "row",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  reactionsWrapper: {
    alignItems: "flex-end",
  },
  backButton: {
    width: 51,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    padding: 5,
  },
  commentFooterWrapper: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "space-evenly",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  commentFooter: {
    flexDirection: "row",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 2,
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
    // borderColor: "green",
    paddingLeft: 10,
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
});

export default CommentScreen;
