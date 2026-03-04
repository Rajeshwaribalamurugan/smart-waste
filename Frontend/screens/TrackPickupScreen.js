import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TrackPickupScreen() {
  return (
    <View style={{ flex: 1 }}>

      {/* Fake Map Section */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapStatus}>● Driver on the way</Text>

        <View style={styles.locationPin}>
          <Ionicons name="location" size={24} color="#fff" />
        </View>
        <Text style={styles.mapLabel}>Your Location</Text>

        <View style={styles.driverPin}>
          <Ionicons name="car" size={20} color="#fff" />
        </View>
        <Text style={[styles.mapLabel, { top: 230 }]}>Driver</Text>
      </View>

      {/* Bottom Card */}
      <ScrollView style={styles.bottomCard}>

        {/* Status Progress */}
        <View style={styles.statusRow}>
          <Text style={styles.activeStatus}>Assigned</Text>
          <Text style={styles.activeStatus}>On the way</Text>
          <Text style={styles.inactiveStatus}>Collected</Text>
        </View>

        {/* Driver Info */}
        <View style={styles.driverCard}>
          <View>
            <Text style={styles.driverName}>Mike Johnson</Text>
            <Text style={styles.driverSub}>⭐ 4.8 • 235 pickups</Text>
          </View>

          <TouchableOpacity style={styles.callBtn}>
            <Ionicons name="call" size={20} color="#2e7d32" />
          </TouchableOpacity>
        </View>

        {/* ETA + Vehicle */}
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Estimated Time</Text>
            <Text style={styles.infoValue}>12 mins</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Vehicle</Text>
            <Text style={styles.infoValue}>GR-1234</Text>
          </View>
        </View>

        {/* Pickup Details */}
        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Pickup Details</Text>

          <View style={styles.detailRow}>
            <Text>Waste Type</Text>
            <Text>Organic Waste</Text>
          </View>

          <View style={styles.detailRow}>
            <Text>Scheduled Time</Text>
            <Text>10:00 AM - 12:00 PM</Text>
          </View>

          <View style={styles.detailRow}>
            <Text>Points to Earn</Text>
            <Text style={{ color: "#2e7d32" }}>+25 pts</Text>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  mapContainer: {
    height: 300,
    backgroundColor: "#d0e8d5",
    alignItems: "center",
    justifyContent: "center"
  },

  mapStatus: {
    position: "absolute",
    top: 20,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    fontWeight: "bold",
    color: "#2e7d32"
  },

  locationPin: {
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 30,
    position: "absolute",
    top: 120
  },

  driverPin: {
    backgroundColor: "#2e7d32",
    padding: 15,
    borderRadius: 30,
    position: "absolute",
    top: 200
  },

  mapLabel: {
    position: "absolute",
    top: 160,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: 12
  },

  bottomCard: {
    flex: 1,
    backgroundColor: "#f4f6f5",
    padding: 20
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  activeStatus: {
    color: "#2e7d32",
    fontWeight: "bold"
  },

  inactiveStatus: {
    color: "#aaa"
  },

  driverCard: {
    backgroundColor: "#c8e6c9",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  driverName: {
    fontSize: 18,
    fontWeight: "bold"
  },

  driverSub: {
    color: "#555",
    marginTop: 5
  },

  callBtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  infoBox: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 15,
    borderRadius: 12
  },

  infoLabel: {
    color: "#777"
  },

  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5
  },

  detailsCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15
  },

  detailsTitle: {
    fontWeight: "bold",
    marginBottom: 15
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  }

});