import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AdminDashboard({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        
        {/* Heading */}
        <Text style={styles.title}>Dashboard Overview</Text>
        <Text style={styles.subtitle}>Real-time bin monitoring</Text>

        {/* Stats Grid */}
        <View style={styles.gridRow}>

          {/* Critical Bins */}
          <View style={[styles.statCard, { borderLeftColor: "#d32f2f" }]}>
            <View style={styles.row}>
              <Ionicons name="alert-circle-outline" size={22} color="#d32f2f" />
              <Text style={styles.tagRed}>Urgent</Text>
            </View>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Critical Bins</Text>
          </View>

          {/* Warning Bins */}
          <View style={[styles.statCard, { borderLeftColor: "#ffa000" }]}>
            <View style={styles.row}>
              <Ionicons name="warning-outline" size={22} color="#ffa000" />
              <Text style={styles.tagYellow}>Warning</Text>
            </View>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Warning Bins</Text>
          </View>
        </View>

        <View style={styles.gridRow}>
          {/* Active Users */}
          <View style={[styles.statCardGreen]}>
            <Ionicons name="people-outline" size={22} color="#fff" />
            <Text style={styles.statNumberWhite}>1,247</Text>
            <Text style={styles.statLabelWhite}>Active Users</Text>
          </View>

          {/* Today's Pickups */}
          <View style={[styles.statCardGreen]}>
            <Ionicons name="pulse-outline" size={22} color="#fff" />
            <Text style={styles.statNumberWhite}>87</Text>
            <Text style={styles.statLabelWhite}>Today's Pickups</Text>
          </View>
        </View>

        {/* Bin Monitoring */}
        <Text style={styles.sectionTitle}>Bin Monitoring</Text>

        {/** BIN ITEM */}
        {renderBin(
          "Plastic Bin",
          "Green Street Zone A",
          85,
          "critical",
          "#d32f2f",
          "red"
        )}

        {renderBin(
          "Organic Bin",
          "Park Avenue Zone B",
          45,
          "normal",
          "#2e7d32",
          "#bdbdbd"
        )}

        {renderBin(
          "Paper Bin",
          "Eco Lane Zone C",
          92,
          "critical",
          "#d32f2f",
          "red"
        )}

        {renderBin(
          "Glass Bin",
          "Nature Valley Zone D",
          30,
          "normal",
          "#2e7d32",
          "#bdbdbd"
        )}

        <View style={{ height: 100 }} />

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#2e7d32" />
          <Text style={styles.navTextActive}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="car-outline" size={22} color="#777" />
          <Text style={styles.navText}>Drivers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="clipboard-outline" size={22} color="#777" />
          <Text style={styles.navText}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="analytics-outline" size={22} color="#777" />
          <Text style={styles.navText}>Analytics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const renderBin = (name, area, percent, status, color, barColor) => (
  <View style={styles.binCard}>
    <View style={styles.row}>
      <Ionicons name="trash-outline" size={24} color="#2e7d32" />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={styles.binTitle}>{name}</Text>
        <Text style={styles.binArea}>{area}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.binPercent}>{percent}%</Text>
        <Text style={[styles.statusTag, { color }]}>{status}</Text>
      </View>
    </View>

    {/* Progress Bar */}
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, { width: `${percent}%`, backgroundColor: barColor }]} />
    </View>

    <View style={styles.row}>
      <Text style={styles.lastCollected}>Last collected: 2 hours ago</Text>
      <Text style={styles.assign}>Assign Pickup</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f6f5",
    padding: 15,
  },

  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 15 },

  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderLeftWidth: 5,
    elevation: 2,
  },

  statCardGreen: {
    width: "48%",
    backgroundColor: "#2e7d32",
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },

  row: { flexDirection: "row", alignItems: "center" },

  tagRed: {
    backgroundColor: "#ffebee",
    color: "#c62828",
    paddingHorizontal: 8,
    borderRadius: 10,
    marginLeft: 5,
    fontSize: 10,
  },

  tagYellow: {
    backgroundColor: "#fff8e1",
    color: "#ef6c00",
    paddingHorizontal: 8,
    borderRadius: 10,
    marginLeft: 5,
    fontSize: 10,
  },

  statNumber: { fontSize: 26, fontWeight: "bold", marginTop: 5 },
  statLabel: { color: "#777", fontSize: 12 },

  statNumberWhite: { fontSize: 26, fontWeight: "bold", color: "#fff", marginTop: 5 },
  statLabelWhite: { color: "#c8e6c9" },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },

  /* BIN CARD */
  binCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 12,
  },

  binTitle: { fontSize: 16, fontWeight: "bold" },
  binArea: { color: "#777", fontSize: 12 },

  binPercent: { fontSize: 20, fontWeight: "bold" },
  statusTag: { fontSize: 12, fontWeight: "bold", textTransform: "capitalize" },

  progressBar: {
    height: 6,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 12,
  },

  progressFill: {
    height: 6,
    borderRadius: 5,
  },

  lastCollected: { color: "#777", fontSize: 12 },
  assign: { color: "#2e7d32", fontWeight: "bold" },

  /* BOTTOM NAVIGATION */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 12,
    elevation: 10,
  },

  navItem: { alignItems: "center" },
  navTextActive: { color: "#2e7d32", fontSize: 12 },
  navText: { color: "#777", fontSize: 12 },
});