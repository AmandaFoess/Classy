// src/SignIn.js
import { useState } from "react";
import { Pressable, TextInput, Text, View, StyleSheet } from "react-native";
import { auth, db } from "../../firebase";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, collection } from "firebase/firestore";

const SignUp = (e) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // creating a new user
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setError("");
      try {
        const data = {
          uid: user.uid,
          email: user.email,
          myClasses: [{
            course: "Example Course",
            quarterYearOffered: "Fall 2023",
            rank: 5.0,
            professorName: "John Doe",
          }],
          classesToTake: [{
            course: "Example Course",
            rank: 5.0,
            professorName: "John Doe",
          }],
          recsForYou: [{
            course: "Example Course",
            rank: 5.0,
            professorName: "John Doe",
          }],
        };
        await setDoc(doc(db, "Users", user.email.split("@")[0]), data);
      } catch (err) {
        setError(err.message);
      }
    } catch (error) {
      if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        setError("The password is too weak.");
      } else if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("The email address is already in use.");
      } else {
        console.log(error.code);
        alert(error.code);
      }
      setError(error.message);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={[styles.classee, styles.classeeClr]}>Classy</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            required
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            required
            style={styles.input}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  classeeClr: {
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  classee: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  inputWrapper: {
    width: "80%",
    marginBottom: 20,
    alignItems: "center",
  },
  label: {
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "#d9d9d9",
    borderRadius: 30,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 30,
    padding: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default SignUp;
