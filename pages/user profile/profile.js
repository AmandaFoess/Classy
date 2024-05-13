import * as React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import SingleClassRanking from "./singleMyClassRanking";
import SingleUnsavedClass from "./singleRecsForYouClass"; 
import SingleSavedClass from "./singleWantToTakeClass";

const fakeDataMyClasses = [
	{ course: "Mathematics", professorName: "Dr. Smith", quarterYearOffered: "Fall 2023", rank: 8.5},
	{ course: "Biology", professorName: "Prof. Johnson", quarterYearOffered: "Spring 2024", rank: 9.2},
	{ course: "History", professorName: "Dr. Lee", quarterYearOffered: "Winter 2024", rank: 7.8},
	{ course: "Chemistry", professorName: "Prof. Garcia", quarterYearOffered: "Summer 2024", rank: 8.9},
	{ course: "Literature", professorName: "Dr. Patel", quarterYearOffered: "Fall 2024", rank: 9.6},
	{ course: "Physics", professorName: "Prof. Thompson", quarterYearOffered: "Spring 2023", rank: 8.0},
	{ course: "Economics", professorName: "Dr. Brown", quarterYearOffered: "Winter 2023", rank: 7.5},
	{ course: "Computer Sci.", professorName: "Prof. Kim", quarterYearOffered: "Summer 2023", rank: 8.7},
	{ course: "Psychology", professorName: "Dr. White", quarterYearOffered: "Fall 2022", rank: 9.1},
	{ course: "Sociology", professorName: "Prof. Davis", quarterYearOffered: "Spring 2022", rank: 7.2}
  ];

  const fakeDataWantToTake = [
    { course: "Algebra", professorName: "Dr. Johnson", quarterYearOffered: "Fall 2023" },
    { course: "Ecology", professorName: "Prof. Garcia", quarterYearOffered: "Spring 2024" },
    { course: "World History", professorName: "Dr. Lee", quarterYearOffered: "Winter 2024" },
    { course: "Organic Chemistry", professorName: "Prof. Patel", quarterYearOffered: "Summer 2024" },
    { course: "Literary Analysis", professorName: "Dr. Thompson", quarterYearOffered: "Fall 2024" },
    { course: "Astrophysics", professorName: "Prof. Brown", quarterYearOffered: "Spring 2023" },
    { course: "Macroeconomics", professorName: "Dr. Kim", quarterYearOffered: "Winter 2023" },
    { course: "Computer Graphics", professorName: "Prof. White", quarterYearOffered: "Summer 2023" },
    { course: "Cognitive Psychology", professorName: "Dr. White", quarterYearOffered: "Fall 2022" },
    { course: "Cultural Studies", professorName: "Prof. Davis", quarterYearOffered: "Spring 2022" }
];

  const fakeDataRecs = [
    { course: "Artificial Intelligence", professorName: "Dr. Johnson", recommender: "@emilyjane" },
    { course: "Genetics", professorName: "Prof. Garcia", recommender: "@davidsmith" },
    { course: "Political Science", professorName: "Dr. Lee", recommender: "@peterparker" },
    { course: "Organic Chemistry", professorName: "Prof. Patel", recommender: "@janesmith" },
    { course: "Literary Theory", professorName: "Dr. Thompson", recommender: "@caeleywoo" },
    { course: "Quantum Mechanics", professorName: "Prof. Brown", recommender: "@emilyjane" },
    { course: "Microeconomics", professorName: "Dr. Kim", recommender: "@johndoe" },
    { course: "Database Systems", professorName: "Prof. White", recommender: "@peterparker" },
    { course: "Abnormal Psychology", professorName: "Dr. Davis", recommender: "@janesmith" },
    { course: "Cultural Anthropology", professorName: "Prof. Smith", recommender: "@davidsmith" }
];

// Convert the dataSet objects to an array
const fakeDataMyClassesArray = Object.values(fakeDataMyClasses);

// Sort the fakeDataArray by rank in descending order
fakeDataMyClassesArray.sort((a, b) => b.rank - a.rank);

// Convert the dataSet objects to an array
const fakeDataWantToTakeArray = Object.values(fakeDataWantToTake);

// Convert the dataSet objects to an array
const fakeDataRecsArray = Object.values(fakeDataRecs);

function UserProfile() {
	const [activeTab, setActiveTab] = React.useState('myClasses'); // State to track active tab

    // Filter data based on active tab
	let filteredData;

	switch (activeTab) {
		case 'myClasses':
			filteredData = fakeDataMyClassesArray;
			break;
		case 'wantToTake':
			filteredData = fakeDataWantToTakeArray;
			break;
		case 'recs':
			filteredData = fakeDataRecsArray;
			break;
		default:
			filteredData = [];
			break;
	}
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
						<View style={styles.newListNavBar}>
							<TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('myClasses')}>
								<Text style={[styles.tabText, activeTab === 'myClasses' && styles.activeTab]}>My Classes</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('wantToTake')}>
								<Text style={[styles.tabText, activeTab === 'wantToTake' && styles.activeTab]}>Want to Take</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('recs')}>
								<Text style={[styles.tabText, activeTab === 'recs' && styles.activeTab]}>Recs For You</Text>
							</TouchableOpacity>
						</View>
      			</View>
				<FlatList
        			data={filteredData}
        			keyExtractor={(item) => item.class}
					renderItem={({ item }) => {
						// Determine which component to render based on active tab
						if (activeTab === 'myClasses') {
							return <SingleClassRanking course={item.course} quarterYearOffered={item.quarterYearOffered} rank={item.rank} professorName={item.professorName} />;
						} else if (activeTab === 'recs') {
							return <SingleUnsavedClass course={item.course} professorName={item.professorName} recommender = {item.recommender} />;
						} else {
							return <SingleSavedClass course={item.course} quarterYearOffered={item.quarterYearOffered} professorName={item.professorName} />;

						}						
					}}
					ListEmptyComponent={<Text>No classes found</Text>}
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
  	profile: {
    		width: 384,
    		height: 360,
    		paddingTop: 5,
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
  	completedOverallRankingPag: {
    		height: 857,
    		justifyContent: "flex-end",
    		width: "100%",
    		flex: 1,
    		backgroundColor: "#fff"
  	},
    newListNavBar: {
        flexDirection: 'row', // Align tabs horizontally
        justifyContent: 'space-between', // Evenly space tabs
        paddingHorizontal: 20, // Add padding to the sides
        borderBottomWidth: 1, // Add a bottom border
        borderBottomColor: '#ccc', // Border color
    },
    tabItem: {
        flex: 1, // Each tab takes up equal space
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10, // Add padding top and bottom
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'lightgrey',
    },
    activeTab: {
        color: 'black', // Change color as per your requirement
    },
});

export default UserProfile;

