// src/SignIn.js
import { useState } from "react";
import { Pressable, TextInput, Text, View, StyleSheet } from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "./firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    const allowedDomain = "stanford.edu";
    const emailDomain = email.split("@")[1];

    if (emailDomain !== allowedDomain) {
      setError("Only @stanford.edu email addresses are allowed.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (error) {
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
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            required
            style={styles.input}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Pressable onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
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

export default SignIn;
