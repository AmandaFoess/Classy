import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import SingleClassRanking from "./singleClassRanking";
import { FlatList } from "react-native";

const fakeData = [
	{ course: "Mathematics", professorName: "Dr. Smith", quarterYearOffered: "Fall 2023", rank: 8.5 },
	{ course: "Biology", professorName: "Prof. Johnson", quarterYearOffered: "Spring 2024", rank: 9.2 },
	{ course: "History", professorName: "Dr. Lee", quarterYearOffered: "Winter 2024", rank: 7.8 },
	{ course: "Chemistry", professorName: "Prof. Garcia", quarterYearOffered: "Summer 2024", rank: 8.9 },
	{ course: "Literature", professorName: "Dr. Patel", quarterYearOffered: "Fall 2024", rank: 9.6 },
	{ course: "Physics", professorName: "Prof. Thompson", quarterYearOffered: "Spring 2023", rank: 8.0 },
	{ course: "Economics", professorName: "Dr. Brown", quarterYearOffered: "Winter 2023", rank: 7.5 },
	{ course: "Computer Sci.", professorName: "Prof. Kim", quarterYearOffered: "Summer 2023", rank: 8.7 },
	{ course: "Psychology", professorName: "Dr. White", quarterYearOffered: "Fall 2022", rank: 9.1 },
	{ course: "Sociology", professorName: "Prof. Davis", quarterYearOffered: "Spring 2022", rank: 7.2 }
  ];
  // Convert the dataSet object to an array
const fakeDataArray = Object.values(fakeData);

// Sort the fakeDataArray by rank in descending order
fakeDataArray.sort((a, b) => b.rank - a.rank);

function UserProfile() {
  	
  	return (
    		<View style={styles.completedOverallRankingPag}>
      			<View style={styles.profile}>
        				<View style={styles.frameParent}>
          					<View style={styles.evyShenParent}>
            						<Text style={[styles.evyShen, styles.textTypo1]}>Evy Shen</Text>
            						<View style={[styles.esWrapper, styles.wrapperBorder]}>
              							<Text style={styles.es}>ES</Text>
            						</View>
            						<Text style={[styles.evyshen, styles.textTypo1]}>@evyshen</Text>
            						<Text style={[styles.sophomoreSymbolicSystems, styles.button1Typo]}>Sophomore, Symbolic Systems</Text>
            						<View style={styles.buttonWrapper}>
              							<View style={[styles.button, styles.buttonFlexBox]}>
                								<Text style={[styles.button1, styles.button1Typo]}>Edit profile</Text>
              							</View>
            						</View>
          					</View>
          					<View style={styles.frameGroup}>
            						<View style={styles.parent}>
              							<Text style={[styles.text, styles.textTypo1]}>5</Text>
              							<Text style={[styles.friends, styles.button1Typo]}>Friends</Text>
            						</View>
            						<View style={styles.group}>
              							<Text style={[styles.text, styles.textTypo1]}>32</Text>
              							<Text style={[styles.friends, styles.button1Typo]}>Classes Ranked</Text>
            						</View>
          					</View>
        				</View>
        				<View style={[styles.newListNavBar, styles.navSpaceBlock]}>
          					<View style={[styles.myClassesSortMetricNavBa, styles.classesSpaceBlock]}>
            						<View style={styles.classesLayout}>
              							<Text style={[styles.myClasses1, styles.classesTypo]}>My Classes</Text>
            						</View>
            						<View style={[styles.myClasses2, styles.classesLayout]}>
              							<Text style={[styles.myClasses3, styles.classesTypo]}>Want to Take</Text>
            						</View>
            						<View style={[styles.myClasses2, styles.classesLayout]}>
              							<Text style={[styles.myClasses5, styles.classesTypo]}>Recs For You</Text>
            						</View>
          					</View>
          					<View style={[styles.newListNavBarChild, styles.newChildPosition]} />
          					<View style={[styles.newListNavBarItem, styles.newChildPosition]} />
        				</View>
      			</View>
				<FlatList
        			data={fakeDataArray}
        			keyExtractor={(item) => item.class}
        			renderItem={({ item }) => (
          				<SingleClassRanking course={item.course} quarterYearOffered={item.quarterYearOffered} rank={item.rank} professorName={item.professorName}/>
        			)}
        			ListEmptyComponent={<Text>No students found</Text>}
      			/>
    		</View>);
};

