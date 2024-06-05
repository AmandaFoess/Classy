import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

function Item({ value, navigation, page }) {
  return (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate(page, { classID: value })}
    >
      <Text style={styles.title}>{value}</Text>
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
