import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { db } from "../../firebase";
import CourseHeader from "./Header";
import { collection, getDocs } from "firebase/firestore";

const DataSpaceBlock = ({ course }) => (
  <View style={[styles.data, styles.dataSpaceBlock]}>
    <View style={[styles.twoColumnResize, styles.twoSpaceBlock1]}>
      <View style={styles.ugReqs}>
        <Text style={[styles.reqs, styles.reqsTypo]}>{course.classCode}</Text>
      </View>
    </View>
    <View style={[styles.twoColumnResize1, styles.twoSpaceBlock]}>
      <View style={styles.ugReqs1}>
        <Text style={[styles.reqs1, styles.reqs1Typo]}>{course.className}</Text>
      </View>
    </View>
    <View style={[styles.twoColumnResize2, styles.twoSpaceBlock]}>
      <View style={styles.ugReqs}>
        <Text style={[styles.reqs1, styles.reqs1Typo]}>
          Units: {course.classUnits}
        </Text>
      </View>
      <View style={styles.ugReqs}>
        <Text style={[styles.reqs1, styles.reqs1Typo]}>
          UG Reqs: {course.classReqs}
        </Text>
      </View>
    </View>
  </View>
);

const CourseHomePage = ({ navigation, classID }) => {
  const [course, setCourse] = useState(null);
  const [courseMap, setClassMap] = useState(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Classes"));
        const courseMap = new Map();
        querySnapshot.forEach((doc) => {
          courseMap.set(doc.id, doc.data());
        });
        setClassMap(courseMap);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching class data: ", error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  classID = "ClassID1"; // CHANGE TO BE DYNAMIC ONCE USERS IS PROPERLY SET UP
  

  useEffect(() => {
    if (courseMap.has(classID)) {
      setCourse(courseMap.get(classID));
    }
  }, [courseMap, classID]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!course) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <View style={styles.finalCourseHomepage}>
          <CourseHeader navigation={navigation} course={classID} />

          <DataSpaceBlock course={course} />

          <View style={[styles.timeOfferedTableWrapper, styles.dataSpaceBlock]}>
            <View style={styles.ugReqs1}>
              <View style={styles.table}>
                <View style={styles.row}>
                  <View style={[styles.cell, styles.cellBorder]}>
                    <View style={styles.content}>
                      <Text style={[styles.text, styles.textFlexBox]} />
                    </View>
                  </View>
                  <View style={[styles.cell1, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text, styles.textFlexBox]}>
                        Autumn
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell1, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text, styles.textFlexBox]}>
                        Winter
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell1, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text, styles.textFlexBox]}>
                        Spring
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={[styles.cell4, styles.cellBorder]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        Offered?
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell5, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        {course.offeredArray[0].offeredFall}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell5, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        {course.offeredArray[1].offeredWinter}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell5, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        {course.offeredArray[2].offeredSpring}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={[styles.cell4, styles.cellBorder]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        Teacher
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell5, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        {course.offeredArray[0].teacher}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell5, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        {course.offeredArray[1].teacher}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.cell5, styles.cellBorder1]}>
                    <View style={styles.content}>
                      <Text style={[styles.text4, styles.textFlexBox]}>
                        {course.offeredArray[2].teacher}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dataSpaceBlock}>
            <Text style={[styles.description, styles.nameFlexBox]}>
              {course.classDescription}
            </Text>
          </View>
          <View style={[styles.classDetails, styles.dataSpaceBlock]}>
            <Text style={[styles.name, styles.nameFlexBox]}>Reviews</Text>
          </View>
          <View style={[styles.instanceParent, styles.dataSpaceBlock]}>
            <View style={styles.instanceGroup}>
              <View
                style={[
                  styles.piperflemingWrapper,
                  styles.piperflemingSpaceBlock,
                ]}
              >
                <View style={styles.piperfleming}>
                  <Text style={[styles.piperfleming1, styles.piperflemingTypo]}>
                    @piperfleming
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.piperflemingContainer,
                  styles.piperflemingSpaceBlock,
                ]}
              >
                <View style={styles.piperfleming2}>
                  <Text
                    style={[styles.piperfleming3, styles.piperflemingTypo]}
                  >{`Parlante, N, Fall 2022`}</Text>
                </View>
              </View>
              <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.text12, styles.reqsTypo]}>9.8</Text>
                </View>
              </View>
            </View>
            <View style={[styles.courseDescription1, styles.twoSpaceBlock]}>
              <Text
                style={[styles.reqs1, styles.reqs1Typo]}
              >{`I loved this class! It was a great intro to both the CS department at Stanford and to CS in general.`}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButtonSpaceBlock: {
    paddingVertical: 13,
    overflow: "hidden",
  },
  classDetailsSpaceBlock: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    position: "absolute",
  },
  reqs1Typo: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  dataSpaceBlock: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  twoSpaceBlock1: {
    padding: 20,
    overflow: "hidden",
  },
  reqsTypo: {
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    textAlign: "center",
  },
  twoSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  cellBorder: {
    width: 79,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#b9b9b9",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "left",
    lineHeight: 16,
    fontSize: 12,
    color: "#000",
    flex: 1,
  },
  cellBorder1: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#b9b9b9",
    borderStyle: "solid",
    alignSelf: "stretch",
    flex: 1,
  },
  nameFlexBox: {
    height: 285,
    textAlign: "center",
    fontFamily: "Inter-Regular",
    alignSelf: "stretch",
  },
  piperflemingSpaceBlock: {
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  piperflemingTypo: {
    top: "0%",
    position: "absolute",
    fontSize: 15,
    textAlign: "center",
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 14,
    height: 30,
  },
  backButton: {
    width: 50,
    height: 55,
    paddingHorizontal: 18,
    flexDirection: "row",
  },
  recommend: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#000",
    textAlign: "center",
  },
  buttondefault: {
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#aeb1ba",
    borderWidth: 1,
    width: "auto",
    height: "auto",
    padding: 10,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
  },
  addAndSaveonSavedPage3: {
    width: 80,
    height: 29,
  },
  backButtonParent: {
    backgroundColor: "#ggg",
    flex: 1,
    width: "100%",
    height: "auto",
    padding: 10,
  },
  reqs: {
    fontSize: 36,
    color: "#8d7272",
    alignSelf: "stretch",
    flex: 1,
  },
  ugReqs: {
    alignSelf: "stretch",
    flex: 1,
  },
  twoColumnResize: {
    minHeight: 80,
    backgroundColor: "rgba(255, 255, 255, 0)",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  reqs1: {
    fontSize: 15,
    alignSelf: "stretch",
    flex: 1,
  },
  ugReqs1: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  twoColumnResize1: {
    minHeight: 60,
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: 10,
    overflow: "hidden",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  twoColumnResize2: {
    height: 52,
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: 10,
    overflow: "hidden",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  data: {
    borderColor: "#8d7272",
    borderWidth: 3,
    height: 239,
    padding: 20,
    overflow: "hidden",
    borderStyle: "solid",
    marginTop: 21,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cell: {
    backgroundColor: "rgba(0, 0, 0, 0.06)",
  },
  cell1: {
    backgroundColor: "rgba(0, 0, 0, 0.06)",
  },
  row: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text4: {
    fontFamily: "Inter-Regular",
    textAlign: "left",
    lineHeight: 16,
    fontSize: 12,
  },
  cell4: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  cell5: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    minWidth: 80,
  },
  table: {
    borderRadius: 4,
    borderColor: "#b9b9b9",
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
  },
  timeOfferedTableWrapper: {
    height: 151,
    paddingHorizontal: 6,
    paddingVertical: 14,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  description: {
    fontSize: 15,
    color: "#000",
    height: 285,
  },
  name: {
    fontSize: 24,
    color: "#8d7272",
  },
  classDetails: {
    height: 48,
    padding: 10,
    alignItems: "center",
  },
  piperfleming1: {
    left: "1.87%",
  },
  piperfleming: {
    width: 107,
    flex: 1,
  },
  piperflemingWrapper: {
    width: 144,
  },
  piperfleming3: {
    left: "13.08%",
  },
  piperfleming2: {
    height: 19,
    width: 107,
  },
  piperflemingContainer: {
    width: 113,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text12: {
    color: "#249830",
    fontSize: 15,
  },
  wrapper: {
    borderRadius: 33,
    width: 50,
    height: 50,
    paddingHorizontal: 2,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: "#aeb1ba",
    justifyContent: "center",
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  frameWrapper: {
    width: 75,
    height: 75,
    paddingHorizontal: 20,
    paddingVertical: 13,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  instanceGroup: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  courseDescription1: {
    height: 215,
    alignItems: "center",
  },
  instanceParent: {
    height: 200,
    paddingHorizontal: 0,
    paddingVertical: 49,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  finalCourseHomepage: {
    width: "100%",
    paddingHorizontal: 25,
    //paddingTop: 27,
    paddingBottom: 44,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  addAndSaveFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    position: "absolute",
    marginTop: -14.5,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
});

export default CourseHomePage;
