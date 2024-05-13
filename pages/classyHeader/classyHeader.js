import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet } from "react-native";
import { NotificationsIcon } from "../../assets/icons";

const GenericHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.logoText}>Classy</Text>
        <View style={styles.iconContainer}>

          <NotificationsIcon />
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    paddingVertical: 9,
    width: "100%",
  },
  logoText: {
    fontSize: 40,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#3d47a6",
    width: "100%",
  },
  ionnotificationsOutlineIcon: {
    width: 31,
    height: 31,
  },
  logo: {
    width: 40,
    height: 40,
  },
  iconContainer: {
    marginLeft: "auto", // Pushes the icon to the right
  },
});

export default GenericHeader;
