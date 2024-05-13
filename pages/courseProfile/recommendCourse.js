import * as React from "react";
import {Text, StyleSheet, Image, View} from "react-native";

const RecommendCourse = () => {
  	
  	return (
    		<View style={[styles.iphone1415ProMax7, styles.frame60variant3FlexBox]}>
      			<Text style={[styles.recommendTo, styles.recommendToTypo]}>Recommend To:</Text>
      			<View style={[styles.searchIconWrapper, styles.searchIconWrapperSpaceBlock]}>
        				<Image style={styles.searchIcon} resizeMode="cover" source="search icon.png" />
      			</View>
      			<View style={[styles.frame60variant3Parent, styles.searchIconWrapperSpaceBlock]}>
        				<View style={[styles.frame60variant3, styles.frame60variant3Border]}>
          					<Text style={[styles.piperfleming, styles.recommendToTypo]}>@piperfleming</Text>
          					<Image style={styles.addAndSave} resizeMode="cover" source="add and save.png" />
          					<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
        				</View>
        				<View style={[styles.frame60variant3, styles.frame60variant3Border]}>
          					<Text style={[styles.piperfleming, styles.recommendToTypo]}>@piperfleming</Text>
          					<Image style={styles.addAndSave} resizeMode="cover" source="add and save.png" />
          					<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
        				</View>
        				<View style={[styles.frame60variant3, styles.frame60variant3Border]}>
          					<Text style={[styles.piperfleming, styles.recommendToTypo]}>@piperfleming</Text>
          					<Image style={styles.addAndSave} resizeMode="cover" source="add and save.png" />
          					<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
        				</View>
        				<View style={[styles.frame60variant3, styles.frame60variant3Border]}>
          					<Text style={[styles.piperfleming, styles.recommendToTypo]}>@piperfleming</Text>
          					<Image style={styles.addAndSave} resizeMode="cover" source="add and save.png" />
          					<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
        				</View>
        				<View style={[styles.frame60variant3, styles.frame60variant3Border]}>
          					<Text style={[styles.piperfleming, styles.recommendToTypo]}>@piperfleming</Text>
          					<Image style={styles.addAndSave} resizeMode="cover" source="add and save/on saved page3.png" />
          					<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
        				</View>
        				<View style={[styles.frame60variant3, styles.frame60variant3Border]}>
          					<Text style={[styles.piperfleming, styles.recommendToTypo]}>@piperfleming</Text>
          					<Image style={styles.addAndSave} resizeMode="cover" source="add and save/on saved page3.png" />
          					<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
        				</View>
        				<View style={[styles.frame60variant3, styles.frame60variant3Border]}>
          					<Text style={[styles.piperfleming, styles.recommendToTypo]}>@piperfleming</Text>
          					<Image style={styles.addAndSave} resizeMode="cover" source="add and save/on saved page3.png" />
          					<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	frame60variant3FlexBox: {
    		alignItems: "center",
    		backgroundColor: "#fff"
  	},
  	recommendToTypo: {
    		textAlign: "left",
    		color: "#000",
    		fontSize: 20
  	},
  	searchIconWrapperSpaceBlock: {
    		marginTop: 16,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	},
  	frame60variant3Border: {
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	recommendTo: {
    		fontFamily: "Inter-Regular"
  	},
  	searchIcon: {
    		width: 24,
    		height: 24,
    		overflow: "hidden"
  	},
  	searchIconWrapper: {
    		borderRadius: 30,
    		borderColor: "#000",
    		width: 365,
    		paddingHorizontal: 28,
    		paddingVertical: 12,
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	piperfleming: {
    		fontWeight: "700",
    		fontFamily: "Inter-Bold"
  	},
  	addAndSave: {
    		width: 56,
    		height: 29
  	},
  	vectorIcon: {
    		width: 15,
    		height: 15
  	},
  	frame60variant3: {
    		borderColor: "#b9b9b9",
    		width: 441,
    		height: 69,
    		justifyContent: "space-between",
    		paddingHorizontal: 30,
    		paddingVertical: 32,
    		overflow: "hidden",
    		alignItems: "center",
    		backgroundColor: "#fff"
  	},
  	frame60variant3Parent: {
    		paddingHorizontal: 0,
    		paddingVertical: 7
  	},
  	iphone1415ProMax7: {
    		flex: 1,
    		width: "100%",
    		height: 944,
    		paddingTop: 100,
    		paddingBottom: 82,
    		opacity: 0.5
  	}
});

export default RecommendCourse;
