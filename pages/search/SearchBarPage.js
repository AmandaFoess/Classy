import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Item from "./SearchItem";
import { Usernames, Courses, MyCourses } from "../../assets/data";
import { useEffect } from "react";
import CourseHomePage from "../courseProfile/CourseProfile";
import UserProfile from "../userProfile/profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecommendCourse from "../courseProfile/recommendCourse";

function SearchBarPage({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState(Usernames);
  const [activeSection, setActiveSection] = React.useState(Usernames);
  const [activePage, setActivePage] = useState("Profile");

  useEffect(() => {
    const filteredData = activeSection.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(filteredData);
    if (activeSection == Usernames) {
      setActivePage("User Profile");
    } else {
      setActivePage("Course Profile");
    }
  }, [search, activeSection]); // Dependency array includes both search and activeSection

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
          style={[styles.classesWrapper, styles.wrapperFlexBox]}
          onPress={() => setActiveSection(Courses)}
        >
          <Text
            style={[
              styles.classes,
              styles.classesTypo,
              activeSection === Courses && styles.bold, // Conditionally apply the bold style
            ]}
          >
            All Classes
          </Text>
        </Pressable>
        <Pressable
          style={[styles.classesWrapper, styles.wrapperFlexBox]}
          onPress={() => setActiveSection(MyCourses)}
        >
          {/* <Text
            style={[
              styles.classes,
              styles.classesTypo,
              activeSection === MyCourses && styles.bold, // Conditionally apply the bold style
            ]}
          >
            My Classes
          </Text>
        </Pressable>
        <Pressable
          style={[styles.me3mbersWrapper, styles.wrapperFlexBox]}
          onPress={() => setActiveSection(Usernames)}
        > */}
          <Text
            style={[
              styles.classes,
              styles.classesTypo,
              activeSection === Usernames && styles.bold, // Conditionally apply the bold style
            ]}
          >
            Users
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Item value={item} navigation={navigation} page={activePage} />
        )}
        ListEmptyComponent={<Text>"{search}" not found.</Text>}
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
});

export default SearchStack;
