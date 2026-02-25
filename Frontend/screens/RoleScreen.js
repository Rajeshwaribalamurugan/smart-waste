import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RoleScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome to EcoWaste</Text>
      <Text style={styles.subheading}>Select your role to continue</Text>

      {/* User */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Login", { role: "User" })}
      >
        <View style={styles.iconCircle}>
          <Ionicons name="person-outline" size={28} color="#fff" />
        </View>
        <View>
          <Text style={styles.cardTitle}>User</Text>
          <Text style={styles.cardText}>Request pickups & track waste</Text>
        </View>
      </TouchableOpacity>

      {/* Driver */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Login", { role: "Driver" })}
      >
        <View style={styles.iconCircle}>
          <Ionicons name="car-outline" size={28} color="#fff" />
        </View>
        <View>
          <Text style={styles.cardTitle}>Driver</Text>
          <Text style={styles.cardText}>View & complete collections</Text>
        </View>
      </TouchableOpacity>

      {/* Admin */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Login", { role: "Admin" })}
      >
        <View style={styles.iconCircle}>
          <Ionicons name="shield-checkmark-outline" size={28} color="#fff" />
        </View>
        <View>
          <Text style={styles.cardTitle}>Admin</Text>
          <Text style={styles.cardText}>Monitor & manage system</Text>
        </View>
      </TouchableOpacity>

      {/* System Architecture Button */}
      <TouchableOpacity style={styles.archCard}>
        <Ionicons name="pulse-outline" size={24} color="#fff" />
        <Text style={styles.archText}>System Architecture</Text>
        <Text style={styles.archSub}>View technical overview</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#e8f5e9",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  subheading: {
    fontSize: 14,
    marginBottom: 30,
    color: "#666",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 18,
    elevation: 3,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2e7d32",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    color: "#666",
    marginTop: 3,
  },
  archCard: {
    backgroundColor: "#2e7d32",
    width: "100%",
    padding: 25,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
  },
  archText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
  },
  archSub: {
    color: "#c8e6c9",
    fontSize: 12,
  },
});