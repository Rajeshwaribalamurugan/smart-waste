import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pickup Completed</Text>
        <Text>Your organic waste has been collected. +45 points earned!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pickup Reminder</Text>
        <Text>Scheduled pickup tomorrow at 10:00 AM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Achievement Unlocked</Text>
        <Text>You've completed 30 pickups! Keep up the great work.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Points Added</Text>
        <Text>50 bonus points for proper waste segregation!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Eco Tip</Text>
        <Text>Composting reduces methane emissions by 50%.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});