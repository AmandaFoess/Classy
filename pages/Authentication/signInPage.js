// src/SignIn.js
import { useState } from "react";
import { Pressable, TextInput, Text, View } from "react-native";
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "./firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const allowedDomain = "alloweddomain.com";
    const emailDomain = email.split("@")[1];

    if (emailDomain !== allowedDomain) {
      setError("Email domain is not allowed.");
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
    <View onSubmit={handleSignIn}>
      <View>
        <Text>Email:</Text>
        <TextInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </View>
      {error && <p>{error}</p>}
      <Pressable type="submit">
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
