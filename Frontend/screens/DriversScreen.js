import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DriversScreen() {

  const drivers = [
    { name: "Mike Johnson", status: "active", pickups: 235 },
    { name: "Sarah Williams", status: "active", pickups: 198 },
    { name: "David Brown", status: "inactive", pickups: 156 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Driver Management</Text>
      <Text style={styles.subtitle}>Manage driver accounts</Text>

      {drivers.map((driver, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.name}>{driver.name}</Text>
              <Text style={styles.pickups}>⭐ {driver.pickups} pickups</Text>
            </View>

            <Text
              style={[
                styles.status,
                { backgroundColor: driver.status === "active" ? "#c8e6c9" : "#eee" }
              ]}
            >
              {driver.status}
            </Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.removeBtn}>
              <Text style={{ color: "#e53935", fontWeight: "bold" }}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 15 },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: { fontSize: 16, fontWeight: "bold" },
  pickups: { color: "#777", marginTop: 5 },

  status: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 12,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  editBtn: {
    backgroundColor: "#c8e6c9",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },

  removeBtn: {
    backgroundColor: "#ffcdd2",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },

  btnText: { color: "#2e7d32", fontWeight: "bold" },
});