import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UserDashboard() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.name}>John Doe</Text>

          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </View>

        {/* Score Card */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreTitle}>Today's Segregation Score</Text>
          <Text style={styles.scoreNumber}>
            87 <Text style={styles.outOf}>/100</Text>
          </Text>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.scoreIncrease}>+5% from yesterday</Text>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.quickContainer}>
          <TouchableOpacity style={styles.primaryCard}>
            <Ionicons name="trash-outline" size={24} color="#fff" />
            <Text style={styles.primaryText}>Request Pickup</Text>
            <Text style={styles.primarySub}>Schedule collection</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard}>
            <Ionicons name="camera-outline" size={24} color="#2e7d32" />
            <Text style={styles.secondaryText}>AI Guide</Text>
            <Text style={styles.secondarySub}>Identify waste type</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard}>
            <Ionicons name="location-outline" size={24} color="#2e7d32" />
            <Text style={styles.secondaryText}>Track Pickup</Text>
            <Text style={styles.secondarySub}>Live location</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard}>
            <Ionicons name="gift-outline" size={24} color="#2e7d32" />
            <Text style={styles.secondaryText}>My Rewards</Text>
            <Text style={styles.secondarySub}>2,450 points</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Pickups */}
        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Recent Pickups</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.pickupCard}>
          <Ionicons name="trash-outline" size={22} color="#2e7d32" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.pickupTitle}>Plastic Waste</Text>
            <Text style={styles.pickupSub}>Collected</Text>
          </View>
          <View>
            <Text style={styles.date}>Feb 18</Text>
            <Text style={styles.points}>+50 pts</Text>
          </View>
        </View>

        <View style={styles.pickupCard}>
          <Ionicons name="trash-outline" size={22} color="#ff9800" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.pickupTitle}>Organic Waste</Text>
            <Text style={styles.pickupSub}>In Progress</Text>
          </View>
          <View>
            <Text style={styles.date}>Feb 19</Text>
            <Text style={{ color: "#2196f3" }}>Tracking</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5" },

  header: {
    backgroundColor: "#2e7d32",
    padding: 20,
    paddingTop: 50,
  },
  hello: { color: "#c8e6c9" },
  name: { color: "#fff", fontSize: 22, fontWeight: "bold" },

  notification: { position: "absolute", right: 20, top: 55 },
  badge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  badgeText: { color: "#fff", fontSize: 10 },

  scoreCard: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },
  scoreTitle: { color: "#777" },
  scoreNumber: { fontSize: 28, fontWeight: "bold", color: "#2e7d32" },
  outOf: { fontSize: 16, color: "#777" },

  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 10,
  },
  progressFill: {
    height: 8,
    width: "87%",
    backgroundColor: "#2e7d32",
    borderRadius: 5,
  },

  scoreIncrease: { color: "#2e7d32" },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },

  quickContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 10,
  },

  primaryCard: {
    backgroundColor: "#2e7d32",
    width: "44%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  primaryText: { color: "#fff", fontWeight: "bold", marginTop: 10 },
  primarySub: { color: "#c8e6c9", fontSize: 12 },

  secondaryCard: {
    backgroundColor: "#fff",
    width: "44%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  secondaryText: { fontWeight: "bold", marginTop: 10 },
  secondarySub: { fontSize: 12, color: "#777" },

  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  viewAll: { color: "#2e7d32" },

  pickupCard: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  pickupTitle: { fontWeight: "bold" },
  pickupSub: { color: "#777", fontSize: 12 },
  date: { fontSize: 12 },
  points: { color: "#2e7d32", fontSize: 12 },
});