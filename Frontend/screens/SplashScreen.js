import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Role");
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Image
          source={require("../assets/recycle.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>EcoWaste</Text>
      <Text style={styles.subtitle}>Smart Waste Management</Text>
      <Text style={styles.tagline}>Building a greener tomorrow</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e7d32",
    justifyContent: "center",
    alignItems: "center",
  },
  logoCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  title: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#e8f5e9",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 14,
    color: "#c8e6c9",
  },
});