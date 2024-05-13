import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function RecommendItem({ value }) {
  return (
    <Pressable style={styles.item} >
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

export default RecommendItem;
