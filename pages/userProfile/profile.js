import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import SingleClassRanking from "./singleMyClassRanking";
import SingleUnsavedClass from "./singleRecsForYouClass";
import SingleSavedClass from "./singleWantToTakeClass";
import { auth, db } from "../../firebase";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { BrokenPage } from "../Authentication/brokenPage";
import Spinner from "react-native-loading-spinner-overlay";

const UserProfile = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState("myClasses");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numClasses, setNumClasses] = useState(0);
  const [numFriends, setNumFriends] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const { objectID } = route.params;
  console.log(objectID);

  // Fetch user data
  const fetchProfile = async () => {
    try {
      const docRef = doc(db, "Users", objectID); // Reference to the document
      const docSnap = await getDoc(docRef); // Fetch the document
      if (docSnap.exists()) {
        setUserData(docSnap.data());
        setNumFriends(docSnap.data().friends ? docSnap.data().friends.length : 0);
        setNumClasses(docSnap.data().myClasses ? docSnap.data().myClasses.length : 0);
        updateFilteredData(docSnap.data(), activeTab);
      } else {
        console.log(`No course found with ID: ${objectID}`);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [activeTab]);

  // Update filtered data based on active tab
  const updateFilteredData = (data, tab) => {
    let updatedData;
    switch (tab) {
      case 'myClasses':
        updatedData = data.myClasses ? data.myClasses.sort((a, b) => b.rank - a.rank) : [];
        break;
      case 'wantToTake':
        updatedData = data.classesToTake || [];
        break;
      case 'recs':
        updatedData = data.recsForYou || [];
        break;
      default:
        updatedData = [];
        break;
    }
    setFilteredData(updatedData);
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // fetchProfile();
    updateFilteredData(userData, tab);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    );
  }

  if (!userData) {
    return <BrokenPage />;
  }

  const username = userData.email;
  const name = username.split("@")[0];
  const initial = name[0].toUpperCase();
  const bio = "";

  const handleFriendsPress = () => {
    navigation.navigate("Friends List", { userId: objectID });
  };

  return (
    <View style={styles.completedOverallRankingPag}>
      <View style={styles.profile}>
        <View style={styles.frameParent}>
          <View style={styles.evyShenParent}>
            <Text style={[styles.evyShen, styles.textTypo1]}>{name}</Text>
            <View style={[styles.esWrapper, styles.wrapperBorder]}>
              <Text style={styles.es}>{initial}</Text>
            </View>
            <Text style={[styles.evyshen, styles.textTypo1]}>{username}</Text>
            <Text style={[styles.sophomoreSymbolicSystems, styles.button1Typo]}>
              {bio}
            </Text>
            <View style={styles.buttonWrapper}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Pressable
                  style={[styles.button1, styles.button1Typo]}
                  onPress={() => {
                    auth.signOut().then(() => console.log("User signed out!"));
                  }}
                >
                  <Text>Sign Out</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <TouchableOpacity
              style={styles.parent}
              onPress={handleFriendsPress}
            >
              <Text style={[styles.text, styles.textTypo1]}>{numFriends}</Text>
              <Text style={[styles.friends, styles.button1Typo]}>Friends</Text>
            </TouchableOpacity>

            <View style={styles.group}>
              <Text style={[styles.text, styles.textTypo1]}>{numClasses}</Text>

              <Text style={[styles.friends, styles.button1Typo]}>
                Classes Ranked
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.newListNavBar}>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabChange("myClasses")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "myClasses" && styles.activeTab,
              ]}
            >
              My Classes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabChange("wantToTake")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "wantToTake" && styles.activeTab,
              ]}
            >
              Want to Take
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabChange("recs")}
          >
            <Text
              style={[styles.tabText, activeTab === "recs" && styles.activeTab]}
            >
              Recs For You
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => item.course + index}
        renderItem={({ item }) => {
          if (activeTab === "myClasses") {
            return (
              <SingleClassRanking
                course={item.course}
                quarterYearOffered={item.quarterYearOffered}
                rank={item.rank.toFixed(1)}
                professorName={item.professorName}
              />
            );
          } else if (activeTab === "recs") {
            return (
              <SingleUnsavedClass
                course={item.course}
                professorName={item.professorName}
                recommender={item.recommender}
              />
            );
          } else {
            return (
              <SingleSavedClass
                course={item.course}
                quarterYearOffered={item.quarterYearOffered}
                professorName={item.professorName}
              />
            );
          }
        }}
        ListEmptyComponent={<Text>No classes found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "center",
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    color: "#000",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderColor: "#aeb1ba",
    borderStyle: "solid",
  },
  button1Typo: {
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  buttonFlexBox: {
    padding: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  navSpaceBlock: {
    marginTop: 7,
    alignSelf: "stretch",
  },
  classesSpaceBlock: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  classesTypo: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    top: "0%",
    position: "absolute",
    textAlign: "center",
  },
  classesLayout: {
    height: 15,
    flex: 1,
  },
  textTypo: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Inter-Bold",
    fontWeight: "700",
  },
  singleLayout: {
    height: 52,
    alignSelf: "stretch",
  },
  profileTypo: {
    fontSize: 10,
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    textAlign: "center",
  },
  navItemFlexBox: {
    paddingVertical: 6,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  evyShen: {
    fontSize: 18,
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
    textAlign: "center",
  },
  esWrapper: {
    borderRadius: 50,
    backgroundColor: "#f4f5f8",
    width: 100,
    height: 100,
    marginTop: 10,
    overflow: "hidden",
  },
  evyshen: {
    fontSize: 14,
    marginTop: 10,
  },
  sophomoreSymbolicSystems: {
    fontSize: 14,
    color: "#aeb1ba",
    marginTop: 10,
  },
  button1: {
    fontSize: 14,
    color: "#000",
  },
  button: {
    borderRadius: 30,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#aeb1ba",
    borderStyle: "solid",
    justifyContent: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  evyShenParent: {
    height: 233,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
  },
  friends: {
    fontSize: 14,
    color: "#aeb1ba",
  },
  parent: {
    alignItems: "center",
  },
  group: {
    width: 99,
    marginLeft: 103,
    alignItems: "center",
  },
  frameGroup: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    width: 355,
    alignItems: "center",
  },
  profile: {
    width: 384,
    height: 360,
    paddingTop: 5,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text2: {
    color: "#000",
  },
  textParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  keithWinstein: {
    fontSize: 13,
    color: "#000",
  },
  frameView: {
    justifyContent: "center",
  },
  text3: {
    color: "#249830",
  },
  wrapper: {
    borderRadius: 33,
    alignItems: "flex-end",
    paddingHorizontal: 8,
    paddingVertical: 11,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  frameContainer: {
    justifyContent: "space-between",
    height: 48,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  completedOverallRankingPag: {
    height: 857,
    justifyContent: "flex-end",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  newListNavBar: {
    flexDirection: "row", // Align tabs horizontally
    justifyContent: "space-between", // Evenly space tabs
    paddingHorizontal: 20, // Add padding to the sides
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: "#ccc", // Border color
  },
  tabItem: {
    flex: 1, // Each tab takes up equal space
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10, // Add padding top and bottom
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "lightgrey",
  },
  activeTab: {
    color: "black", // Change color as per your requirement
  },
  backButton: {
    width: 51,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default UserProfile;

