import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { db, auth } from "../../firebase";
import { collection, doc, updateDoc, arrayUnion } from "firebase/firestore";

const fakeUsers = [
  { id: "P5hicocaGYXl4pTVQbU3jISLsfI2", username: "@piperfleming" },
  { id: "2", username: "@johnsmith" },
  { id: "3", username: "@janedoe" },
  { id: "4", username: "@alicejones" },
  // Add more fake users as needed
];

const RecommendCourse = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(fakeUsers);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentUserID, setCurrentUserID] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = auth.currentUser;
      if (user) {
        setCurrentUserID(user.uid);
        console.log(user.uid)
      } else {
        // Handle user not signed in
        // For example, redirect to login page
      }
    };

    getCurrentUser();
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const updateSearch = (search) => {
    setSearch(search);
    if (search) {
      const filtered = fakeUsers.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(fakeUsers);
    }
  };

  const handleUserPress = async (user) => {
    setSelectedUser(user);
    setModalVisible(true);

    try {
      const userRef = db.collection("Users").doc(user.id);
      await userRef.update({
        recsForYou: firebase.firestore.FieldValue.arrayUnion("CS106A"),
        recommenders: firebase.firestore.FieldValue.arrayUnion(currentUserID),
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  return (
    <View style={[styles.iphone1415ProMax7, styles.frame60variant3FlexBox]}>
      <TouchableOpacity
        style={styles.addAndSaveFlexBox}
        onPress={handleBackPress}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.recommendTo, styles.recommendToTypo]}>
        Recommend To:
      </Text>
      <SearchBar
        placeholder="Search Users..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        round
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userItem}
            onPress={() => handleUserPress(item)}
          >
            <Text style={styles.username}>{item.username}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recommended!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  frame60variant3FlexBox: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  recommendToTypo: {
    textAlign: "left",
    color: "#000",
    fontSize: 20,
  },
  searchIconWrapperSpaceBlock: {
    marginTop: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  frame60variant3Border: {
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
  },
  recommendTo: {
    fontFamily: "Inter-Regular",
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  searchIconWrapper: {
    borderRadius: 30,
    borderColor: "#000",
    width: 365,
    paddingHorizontal: 28,
    paddingVertical: 12,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
  },
  piperfleming: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  addAndSave: {
    width: 56,
    height: 29,
  },
  vectorIcon: {
    width: 15,
    height: 15,
  },
  frame60variant3: {
    borderColor: "#b9b9b9",
    width: 441,
    height: 69,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 32,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  frame60variant3Parent: {
    paddingHorizontal: 0,
    paddingVertical: 7,
  },
  iphone1415ProMax7: {
    flex: 1,
    width: "100%",
    height: 944,
    opacity: 0.5,
  },
  addAndSaveFlexBox: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginLeft: 20,
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  username: {
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  searchBarContainer: {
    width: "90%",
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 20,
  },
  searchBarInputContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
});

export default RecommendCourse;
