import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

function Item({ value, navigation, page }) {
  console.log("Navigating to page with value ID: " + value.id); // Debug log
  return (
    <Pressable
      style={styles.item}
      onPress={() =>
        navigation.navigate(page, {
          objectID: value.id,
        })
      }
    >
      <Text style={styles.title}>{value.id}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ddd",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
  },
});

export default Item;
