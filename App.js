import React from "react";
import { StyleSheet, Text, SafeAreaView, Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "./pages/feed/feedScreen";
import UserProfile from "./pages/userProfile/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchStack from "./pages/search/SearchBarPage";
import GenericHeader from "./pages/classyHeader/classyHeader"; // Import your Header component
import { useState, useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native";

// Import icons from the appropriate libraries
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SignIn from "./pages/Authentication/signInPage";
import { auth } from "./firebase";

const Tab = createBottomTabNavigator();

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <SignIn />;
  }

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <NavigationContainer>
          <GenericHeader />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "FeedPage") {
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
            <Tab.Screen name="FeedPage" component={FeedScreen} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Profile" component={UserProfile} />
          </Tab.Navigator>
        </NavigationContainer>
      </TouchableWithoutFeedback>
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
