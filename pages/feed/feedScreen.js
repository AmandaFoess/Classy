import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ActivityCard from "./activityCard";
import CommentScreen from "./CommentScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationsScreen from "../Notifications Screen/notificationsScreen";
import AddCourse from "../userProfile/addCourse";
import FriendsList from "../userProfile/friendsList";
import UserProfile from "../userProfile/userProfile";

const FeedScreen = ({ navigation }) => {
  const [feedData, setFeedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Feed"));
        const data = querySnapshot.docs.reverse().map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feed data: ", error);
        setLoading(false);
      }
    };

    fetchFeedData();
  }, [refreshing]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({ item }) => (
    <ActivityCard item={item} navigation={navigation} />
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={feedData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={<Text>No data found</Text>}
    />
  );
};

const Stack = createNativeStackNavigator();

function FeedStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Friends List" component={FriendsList} />
      <Stack.Screen name="User Profile" component={UserProfile} />
      <Stack.Screen name="AddCourse" component={AddCourse} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FeedStack;
