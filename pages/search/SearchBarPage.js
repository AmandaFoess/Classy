import React, { useState } from "react";
import { View, FlatList, Text, TouchableHighlight } from "react-native";
import { SearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Item from "./SearchItem";
import { Usernames, Courses } from "../../assets/data";
import { useEffect } from "react";
import CourseHomePage from "../courseProfile/CourseProfile";
import UserProfile from "../userProfile/profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecommendCourse from "../courseProfile/recommendCourse";
import { act } from "react";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import RankingClasses from "../userProfile/addCourse";
import Spinner from "react-native-loading-spinner-overlay";

function SearchBarPage({ navigation }) {
  const [search, setSearch] = useState("");
  const [completeList, setCompleteList] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [activeSection, setActiveSection] = useState("Users");
  const [activePage, setActivePage] = useState("Profile");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, activeSection));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompleteList(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feed data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [activeSection]); // Dependency array includes both search and activeSection

  useEffect(() => {
    if (completeList) {
      const filteredData = completeList.filter((item) =>
        item.id.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredList(filteredData);
    }
    if (activeSection == "Users") {
      setActivePage("User Profile");
    } else {
      setActivePage("Course Profile");
    }
  }, [search, activeSection, completeList]); // Dependency array includes both search and activeSection

  if (loading) {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <SearchBar
          placeholder="Type here..."
          onChangeText={updateSearch}
          value={search}
          searchIcon={{ size: 24 }}
          containerStyle={styles.searchIconParent}
          inputContainerStyle={{ backgroundColor: "transparent" }} // To ensure the input field aligns with your styling
          inputStyle={{ backgroundColor: "transparent" }} // Additional styling can be added if needed
        />
        <View style={styles.searchNavBar}>
          <Pressable
            style={styles.wrapperFlexBox}
            onPress={() => setActiveSection("Classes")}
          >
            <Text
              style={[
                styles.classes,
                activeSection === "Classes" && styles.bold, // Conditionally apply the bold style
              ]}
            >
              All Classes
            </Text>
          </Pressable>
          <Pressable
            style={styles.wrapperFlexBox}
            onPress={() => setActiveSection("Users")}
          >
            <Text
              style={[styles.classes, activeSection === "Users" && styles.bold]}
            >
              Users
            </Text>
          </Pressable>
        </View>

        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    );
  }

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <SearchBar
        placeholder="Type here..."
        onChangeText={updateSearch}
        value={search}
        searchIcon={{ size: 24 }}
        containerStyle={styles.searchIconParent}
        inputContainerStyle={{ backgroundColor: "transparent" }} // To ensure the input field aligns with your styling
        inputStyle={{ backgroundColor: "transparent" }} // Additional styling can be added if needed
      />
      <View style={styles.searchNavBar}>
        <Pressable
          style={styles.wrapperFlexBox}
          onPress={() => setActiveSection("Classes")}
        >
          <Text
            style={[
              styles.classes,
              activeSection === "Classes" && styles.bold, // Conditionally apply the bold style
            ]}
          >
            All Classes
          </Text>
        </Pressable>
        <Pressable
          style={styles.wrapperFlexBox}
          onPress={() => setActiveSection("Users")}
        >
          <Text
            style={[styles.classes, activeSection === "Users" && styles.bold]}
          >
            Users
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item value={item} navigation={navigation} page={activePage} />
        )}
        ListEmptyComponent={
          <Text style={styles.fail}>"{search}" not found.</Text>
        }
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function SearchStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search Things" component={SearchBarPage} />
      <Stack.Screen name="Course Profile" component={CourseHomePage} />
      <Stack.Screen name="Recommend" component={RecommendCourse} />
      <Stack.Screen name="User Profile" component={UserProfile} />
      <Stack.Screen name="Add Class" component={RankingClasses} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchIconParent: {
    backgroundColor: "#fff",
    borderColor: "#000",
    paddingVertical: 4,
  },
  searchNavBar: {
    alignSelf: "stretch",
    justifyContent: "space-around",
    height: "auto",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  wrapperFlexBox: {
    height: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  classes: {
    fontSize: 17,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  fail: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default SearchStack;
