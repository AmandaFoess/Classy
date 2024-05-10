import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const dataSet = [
	{ class: "Mathematics", professorName: "Dr. Smith", quarterYearOffered: "Fall 2023", rank: 8.5 },
	{ class: "Biology", professorName: "Prof. Johnson", quarterYearOffered: "Spring 2024", rank: 9.2 },
	{ class: "History", professorName: "Dr. Lee", quarterYearOffered: "Winter 2024", rank: 7.8 },
	{ class: "Chemistry", professorName: "Prof. Garcia", quarterYearOffered: "Summer 2024", rank: 8.9 },
	{ class: "Literature", professorName: "Dr. Patel", quarterYearOffered: "Fall 2024", rank: 9.6 },
	{ class: "Physics", professorName: "Prof. Thompson", quarterYearOffered: "Spring 2023", rank: 8.0 },
	{ class: "Economics", professorName: "Dr. Brown", quarterYearOffered: "Winter 2023", rank: 7.5 },
	{ class: "Computer Sci.", professorName: "Prof. Kim", quarterYearOffered: "Summer 2023", rank: 8.7 },
	{ class: "Psychology", professorName: "Dr. White", quarterYearOffered: "Fall 2022", rank: 9.1 },
	{ class: "Sociology", professorName: "Prof. Davis", quarterYearOffered: "Spring 2022", rank: 7.2 }
  ];  
    

function SingleClassRanking({course, professorName, quarterYearOffered, rank}) {
  	
  	return (
    		<View style={styles.singleClassRanking}>
      			<View style={[styles.frameParent, styles.parentFlexBox]}>
        				<View style={styles.frameGroup}>
          					<View style={styles.parentFlexBox}>
            						<Text style={[styles.text, styles.textClr]} />
            						<Text style={[styles.text, styles.textClr]}>{course}</Text>
          					</View>
          					<Text style={[styles.keithWinstein, styles.textClr]}>{professorName}}</Text>
          					<Text style={[styles.keithWinstein, styles.textClr]}>{quarterYearOffered}}</Text>
        				</View>
        				<View style={styles.wrapper}>
          					<Text style={[styles.text1, styles.textTypo]}>{rank}</Text>
        				</View>
      			</View>
      			<Image style={styles.singleClassRankingChild} resizeMode="cover" source="Line 4.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	parentFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	textClr: {
    		color: "#000",
    		textAlign: "center"
  	},
  	textTypo: {
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 15
  	},
  	text: {
    		textAlign: "center",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 15
  	},
  	keithWinstein: {
    		fontSize: 13,
    		fontFamily: "Inter-Regular",
    		textAlign: "center"
  	},
  	frameGroup: {
    		justifyContent: "center"
  	},
  	text1: {
    		color: "#249830",
    		textAlign: "center"
  	},
  	wrapper: {
    		borderRadius: 33,
    		backgroundColor: "#fff",
    		borderStyle: "solid",
    		borderColor: "#aeb1ba",
    		borderWidth: 1,
    		alignItems: "flex-end",
    		paddingHorizontal: 8,
    		paddingVertical: 11,
    		overflow: "hidden",
    		justifyContent: "center"
  	},
  	frameParent: {
    		height: 48,
    		justifyContent: "space-between",
    		alignSelf: "stretch"
  	},
  	singleClassRankingChild: {
    		maxWidth: "100%",
    		height: 2,
    		marginTop: 5,
    		overflow: "hidden",
    		alignSelf: "stretch",
    		width: "100%"
  	},
  	singleClassRanking: {
    		flex: 1,
    		height: 52,
    		width: "100%"
  	}
});

export default SingleClassRanking;
