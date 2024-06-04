import { auth } from "../../firebase";
import { Text, View, Pressable } from "react-native";

export const BrokenPage = () => (
  <View>
    <Text>No User Data Found</Text>
    <View style={[styles.button, styles.buttonFlexBox]}>
      <Pressable
        style={[styles.button1, styles.button1Typo]}
        onPress={() => {
          auth.signOut().then(() => console.log("User signed out!"));
        }}
      >
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  </View>
);
