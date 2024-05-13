import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "./pages/feed/feedScreen";
import UserProfile from "./pages/user profile/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseHomePage from "./pages/courseProfile/CourseProfile";
import SearchStack from "./pages/search/SearchBarPage";

// Import icons from the appropriate libraries
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import RecommendCourse from "./pages/courseProfile/recommendCourse";
import SearchBarRecommend from "./pages/courseProfile/SearchBarRecommend";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <NavigationContainer>
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
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Profile" component={UserProfile} />
          <Tab.Screen name="Course Profile" component={CourseHomePage} />
          <Tab.Screen name="Search" component={SearchStack} />
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
