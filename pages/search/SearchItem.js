import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

function Item({ value, navigation, page }) {
  console.log("Value: " + value.id);
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
