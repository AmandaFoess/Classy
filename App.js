import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "./pages/feed/feedScreen";
import UserProfile from "./pages/user profile/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseHomePage from "./pages/courseProfile/CourseProfile";
import SearchBarPage from "./pages/search/SearchBarPage";

// Import icons from the appropriate libraries
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Set icon based on the route name
            if (route.name === "Feed") {
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Course Profile") {
              iconName = focused ? "school" : "school-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
              return <MaterialIcons name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={UserProfile} />
        <Tab.Screen name="Course Profile" component={CourseHomePage} />
        <Tab.Screen name="Search" component={SearchBarPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
