import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AnalyticsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Analytics</Text>
      <Text style={styles.subtitle}>System insights and statistics</Text>

      <View style={styles.cardRow}>
        <View style={styles.cardGreen}>
          <Text style={styles.bigNumber}>341</Text>
          <Text style={styles.cardText}>Total Pickups</Text>
        </View>

        <View style={styles.cardBlue}>
          <Text style={styles.bigNumber}>1,247</Text>
          <Text style={styles.cardText}>Active Users</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.cardOrange}>
          <Text style={styles.bigNumber}>87%</Text>
          <Text style={styles.cardText}>Avg Segregation</Text>
        </View>

        <View style={styles.cardTeal}>
          <Text style={styles.bigNumber}>2.5T</Text>
          <Text style={styles.cardText}>Waste Collected</Text>
        </View>
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 15 },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  cardGreen: {
    width: "48%",
    backgroundColor: "#2e7d32",
    padding: 20,
    borderRadius: 15,
  },

  cardBlue: {
    width: "48%",
    backgroundColor: "#1976d2",
    padding: 20,
    borderRadius: 15,
  },

  cardOrange: {
    width: "48%",
    backgroundColor: "#f57c00",
    padding: 20,
    borderRadius: 15,
  },

  cardTeal: {
    width: "48%",
    backgroundColor: "#00897b",
    padding: 20,
    borderRadius: 15,
  },

  bigNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  cardText: {
    color: "#fff",
    marginTop: 5,
  },
});