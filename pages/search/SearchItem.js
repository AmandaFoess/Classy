import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Item({ value }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{value}</Text>
    </View>
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
