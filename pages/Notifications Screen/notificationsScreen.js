import React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";

//fake data
const notificationsData = [
    {
      id: 1,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Richard Saller",
      action: "wants to be friends!",
      timeAgo: "1d",
    },
    {
      id: 2,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "John Doe",
      action: "liked your ranking",
      timeAgo: "2d",
    },
    {
      id: 3,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Jane Smith",
      action: "commented on your ranking",
      timeAgo: "3d",
    },
    {
      id: 4,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Alex Johnson",
      action: "bookmarked your class",
      timeAgo: "4d",
    },
    {
      id: 5,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Emma Watson",
      action: "recommended you a class",
      timeAgo: "5d",
    },
    {
      id: 6,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Michael Jordan",
      action: "recommended you a class",
      timeAgo: "6d",
    },
    {
      id: 7,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Mary Johnson",
      action: "liked your ranking",
      timeAgo: "7d",
    },
    {
      id: 8,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Peter Parker",
      action: "commented on your ranking",
      timeAgo: "8d",
    },
    {
      id: 9,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Elizabeth Taylor",
      action: "bookmarked your class",
      timeAgo: "9d",
    },
    {
      id: 10,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "William Wallace",
      action: "wants to be friends!",
      timeAgo: "10d",
    },
    {
      id: 11,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Isabella Johnson",
      action: "liked your ranking",
      timeAgo: "11d",
    },
    {
      id: 12,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Alexander Hamilton",
      action: "recommended you a class",
      timeAgo: "12d",
    },
    {
      id: 13,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Olivia Smith",
      action: "recommended you a class",
      timeAgo: "13d",
    },
    {
      id: 14,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Christopher Columbus",
      action: "bookmarked your class",
      timeAgo: "14d",
    },
    {
      id: 15,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Eleanor Roosevelt",
      action: "liked your ranking",
      timeAgo: "15d",
    },
    {
      id: 16,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Thomas Edison",
      action: "commented on your ranking",
      timeAgo: "16d",
    },
    {
      id: 17,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Margaret Thatcher",
      action: "wants to be friends!",
      timeAgo: "17d",
    },
    {
      id: 18,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Leonardo da Vinci",
      action: "wants to be friends!",
      timeAgo: "18d",
    },
    {
      id: 19,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Albert Einstein",
      action: "commented on your ranking",
      timeAgo: "19d",
    },
    {
      id: 20,
      profilePic: require("../../assets/RichardSallerPic.png"),
      name: "Galileo Galilei",
      action: "liked your ranking",
      timeAgo: "20d",
    },
  ];
  

const NotificationsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image
        style={styles.profilePic}
        resizeMode="cover"
        source={item.profilePic}
      />
      <View style={styles.notificationText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.action}>{item.action}</Text>
        <Text style={styles.timeAgo}>{item.timeAgo}</Text>
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aeb1ba",
    paddingVertical: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  name: {
    fontWeight: "700",
    fontSize: 15,
    color: "#000",
  },
  action: {
    fontSize: 15,
    color: "#000",
  },
  timeAgo: {
    fontSize: 10,
    color: "#aeb1ba",
  },
});

export default NotificationsScreen;
