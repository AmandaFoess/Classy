// // import { Text } from "react-native";
// // import ActivityCard from "./activityCard";
// // import { FlatList } from "react-native";
// // import { View } from "react-native";
// // import CommentScreen from "./CommentScreen";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import NotificationsScreen from "../Notifications Screen/notificationsScreen";
// // import AddCourse from "../userProfile/addCourse";

// // // Test data
// // const students = [
// //   { name: "Alice Smith", course: "Mathematics", rank: 8 },
// //   { name: "Bob Johnson", course: "Physics", rank: 7 },
// //   { name: "Carol Martinez", course: "Chemistry", rank: 9 },
// //   { name: "David Lee", course: "Biology", rank: 6 },
// //   { name: "Eva Brown", course: "English", rank: 8 },
// //   { name: "Frank White", course: "History", rank: 5 },
// //   { name: "Grace Davis", course: "Geography", rank: 7 },
// //   { name: "Henry Lopez", course: "Computer Science", rank: 10 },
// //   { name: "Isabel Walker", course: "Economics", rank: 8 },
// //   { name: "Jack Hall", course: "Art", rank: 4 },
// // ];

// // const FeedScreen = ({ navigation }) => {
// //   // Function to truncate text if it exceeds a certain length
// //   const truncateText = (text, maxLength) => {
// //     return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
// //   };

// //   return (
// //     <View>
// //       <FlatList
// //         data={students}
// //         keyExtractor={(item) => item.name}
// //         renderItem={({ item }) => (
// //           <ActivityCard
// //             name={truncateText(item.name, 15)} // Truncate to 15 characters
// //             course={truncateText(item.course, 20)} // Truncate to 20 characters
// //             rank={item.rank}
// //             navigation={navigation}
// //           />
// //         )}
// //         ListEmptyComponent={<Text>No students found</Text>}
// //       />
// //     </View>
// //   );
// // };

// // const Stack = createNativeStackNavigator();

// // function FeedStack({ navigation }) {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>
// //       <Stack.Screen name="Feed" component={FeedScreen} />
// //       <Stack.Screen name="Comment" component={CommentScreen} />
// //       <Stack.Screen name="Notifications" component={NotificationsScreen} />
// //       <Stack.Screen name="Add Class" component={AddCourse} />
// //     </Stack.Navigator>
// //   );
// // }

// // export default FeedStack;

// import React, { useEffect, useState } from "react";
// import {
//   Text,
//   View,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   RefreshControl,
// } from "react-native";
// import { db } from "../../firebase";
// import { collection, getDocs } from "firebase/firestore";
// import ActivityCard from "./activityCard";
// import CommentScreen from "./CommentScreen";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import NotificationsScreen from "../Notifications Screen/notificationsScreen";
// import AddCourse from "../userProfile/addCourse";
// import FriendsList from "../userProfile/friendsList";
// import UserProfile from "../userProfile/userProfile";


// const FeedScreen = ({ navigation }) => {
//   const [feedData, setFeedData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = React.useState(false);

//   useEffect(() => {
//     const fetchFeedData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Feed"));
//         const data = querySnapshot.docs.reverse().map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setFeedData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching feed data: ", error);
//         setLoading(false);
//       }
//     };

//     fetchFeedData();
//   }, [refreshing]);
//   console.log(feedData);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   };

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
//   };

//   const renderItem = ({ item }) => (
//     <ActivityCard item={item} navigation={navigation} />
//   );

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView
//       contentContainerStyle={styles.scrollView}
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//       }
//     >
//       <FlatList
//         data={feedData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         ListEmptyComponent={<Text>No data found</Text>}
//       />
//      </ScrollView>
//   );
// };

// const Stack = createNativeStackNavigator();

// function FeedStack({ navigation }) {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Feed" component={FeedScreen} />
//       <Stack.Screen name="Comment" component={CommentScreen} />
//       <Stack.Screen name="Notifications" component={NotificationsScreen} />
//       <Stack.Screen name="Add Class" component={AddCourse} />
//       <Stack.Screen name="Friends List" component={FriendsList} />
//       <Stack.Screen name="User Profile" component={UserProfile} />

//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default FeedStack;

// import React, { useEffect, useState } from "react";
// import { Image, StyleSheet, Text, View, FlatList } from "react-native";
// import { db } from "../../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const NotificationsScreen = ({ navigation }) => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Notification"));
//         const notificationsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setNotifications(notificationsData);
//       } catch (error) {
//         console.error("Error fetching notifications: ", error);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.notificationItem}>
//       <Image
//         style={styles.profilePic}
//         resizeMode="cover"
//         source={require("../../assets/RichardSallerPic.png")}
//       />
//       <View style={styles.notificationText}>
//         <Text style={styles.name}>{item.userID}</Text>
//         <Text style={styles.action}>{item.action}</Text>
//         <Text style={styles.timeAgo}>
//           {new Date(item.timestamp.seconds * 1000).toLocaleDateString()}
//         </Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={notifications}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 10,
//   },
//   notificationItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderColor: "#aeb1ba",
//     paddingVertical: 10,
//   },
//   profilePic: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   notificationText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: "700",
//     fontSize: 15,
//     color: "#000",
//   },
//   action: {
//     fontSize: 15,
//     color: "#000",
//   },
//   timeAgo: {
//     fontSize: 10,
//     color: "#aeb1ba",
//   },
// });

// export default NotificationsScreen;

import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userRef = doc(collection(db, "Users"), user.uid);
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
          {new Date(item.timestamp).toLocaleDateString()}
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
