import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Item({ name, course, rank }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        {name}, {course}, {rank}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default Item;
