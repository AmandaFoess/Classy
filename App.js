import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "./pages/feed/feedScreen";
import UserProfile from "./pages/userProfile/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseHomePage from "./pages/courseProfile/CourseProfile";
import SearchStack from "./pages/search/SearchBarPage";
import GenericHeader from "./pages/classyHeader/classyHeader"; // Import your Header component

// Import icons from the appropriate libraries
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import RecommendCourse from "./pages/courseProfile/recommendCourse";
import SearchBarRecommend from "./pages/courseProfile/SearchBarRecommend";
import CommentScreen from "./pages/feed/CommentScreen";
import AddCourse from "./pages/userProfile/addCourse";
import NotificationsScreen from "./pages/Notifications Screen/notificationsScreen.js";
import SignIn from "./pages/Authentication/signInPage";

import { AuthProvider } from "./pages/Authentication/authContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <NavigationContainer>
        <GenericHeader />
        <Text></Text>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Feed") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Course Profile") {
                iconName = focused ? "school" : "school-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
                return (
                  <MaterialIcons name={iconName} size={size} color={color} />
                );
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#3d47a6",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Profile" component={UserProfile} />
          <Tab.Screen name="SignIn" component={SignIn} />
          {/* <Tab.Screen name="Course Profile" component={CourseHomePage} /> */}
          {/* <Tab.Screen name="Comment Screen" component={CommentScreen} /> */}
          {/* <Tab.Screen name="Add Class" component={AddCourse} /> */}
          {/* <Tab.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