const styles = StyleSheet.create({
  	textTypo1: {
    		textAlign: "center",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		color: "#000"
  	},
  	wrapperBorder: {
    		borderWidth: 1,
    		borderColor: "#aeb1ba",
    		borderStyle: "solid"
  	},
  	button1Typo: {
    		fontFamily: "Inter-Regular",
    		textAlign: "center"
  	},
  	buttonFlexBox: {
    		padding: 10,
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	navSpaceBlock: {
    		marginTop: 7,
    		alignSelf: "stretch"
  	},
  	classesSpaceBlock: {
    		paddingVertical: 5,
    		paddingHorizontal: 10,
    		flexDirection: "row",
    		backgroundColor: "#fff"
  	},
  	classesTypo: {
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		fontSize: 12,
    		top: "0%",
    		position: "absolute",
    		textAlign: "center"
  	},
  	classesLayout: {
    		height: 15,
    		flex: 1
  	},
  	newChildPosition: {
    		borderTopWidth: 1,
    		left: "-0.13%",
    		right: "-0.13%",
    		width: "100.26%",
    		position: "absolute",
    		borderColor: "#aeb1ba",
    		borderStyle: "solid"
  	},
  	textTypo: {
    		fontSize: 15,
    		textAlign: "center",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	singleLayout: {
    		height: 52,
    		alignSelf: "stretch"
  	},
  	profileTypo: {
    		fontSize: 10,
    		fontFamily: "Inter-Medium",
    		fontWeight: "500",
    		textAlign: "center"
  	},
  	navItemFlexBox: {
    		paddingVertical: 6,
    		paddingHorizontal: 0,
    		justifyContent: "center",
    		alignItems: "center",
    		flex: 1
  	},
  	evyShen: {
    		fontSize: 18
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
  	},
  	esWrapper: {
    		borderRadius: 50,
    		backgroundColor: "#f4f5f8",
    		width: 100,
    		height: 100,
    		marginTop: 10,
    		overflow: "hidden"
  	},
  	evyshen: {
    		fontSize: 14,
    		marginTop: 10
  	},
  	sophomoreSymbolicSystems: {
    		fontSize: 14,
    		color: "#aeb1ba",
    		marginTop: 10
  	},
  	button1: {
    		fontSize: 14,
    		color: "#000"
  	},
  	button: {
    		borderRadius: 30,
    		flexDirection: "row",
    		borderWidth: 1,
    		borderColor: "#aeb1ba",
    		borderStyle: "solid",
    		justifyContent: "center"
  	},
  	buttonWrapper: {
    		flexDirection: "row",
    		marginTop: 10,
    		justifyContent: "center",
    		alignSelf: "stretch",
    		alignItems: "center",
    		flex: 1
  	},
  	evyShenParent: {
    		height: 233,
    		justifyContent: "center",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	text: {
    		fontSize: 14
  	},
  	friends: {
    		fontSize: 14,
    		color: "#aeb1ba"
  	},
  	parent: {
    		alignItems: "center"
  	},
  	group: {
    		width: 99,
    		marginLeft: 103,
    		alignItems: "center"
  	},
  	frameGroup: {
    		marginTop: 15,
    		flexDirection: "row",
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	frameParent: {
    		width: 355,
    		alignItems: "center"
  	},
  	myClasses1: {
    		left: "21.12%",
    		color: "#000"
  	},
  	myClasses3: {
    		left: "16.51%",
    		color: "#aeb1ba"
  	},
  	myClasses2: {
    		marginLeft: 10
  	},
  	myClasses5: {
    		left: "17.43%",
    		color: "#aeb1ba"
  	},
  	myClassesSortMetricNavBa: {
    		height: "89.26%",
    		bottom: "10.74%",
    		left: "0%",
    		right: "0%",
    		top: "0%",
    		paddingVertical: 5,
    		position: "absolute",
    		width: "100%"
  	},
  	newListNavBarChild: {
    		top: "-1.85%",
    		bottom: "98.15%",
    		height: "3.7%",
    		left: "-0.13%",
    		right: "-0.13%",
    		width: "100.26%"
  	},
  	newListNavBarItem: {
    		top: "98.15%",
    		bottom: "-1.85%",
    		height: "3.7%",
    		left: "-0.13%",
    		right: "-0.13%",
    		width: "100.26%"
  	},
  	newListNavBar: {
    		height: 27
  	},
  	myClasses7: {
    		left: "10.92%",
    		color: "#000"
  	},
  	myClasses9: {
    		left: "27.58%",
    		color: "#aeb1ba"
  	},
  	myClasses11: {
    		left: "39.63%",
    		color: "#aeb1ba"
  	},
  	myClassesSortMetricNavBa1: {
    		marginTop: 7,
    		alignSelf: "stretch"
  	},
  	profile: {
    		width: 384,
    		height: 360,
    		paddingTop: 10,
    		alignItems: "center",
    		backgroundColor: "#fff"
  	},
  	text2: {
    		color: "#000"
  	},
  	textParent: {
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	keithWinstein: {
    		fontSize: 13,
    		color: "#000"
  	},
  	frameView: {
    		justifyContent: "center"
  	},
  	text3: {
    		color: "#249830"
  	},
  	wrapper: {
    		borderRadius: 33,
    		alignItems: "flex-end",
    		paddingHorizontal: 8,
    		paddingVertical: 11,
    		overflow: "hidden",
    		justifyContent: "center",
    		backgroundColor: "#fff"
  	},
  	frameContainer: {
    		justifyContent: "space-between",
    		height: 48,
    		flexDirection: "row",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	singleClassRankingChild: {
    		maxWidth: "100%",
    		height: 2,
    		marginTop: 5,
    		overflow: "hidden",
    		alignSelf: "stretch",
    		width: "100%"
  	},
  	singleClassRanking1: {
    		marginTop: 10
  	},
  	scrollableClassList: {
    		flex: 1,
    		backgroundColor: "#fff"
  	},
  	feedIcon: {
    		width: 24,
    		height: 24,
    		overflow: "hidden"
  	},
  	profile1: {
    		color: "#000"
  	},
  	navItem1: {
    		marginLeft: 10
  	},
  	profile3: {
    		color: "#9b2727"
  	},
  	navigationBar: {
    		bottom: 0,
    		paddingVertical: 0,
    		height: 48,
    		paddingHorizontal: 10,
    		left: "0%",
    		right: "0%",
    		flexDirection: "row",
    		position: "absolute",
    		width: "100%",
    		backgroundColor: "#fff"
  	},
  	updatedNavigationBarChild: {
    		height: "2.08%",
    		top: "-1.04%",
    		bottom: "98.96%"
  	},
  	completedOverallRankingPag: {
    		height: 857,
    		justifyContent: "flex-end",
    		width: "100%",
    		flex: 1,
    		backgroundColor: "#fff"
  	}
});

export default UserProfile;

