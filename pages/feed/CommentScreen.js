import * as React from "react";
import {Image, StyleSheet, Pressable, View, Text} from "react-native";

const CommentScreen = () => {
  	
  	return (
    		<View style={[styles.commentFinal, styles.iconLayout1]}>
      			<Image style={styles.screenshot20240427At234} resizeMode="cover" source="Screenshot 2024-04-27 at 2.34 1.png" />
      			<View style={styles.openmojireturnBackButtonWrapper}>
        				<Pressable style={styles.openmojireturnBackButton} onPress={()=>{}}>
          					<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" source="openmoji:return-back-button.png" />
        				</Pressable>
      			</View>
      			<View style={styles.feedUpdates}>
        				<View style={[styles.profilePicSallerParent, styles.profilePicSallerParentSpaceBlock]}>
                        <View style={styles.esWrapper}>
              <Text style={styles.es}>ES</Text>
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
              							<Image style={styles.vectorIcon} resizeMode="cover" source= "Heart" />
            						</View>
            						<Image style={[styles.mdiLightcommentIcon, styles.iconLayout]} resizeMode="cover" source="mdi-light:comment.png" />
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
  	iconLayout1: {
    		width: "100%",
    		overflow: "hidden"
  	},
  	profilePicSallerParentSpaceBlock: {
    		paddingHorizontal: 19,
    		backgroundColor: "rgba(255, 255, 255, 0)"
  	},
  	spring2024Typo: {
        textAlign: "center",
        color: "#0c0000",
        fontSize: 20,
        alignSelf: "left",
  	},
  	unlikedParentSpaceBlock: {
    		paddingVertical: 10,
    		flexDirection: "row"
  	},
  	iconLayout: {
    		width: 33,
    		overflow: "hidden"
  	},
  	parentFlexBox: {
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	fieldFlexBox: {
    		borderRadius: 6,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	emailFlexBox: {
    		textAlign: "left",
    		lineHeight: 24
  	},
  	screenshot20240427At234: {
    		width: 437,
    		height: 30
  	},
  	icon: {
    		height: "100%",
    		overflow: "hidden"
  	},
  	openmojireturnBackButton: {
        width: 51,
        height: 56
  },
/*   openmojireturnBackButtonWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 21,
    flexDirection: "row",
    width: 423,
    overflow: "hidden",
    backgroundColor: "#fff"
}, */
  	profilePicSaller: {
    		width: 69,
    		height: 69
  	},
  	abc: {
    		fontWeight: "600",
    		fontFamily: "Inter-SemiBold"
  	},
  	bookmarked: {
    		fontFamily: "Inter-Regular"
  	},
  	spring2024: {
    		fontWeight: "200",
    		fontFamily: "Inter-ExtraLight",
    		marginTop: 10
  	},
  	abcBookmarkedCs103Parent: {
        padding: 10,
        marginLeft: 10,
        justifyContent: "center", // Align children vertically centered
        overflow: "hidden",
        width: "auto",
  	},
  	profilePicSallerParent: {
        width: "100%", // Adjust the width as needed
        height: 123,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center", // Center the content horizontally
        overflow: "hidden",
        flexDirection: "row"
  	},
  	vectorIcon: {
    		width: 28,
    		height: 23
  	},
  	unliked: {
    		paddingHorizontal: 1,
    		paddingVertical: 9,
    		overflow: "hidden"
  	},
  	mdiLightcommentIcon: {
    		height: 31,
    		marginLeft: 3
  	},
  	unlikedParent: {
    		backgroundColor: "rgba(245, 245, 245, 0)",
    		width: 65,
    		paddingHorizontal: 0,
    		height: 38,
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	bookmarkedIcon: {
    		height: 32
  	},
  	bookmarkedWrapper: {
    		width: 68,
    		alignItems: "flex-end",
    		paddingHorizontal: 18,
    		paddingVertical: 2,
    		justifyContent: "center"
  	},
  	likeCommentBookmarkBar: {
    		marginTop: -17,
    		justifyContent: "space-between",
    		paddingHorizontal: 19,
    		backgroundColor: "rgba(255, 255, 255, 0)",
    		width: 423
  	},
  	feedUpdates: {
    		backgroundColor: "rgba(202, 209, 212, 0.09)",
    		borderColor: "#000",
    		borderWidth: 0.3,
    		width: "auto",
    		height: 175,
    		paddingVertical: 0,
    		paddingHorizontal: 6,
    		borderStyle: "solid",
    		overflow: "hidden"
  	},
  	profilePicSaller1: {
    		width: 37,
    		height: 38
  	},
  	email: {
    		fontSize: 16,
    		color: "#94a3b8",
    		fontFamily: "Inter-Regular"
  	},
  	field: {
    		alignSelf: "stretch",
    		borderColor: "#cbd5e1",
    		borderWidth: 1,
    		paddingLeft: 12,
    		paddingTop: 8,
    		paddingRight: 56,
    		paddingBottom: 8,
    		borderStyle: "solid",
    		backgroundColor: "#fff"
  	},
  	default: {
    		width: "auto",
    		height: 40
  	},
  	subscribe: {
    		fontSize: 14,
    		fontWeight: "500",
    		fontFamily: "Inter-Medium",
    		color: "#fff"
  	},
  	button: {
    		backgroundColor: "#0f172a",
    		paddingHorizontal: 16,
    		paddingVertical: 8,
    		marginLeft: 8,
    		justifyContent: "center"
  	},
  	inputwithButton: {
    		width: 384,
    		flexDirection: "row"
  	},
  	commentFooter: {
    		position: "absolute",
    		top: 556,
    		left: 9,
    		backgroundColor: "rgba(255, 255, 255, 0.01)",
    		width: 446,
    		height: 52,
    		paddingVertical: 16,
    		justifyContent: "space-between",
    		paddingHorizontal: 6,
    		flexDirection: "row"
  	},
  	commentFooterWrapper: {
    		width: 455,
    		height: 652,
    		backgroundColor: "#fff"
  	},
  	commentFinal: {
    		flex: 1,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	},
      esWrapper: {
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: "#f4f5f8",
        width: 100,
        height: 100,
        marginTop: 10,
        overflow: "hidden"
  },
  es: {
    marginLeft: -40,
    top: 30,
    left: "50%",
    fontSize: 34,
    width: 80,
    color: "#aeb1ba",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    position: "absolute",
    textAlign: "center"
}
});

export default CommentScreen;
