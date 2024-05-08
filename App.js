/*   
Navigation Doc - https://reactnative.dev/docs/navigation
*/

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "./pages/feed/feedScreen";
import ProfileScreen from "./pages/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseHomepage from "./pages/courseProfile/CourseProfile";
import SearchBarPage from "./pages/search/SearchBarPage";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Course Profile" component={CourseHomepage} />
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
