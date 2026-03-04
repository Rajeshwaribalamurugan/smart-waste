import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import DriverProfileScreen from "./DriverProfileScreen"; // <-- Profile screen
import DriverMapScreen from "./DriverMapScreen"; // <-- Map screen

export default function DriverDashboard({ navigation }) {
  
  const [activeSection, setActiveSection] = useState("jobs"); 
  // jobs | map | profile

  return (
    <View style={{ flex: 1 }}>

      {/* ---------- TOP CONTENT AREA ---------- */}
      {activeSection === "jobs" && (
        <ScrollView style={styles.container}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>Hello, Mike 👋</Text>
            <Text style={styles.sub}>You have 3 pickups today</Text>
          </View>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            {[{ label: "Pending", value: 3 },
              { label: "Completed", value: 1 },
              { label: "Points", value: 60 }].map((item, i) => (
              <View key={i} style={styles.statCard}>
                <Text style={styles.statNumber}>{item.value}</Text>
                <Text style={styles.statLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* Route Map */}
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => setActiveSection("map")}
          >
            <View>
              <Text style={styles.routeMain}>View Route Map</Text>
              <Text style={styles.routeSub}>Optimized for efficiency</Text>
            </View>

            <View style={styles.routeIconBox}>
              <Ionicons name="navigate-circle" size={40} color="#fff" />
            </View>
          </TouchableOpacity>

          {/* Pending Pickups */}
          <Text style={styles.section}>⚠ Pending Pickups (3)</Text>

          {/* Pickup Card */}
          <View style={styles.pickupCard}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="cube-outline" size={28} color="#1976d2" />
              <Text style={styles.pickupTitle}>Plastic Waste</Text>
              <Text style={styles.status}>Pending</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="location-outline" size={18} color="#666" />
              <Text style={styles.address}>123 Green Street, Eco City</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="time-outline" size={18} color="#666" />
              <Text style={styles.address}>10:00 AM - 12:00 PM • 1.2 km away</Text>
            </View>

            <View style={styles.gateBox}>
              <Ionicons name="key-outline" size={18} color="green" />
              <Text style={styles.gateText}>Gate code: 1234</Text>
            </View>

            <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.startBtnText}>Start Collection</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {/* ---------- MAP SCREEN ---------- */}
      {activeSection === "map" && <DriverMapScreen />}

      {/* ---------- PROFILE SCREEN ---------- */}
      {activeSection === "profile" && <DriverProfileScreen />}

      {/* ---------- BOTTOM TABS ---------- */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setActiveSection("jobs")} style={styles.navItem}>
          <Ionicons name="briefcase-outline" size={24} color={activeSection === "jobs" ? "#2e7d32" : "#777"} />
          <Text style={[styles.navText, { color: activeSection === "jobs" ? "#2e7d32" : "#777" }]}>Jobs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveSection("map")} style={styles.navItem}>
          <Ionicons name="map-outline" size={24} color={activeSection === "map" ? "#2e7d32" : "#777"} />
          <Text style={[styles.navText, { color: activeSection === "map" ? "#2e7d32" : "#777" }]}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveSection("profile")} style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color={activeSection === "profile" ? "#2e7d32" : "#777"} />
          <Text style={[styles.navText, { color: activeSection === "profile" ? "#2e7d32" : "#777" }]}>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

/* -------------------- STYLES BELOW (unchanged from your code) -------------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fa" },
  header: { padding: 20, paddingTop: 30 },
  name: { fontSize: 26, fontWeight: "bold", color: "#222" },
  sub: { marginTop: 5, fontSize: 15, color: "#777" },

  statsRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  statCard: { backgroundColor: "#fff", paddingVertical: 20, paddingHorizontal: 15, borderRadius: 15, width: "28%", alignItems: "center", elevation: 4 },
  statNumber: { fontSize: 22, color: "#2e7d32", fontWeight: "bold" },
  statLabel: { marginTop: 5, fontSize: 13, color: "#555" },

  routeCard: { backgroundColor: "#2e7d32", marginHorizontal: 15, marginVertical: 12, padding: 20, borderRadius: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  routeMain: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  routeSub: { color: "#c8e6c9", fontSize: 14, marginTop: 3 },
  routeIconBox: { backgroundColor: "rgba(255,255,255,0.25)", padding: 12, borderRadius: 50 },

  section: { fontSize: 18, fontWeight: "bold", marginLeft: 18, marginTop: 10, color: "#444" },

  pickupCard: { backgroundColor: "#fff", margin: 15, padding: 18, borderRadius: 18, elevation: 5 },
  cardHeader: { flexDirection: "row", alignItems: "center" },
  pickupTitle: { fontSize: 17, fontWeight: "bold", marginLeft: 10, flex: 1 },
  status: { color: "#ff9800", backgroundColor: "#fff3e0", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, fontWeight: "bold" },
  row: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  address: { marginLeft: 8, fontSize: 14 },
  gateBox: { flexDirection: "row", backgroundColor: "#e8f5e9", padding: 10, borderRadius: 10, marginTop: 12, alignItems: "center" },
  gateText: { color: "#2e7d32", marginLeft: 6, fontWeight: "bold" },

  startBtn: { backgroundColor: "#2e7d32", padding: 15, borderRadius: 12, marginTop: 15, alignItems: "center" },
  startBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, marginTop: 4 },
});