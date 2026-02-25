import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DriverDashboard() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Hello, Mike 👋</Text>
        <Text style={styles.sub}>You have 3 pickups today</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text>Pending</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>1</Text>
          <Text>Completed</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>60</Text>
          <Text>Points</Text>
        </View>
      </View>

      {/* Route Button */}
      <TouchableOpacity style={styles.routeCard}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          View Route Map
        </Text>
        <Text style={{ color: "#c8e6c9" }}>Optimized for efficiency</Text>
      </TouchableOpacity>

      {/* Pending Pickups */}
      <Text style={styles.section}>Pending Pickups</Text>

      <View style={styles.pickupCard}>
        <Text style={styles.title}>Plastic Waste</Text>
        <Text style={styles.address}>123 Green Street</Text>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={{ color: "#fff" }}>Start Collection</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickupCard}>
        <Text style={styles.title}>Organic Waste</Text>
        <Text style={styles.address}>456 Park Avenue</Text>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={{ color: "#fff" }}>Start Collection</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5" },

  header: { padding: 20 },
  name: { fontSize: 20, fontWeight: "bold" },
  sub: { color: "#777" },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  statCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "28%",
    alignItems: "center",
    elevation: 2,
  },
  statNumber: { fontSize: 18, fontWeight: "bold", color: "#2e7d32" },

  routeCard: {
    backgroundColor: "#2e7d32",
    margin: 15,
    padding: 20,
    borderRadius: 15,
  },

  section: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },

  pickupCard: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  title: { fontWeight: "bold", fontSize: 16 },
  address: { color: "#777", marginVertical: 5 },

  startBtn: {
    backgroundColor: "#2e7d32",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
});