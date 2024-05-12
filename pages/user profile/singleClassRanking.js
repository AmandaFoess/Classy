import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";


function SingleClassRanking({ course, professorName, quarterYearOffered, rank }) {

	return (
	  <View style={[styles.singleClassRanking, { borderBottomWidth: 1, borderBottomColor: '#D3D3D3', paddingRight: 5, paddingLeft: 5 }]}>
		<View style={[styles.frameParent, styles.parentFlexBox]}>
		  <View style={styles.frameGroup}>
			<View style={styles.parentFlexBox}>
			  <Text style={[styles.text, styles.textClr]} />
			  <Text style={[styles.text, styles.textClr]}>{course}</Text>
			</View>
			<Text style={[styles.keithWinstein, styles.textClr]}>{professorName}</Text>
			<Text style={[styles.keithWinstein, styles.textClr]}>{quarterYearOffered}</Text>
		  </View>
		  <View style={styles.rankWrapper}>
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
	rankWrapper: {
	  width: 40, // Adjust as needed
	  height: 40, // Adjust as needed
	  borderRadius: 20, // Half of the width and height to make a perfect circle
	  backgroundColor: "#fff",
	  borderStyle: "transparent",
	  borderColor: "#aeb1ba",
	  borderWidth: 1,
	  alignItems: "center",
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
	  

// function SingleClassRanking({course, professorName, quarterYearOffered, rank}) {
  	
//   	return (
//     		<View style={[styles.singleClassRanking, { borderBottomWidth: 1, borderBottomColor: '#D3D3D3' }]}>
//       			<View style={[styles.frameParent, styles.parentFlexBox]}>
//         				<View style={styles.frameGroup}>
//           					<View style={styles.parentFlexBox}>
//             						<Text style={[styles.text, styles.textClr]} />
//             						<Text style={[styles.text, styles.textClr]}>{course}</Text>
//           					</View>
//           					<Text style={[styles.keithWinstein, styles.textClr]}>{professorName}</Text>
//           					<Text style={[styles.keithWinstein, styles.textClr]}>{quarterYearOffered}</Text>
//         				</View>
//         				<View style={styles.wrapper}>
//           					<Text style={[styles.text1, styles.textTypo]}>{rank}</Text>
//         				</View>
//       			</View>
//       			<Image style={styles.singleClassRankingChild} resizeMode="cover" source="Line 4.png" />
//     		</View>);
// };

// const styles = StyleSheet.create({
//   	parentFlexBox: {
//     		alignItems: "center",
//     		flexDirection: "row"
//   	},
//   	textClr: {
//     		color: "#000",
//     		textAlign: "center"
//   	},
//   	textTypo: {
//     		fontFamily: "Inter-Bold",
//     		fontWeight: "700",
//     		fontSize: 15
//   	},
//   	text: {
//     		textAlign: "center",
//     		fontFamily: "Inter-Bold",
//     		fontWeight: "700",
//     		fontSize: 15
//   	},
//   	keithWinstein: {
//     		fontSize: 13,
//     		fontFamily: "Inter-Regular",
//     		textAlign: "center"
//   	},
//   	frameGroup: {
//     		justifyContent: "center"
//   	},
//   	text1: {
//     		color: "#249830",
//     		textAlign: "center"
//   	},
//   	wrapper: {
//     		borderRadius: 33,
//     		backgroundColor: "#fff",
//     		borderStyle: "solid",
//     		borderColor: "#aeb1ba",
//     		borderWidth: 1,
//     		alignItems: "flex-end",
//     		paddingHorizontal: 8,
//     		paddingVertical: 11,
//     		overflow: "hidden",
//     		justifyContent: "center"
//   	},
//   	frameParent: {
//     		height: 48,
//     		justifyContent: "space-between",
//     		alignSelf: "stretch"
//   	},
//   	singleClassRankingChild: {
//     		maxWidth: "100%",
//     		height: 2,
//     		marginTop: 5,
//     		overflow: "hidden",
//     		alignSelf: "stretch",
//     		width: "100%"
//   	},
//   	singleClassRanking: {
//     		flex: 1,
//     		height: 52,
//     		width: "100%"
//   	}
// });

export default SingleClassRanking;
