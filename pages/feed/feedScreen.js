import { Text } from "react-native";
import ActivityCard from "./activityCard";
import { FlatList } from "react-native";
import { View } from "react-native";

// Test data
const students = [
  { name: "Alice Smith", course: "Mathematics", rank: 8 },
  { name: "Bob Johnson", course: "Physics", rank: 7 },
  { name: "Carol Martinez", course: "Chemistry", rank: 9 },
  { name: "David Lee", course: "Biology", rank: 6 },
  { name: "Eva Brown", course: "English", rank: 8 },
  { name: "Frank White", course: "History", rank: 5 },
  { name: "Grace Davis", course: "Geography", rank: 7 },
  { name: "Henry Lopez", course: "Computer Science", rank: 10 },
  { name: "Isabel Walker", course: "Economics", rank: 8 },
  { name: "Jack Hall", course: "Art", rank: 4 },
];
function FeedScreen({ navigation }) {
  // Function to truncate text if it exceeds a certain length
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <View>
      <FlatList
        data={students}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ActivityCard
            name={truncateText(item.name, 15)} // Truncate to 15 characters
            course={truncateText(item.course, 20)} // Truncate to 20 characters
            rank={item.rank}
          />
        )}
        ListEmptyComponent={<Text>No students found</Text>}
      />
    </View>
  );
}
export default FeedScreen;
