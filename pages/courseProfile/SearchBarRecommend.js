import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";
import RecommendItem from "./RecommendItem";

function SearchBarRecommend() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(["Apple", "Banana", "Orange", "Pineapple", "Mango"]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Type here..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={{ backgroundColor: "transparent" }}
        inputStyle={{ backgroundColor: "transparent" }}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <RecommendItem value={item} />}
        keyExtractor={(item) => item}
        ListEmptyComponent={<Text>No results found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
});

export default SearchBarRecommend;
