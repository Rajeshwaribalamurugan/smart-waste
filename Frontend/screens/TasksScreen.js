import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function TasksScreen() {

  const tasks = [
    { location: "123 Green Street", type: "Plastic", time: "10:00 AM", driver: "Mike Johnson" },
    { location: "456 Park Avenue", type: "Organic", time: "11:00 AM", driver: "Sarah Williams" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Task Assignment</Text>
      <Text style={styles.subtitle}>Assign pickups to drivers</Text>

      {tasks.map((task, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.location}>{task.location}</Text>
          <Text style={styles.details}>{task.type} • {task.time}</Text>

          <View style={styles.assigned}>
            <Text>Assigned to: </Text>
            <Text style={styles.driver}>{task.driver}</Text>
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

  location: { fontSize: 16, fontWeight: "bold" },
  details: { color: "#777", marginVertical: 5 },

  assigned: {
    marginTop: 10,
    backgroundColor: "#e8f5e9",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
  },

  driver: { color: "#2e7d32", fontWeight: "bold" },
});