import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ route, navigation }) {
  const { role } = route.params;

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleAuth = () => {
  if (!email || !password || (isSignup && !name)) {
    Alert.alert("Error", "Please fill all fields");
    return;
  }

  if (isSignup) {
    Alert.alert("Success", `${role} account created successfully!`);
  } else {
    // Navigate based on role
    if (role === "Driver") {
      navigation.replace("DriverDashboard");
    } else {
      navigation.replace("UserDashboard");
    }
  }

  // Clear fields
  setName("");
  setEmail("");
  setPassword("");
};

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="leaf-outline" size={40} color="#2e7d32" />
      </View>

      <Text style={styles.title}>
        {isSignup ? `${role} Signup` : `${role} Login`}
      </Text>

      {isSignup && (
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      )}

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>
          {isSignup ? "Create Account" : "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.switchText}>
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Signup"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e7d32",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 25,
    textTransform: "capitalize",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#2e7d32",
    fontWeight: "bold",
  },
  switchText: {
    color: "#e8f5e9",
    marginTop: 15,
  },
});