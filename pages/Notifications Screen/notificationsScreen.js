import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userRef = doc(db, "Users", user.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setNotifications(userData.notifications || []);
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("User is not logged in");
        }
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
        <Text style={styles.timeAgo}>
          {new Date(item.timestamp.seconds * 1000).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
