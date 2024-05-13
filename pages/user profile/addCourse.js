import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable, ScrollView} from "react-native";

const addCourse = () => {
  	
  	return (
        <ScrollView contentContainerStyle={styles.container}>
            
    		<View style={styles.rankingClasses}>
      			<View style={styles.classBeingRanked}>
        				<Text style={[styles.cs103MathematicalContainer, styles.textFlexBox]}>
          					<Text style={styles.textTypo}>{`CS 103
`}</Text>
                    <Text style={styles.mathematicalFoundationsOf}>Mathematical Foundations of Computing</Text>
                </Text>
                <Image style={styles.phxIcon} resizeMode="cover" source="ph:x.png" />
            </View>
            <View style={[styles.frameParent, styles.addNotesLayout]}>
                <View style={styles.howHardWasItWrapper}>
                    <Text style={[styles.howHardWas, styles.textTypo]}>How hard was it?</Text>
                </View>
                <View style={styles.rankingScale}>
                    <View style={styles.wrapper}>
                        <Text style={[styles.text, styles.textTypo]}>1</Text>
                    </View>
                    <View style={[styles.container, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>2</Text>
                    </View>
                    <View style={[styles.frame, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>3</Text>
                    </View>
                    <View style={[styles.frameView, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>4</Text>
                    </View>
                    <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>5</Text>
                    </View>
                    <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>6</Text>
                    </View>
                    <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>7</Text>
                    </View>
                    <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>8</Text>
                    </View>
                    <View style={[styles.wrapper5, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>9</Text>
                    </View>
                    <View style={[styles.wrapper6, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>10</Text>
                    </View>
                </View>
                <View style={styles.howHardWasItWrapper}>
                    <Text style={[styles.howHardWas, styles.textTypo]}>How fun was it?</Text>
                </View>
                <View style={styles.rankingScale}>
                    <View style={styles.wrapper}>
                        <Text style={[styles.text, styles.textTypo]}>1</Text>
                    </View>
                    <View style={[styles.container, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>2</Text>
                    </View>
                    <View style={[styles.frame, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>3</Text>
                    </View>
                    <View style={[styles.frameView, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>4</Text>
                    </View>
                    <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>5</Text>
                    </View>
                    <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>6</Text>
                    </View>
                    <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>7</Text>
                    </View>
                    <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>8</Text>
                    </View>
                    <View style={[styles.wrapper5, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>9</Text>
                    </View>
                    <View style={[styles.wrapper6, styles.frameWrapperLayout]}>
                        <Text style={[styles.text, styles.textTypo]}>10</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.addNotes, styles.addNotesLayout]}>
                <Text style={[styles.notes, styles.textTypo]}>Notes:</Text>
                <View style={styles.commentFooter}>
                    <Image style={styles.profilePicSaller} resizeMode="cover" source="Profile Pic- Saller.png" />
                    <View>
                        <View style={styles.inputwithButton}>
                            <View style={styles.default}>
                                <View style={[styles.field, styles.fieldFlexBox]}>
                                    <Text style={[styles.email, styles.textFlexBox]}>Comment, or tag a friend</Text>
                                </View>
                            </View>
                            <Pressable style={[styles.button, styles.fieldFlexBox]} onPress={()=>{}}>
                                <Text style={[styles.subscribe, styles.textFlexBox]}>Post</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>);
};

const styles = StyleSheet.create({
    textFlexBox: {
        textAlign: "left",
        lineHeight: 24
    },
    addNotesLayout: {
        marginTop: 10,
        width: 403,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#fff"
    },
    textTypo: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600"
    },
    frameWrapperLayout: {
        marginLeft: 10,
        padding: 5,
        height: 26,
        width: 25,
        borderRadius: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    fieldFlexBox: {
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center"
    },
    mathematicalFoundationsOf: {
        fontFamily: "Inter-Regular"
    },
    cs103MathematicalContainer: {
        width: 275,
        color: "#000",
        textAlign: "left",
        lineHeight: 24,
        fontSize: 20
    },
    phxIcon: {
        width: 18,
        height: 19,
        overflow: "hidden"
    },
    classBeingRanked: {
        paddingHorizontal: 26,
        paddingVertical: 15,
        justifyContent: "space-between",
        flexDirection: "row",
        width: 403,
        borderRadius: 15,
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fff"
    },
    howHardWas: {
        textAlign: "left",
        lineHeight: 24,
        color: "#000",
        fontSize: 20
    },
    howHardWasItWrapper: {
        width: 426,
        height: 100,
        paddingHorizontal: 128,
        paddingVertical: 19,
        flexDirection: "row",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fff"
    },
    text: {
        fontSize: 14,
        textAlign: "left",
        lineHeight: 18,
        color: "#000"
    },
    wrapper: {
        backgroundColor: "#dc9e9e",
        padding: 5,
        height: 26,
        width: 25,
        borderRadius: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        backgroundColor: "#dcaa9e"
    },
    frame: {
        backgroundColor: "#dcb89e"
    },
    frameView: {
        backgroundColor: "#dcc39e"
    },
    wrapper1: {
        backgroundColor: "#dcd29e"
    },
    wrapper2: {
        backgroundColor: "#dbdc9e"
    },
    wrapper3: {
        backgroundColor: "#ccdc9e"
    },
    wrapper5: {
        backgroundColor: "#b6dc9e"
    },
    wrapper6: {
        backgroundColor: "#9edcb3"
    },
    rankingScale: {
        height: 56,
        paddingHorizontal: 14,
        paddingVertical: 39,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fff"
    },
    frameParent: {
        justifyContent: "center",
        alignItems: "center",
        height: 320
    },
    notes: {
        width: 147,
        height: 38,
        textAlign: "left",
        lineHeight: 24,
        color: "#000",
        fontSize: 20
    },
    profilePicSaller: {
        width: 37,
        height: 38
    },
    email: {
        fontSize: 16,
        color: "#94a3b8",
        fontFamily: "Inter-Regular",
        textAlign: "left",
        lineHeight: 24
    },
    field: {
        alignSelf: "stretch",
        borderStyle: "solid",
        borderColor: "#cbd5e1",
        borderWidth: 1,
        paddingLeft: 12,
        paddingTop: 8,
        paddingRight: 56,
        paddingBottom: 8,
        backgroundColor: "#fff"
    },
    default: {
        width: 276,
        height: 40
    },
    subscribe: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#fff",
        textAlign: "left",
        lineHeight: 24
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
        backgroundColor: "rgba(255, 255, 255, 0.01)",
        width: 434,
        height: 47,
        paddingHorizontal: 6,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    addNotes: {
        height: 249,
        padding: 15,
        justifyContent: "space-between"
    },
    rankingClasses: {
        flex: 1,
        width: "100%",
        height: 932,
        paddingHorizontal: 2,
        paddingVertical: 295,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fff"
    }
});

export default addCourse;
