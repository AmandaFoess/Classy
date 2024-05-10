import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import ActivityCard from "../feed/activityCard";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Item from "./SearchItem";

// Test data
const students = [
  { name: "Alice Smith", course: "Mathematics", rank: 8 },
  { name: "Bob Johnson", course: "Physics", rank: 7 },
  { name: "Carol Martinez", course: "Chemistry", rank: 9 },
  { name: "David Lee", course: "Biology", rank: 6 },
  { name: "Eva Brown", course: "English", rank: 8 },
  { name: "Frank White", course: "History", rank: 5 },
  { name: "Grace Davis", course: "Geography", rank: 7 },
  { name: "Henry Lopez", course: "Computer Science", rank: 10 },
  { name: "Isabel Walker", course: "Economics", rank: 8 },
  { name: "Jack Hall", course: "Art", rank: 4 },
];

function SearchBarPage({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [activeSection, setActiveSection] = React.useState(students);

  const updateSearch = (search) => {
    setSearch(search);
    const filteredData = activeSection.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.course.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredStudents(filteredData);
  };

  return (
    <View>
      <SearchBar
        placeholder="Type here..."
        onChangeText={updateSearch}
        value={search}
        searchIcon={{ size: 24 }}
        containerStyle={styles.searchIconParent}
        inputContainerStyle={{ backgroundColor: "transparent" }} // To ensure the input field aligns with your styling
        inputStyle={{ backgroundColor: "transparent" }} // Additional styling can be added if needed
      />
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.classesWrapper, styles.wrapperFlexBox]}
          onPress={() => setActiveSection("Classes")}
        >
          <Text style={[styles.classes, styles.classesTypo]}>
            Classes (Active: {activeSection === "Classes" ? "Yes" : "No"})
          </Text>
        </Pressable>
        <Pressable
          style={[styles.me3mbersWrapper, styles.wrapperFlexBox]}
          onPress={() => setActiveSection(students)}
        >
          <Text style={[styles.members, styles.classesTypo]}>
            Members (Active: {activeSection === students ? "Yes" : "No"})
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Item name={item.name} course={item.course} rank={item.rank} />
        )}
        ListEmptyComponent={<Text>No students found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchIconParent: {
    borderRadius: 30,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 5,
  },
});

export default SearchBarPage;
