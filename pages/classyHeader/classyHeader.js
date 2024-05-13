import React from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const GenericHeader = () => {
  const navigation = useNavigation();

  const handleNotificationsPress = () => {
    navigation.navigate("Notifications"); // Navigate to the screen name
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.logoText}>Classy</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={handleNotificationsPress}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
  },
  logoText: {
    fontSize: 40,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#3d47a6",
    width: "100%",
  },
  iconContainer: {
    marginLeft: "auto", // Pushes the icon to the right
  },
});

export default GenericHeader;
