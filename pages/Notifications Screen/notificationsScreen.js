import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Notification"));
        const notificationsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotifications(notificationsData);
      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };

    fetchNotifications();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image
        style={styles.profilePic}
        resizeMode="cover"
        source={require("../../assets/RichardSallerPic.png")}
      />
      <View style={styles.notificationText}>
        <Text style={styles.name}>{item.userID}</Text>
        <Text style={styles.action}>{item.action}</Text>
        <Text style={styles.timeAgo}>{new Date(item.timestamp.seconds * 1000).toLocaleDateString()}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  notificationItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  action: {
    fontSize: 14,
    color: "#555",
  },
  timeAgo: {
    fontSize: 12,
    color: "#999",
  },
});

export default NotificationsScreen;
