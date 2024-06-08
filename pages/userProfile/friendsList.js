import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const FriendsList = ({ route, navigation }) => {
  const { userId } = route.params;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const docRef = doc(db, "Users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFriends(docSnap.data().friends || []);
      } else {
        console.log("No such document!");
      }
    };

    fetchFriends();
  }, [userId]);

  const handleFriendPress = (friendId) => {
    navigation.navigate("User Profile", { objectID: friendId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.friendItem}
            onPress={() => handleFriendPress(item)}
          >
            <Text style={styles.friendName}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No friends found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  friendItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  friendName: {
    fontSize: 16,
  },
});

export default FriendsList;
