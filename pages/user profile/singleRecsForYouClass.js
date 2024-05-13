import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Add, Bookmark } from "../../assets/icons";

function SingleUnsavedClass({ course, professorName, recommender }) {
    return (
        <View style={[styles.singleUnsavedClass, styles.singleFlexBox, { borderBottomWidth: 1, borderBottomColor: '#D3D3D3', paddingRight: 5, paddingLeft: 10 }]}>
            <View style={styles.singleFlexBox}>
                <View style={styles.singleClassRanking}>
                    <View style={[styles.singleClassRankingInner, styles.cs103WrapperFlexBox]}>
                        <View style={styles.frameParent}>
                            <View style={styles.cs103WrapperFlexBox}>
                                <Text style={[styles.cs103, styles.cs103FlexBox]}>{course}</Text>
                            </View>
                            <Text style={[styles.keithWinstein, styles.professorName]}>{professorName}</Text>
                            <Text style={[styles.keithWinstein, styles.recommender]}>{recommender}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.addAndSave}>
                    <Add width={20} height={20} />
                    <Bookmark width={20} height={20} />
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    singleFlexBox: {
        flexDirection: "row",
        flex: 1
    },
    cs103WrapperFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    cs103FlexBox: {
        textAlign: "center",
        color: "#000"
    },
    cs103: {
        fontSize: 15,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
    },
    keithWinstein: {
        fontSize: 13,
        fontFamily: "Inter-Regular",
    },
    professorName: {
        textAlign: "left",
        alignSelf: "flex-start",
        marginRight: "auto"
    },
    recommender: {
        textAlign: "left",
        alignSelf: "flex-start",
        marginRight: "auto"
    },
    frameParent: {
        justifyContent: "center",
        flex: 1
    },
    singleClassRankingInner: {
        height: 48,
        justifyContent: "space-between",
        alignSelf: "stretch"
    },
    singleClassRankingChild: {
        maxWidth: "100%",
        overflow: "hidden",
        height: 2,
        marginTop: 5,
        alignSelf: "stretch",
        width: "100%"
    },
    singleClassRanking: {
        height: 52,
        zIndex: 0,
        flex: 1
    },
    addAndSave: {
        position: "absolute",
        right: 0,
        bottom: 6,
        flexDirection: "row",
        alignItems: "center",
        zIndex: 1
    },
    singleUnsavedClass: {
        height: 54,
        width: "100%"
    }
});

export default SingleUnsavedClass;

// import * as React from "react";
// import { Text, StyleSheet, View, Image } from "react-native";
// import { Add, Bookmark } from "../../assets/icons";

// function SingleUnsavedClass({ course, professorName, recommender }) {
//     return (
//         <View style={[styles.singleUnsavedClass, styles.singleFlexBox]}>
//             <View style={styles.singleFlexBox}>
//                 <View style={styles.singleClassRanking}>
//                     <View style={[styles.singleClassRankingInner, styles.cs103WrapperFlexBox]}>
//                         <View style={styles.frameParent}>
//                             <View style={styles.cs103WrapperFlexBox}>
//                                 <Text style={[styles.cs103, styles.cs103FlexBox]}>{course}</Text>
//                             </View>
//                             <Text style={[styles.keithWinstein, styles.cs103FlexBox]}>{professorName}</Text>
//                             <Text style={[styles.keithWinstein, styles.cs103FlexBox]}>{recommender}</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.addAndSave}>
//                     <Add width={20} height={20} />
//                     <Bookmark width={20} height={20} />
//                 </View>
//             </View>
//         </View>);
// };

// const styles = StyleSheet.create({
//     singleFlexBox: {
//         flexDirection: "row",
//         flex: 1
//     },
//     cs103WrapperFlexBox: {
//         alignItems: "center",
//         flexDirection: "row"
//     },
//     cs103FlexBox: {
//         textAlign: "center",
//         color: "#000"
//     },
//     cs103: {
//         fontSize: 15,
//         fontWeight: "700",
//         fontFamily: "Inter-Bold"
//     },
//     keithWinstein: {
//         fontSize: 13,
//         fontFamily: "Inter-Regular"
//     },
//     frameParent: {
//         justifyContent: "center",
//         flex: 1
//     },
//     singleClassRankingInner: {
//         height: 48,
//         justifyContent: "space-between",
//         alignSelf: "stretch"
//     },
//     singleClassRankingChild: {
//         maxWidth: "100%",
//         overflow: "hidden",
//         height: 2,
//         marginTop: 5,
//         alignSelf: "stretch",
//         width: "100%"
//     },
//     singleClassRanking: {
//         height: 52,
//         zIndex: 0,
//         flex: 1
//     },
//     addAndSave: {
//         position: "absolute",
//         right: 0,
//         bottom: 6,
//         flexDirection: "row",
//         alignItems: "center",
//         zIndex: 1
//     },
//     singleUnsavedClass: {
//         height: 54,
//         width: "100%"
//     }
// });

// export default SingleUnsavedClass;