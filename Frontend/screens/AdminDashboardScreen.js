import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AdminDashboardScreen({ navigation }) {

  const bins = [
    { name: "Plastic Bin", level: 85, status: "critical", zone: "Green Street Zone A" },
    { name: "Organic Bin", level: 45, status: "normal", zone: "Park Avenue Zone B" },
    { name: "Paper Bin", level: 92, status: "critical", zone: "Eco Lane Zone C" },
    { name: "Glass Bin", level: 30, status: "normal", zone: "Nature Valley Zone D" },
    { name: "Metal Bin", level: 68, status: "warning", zone: "Recycle Road Zone E" },
    { name: "E-Waste Bin", level: 15, status: "normal", zone: "Tech Park Zone F" },
  ];

  const getColor = (status) => {
    if (status === "critical") return "#e53935";
    if (status === "warning") return "#ff9800";
    return "#2e7d32";
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Dashboard Overview</Text>
      <Text style={styles.subtitle}>Real-time bin monitoring</Text>

      {/* Top Stats */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { borderColor: "#e53935" }]}>
          <Text style={styles.statNumber}>2</Text>
          <Text>Critical Bins</Text>
        </View>

        <View style={[styles.statCard, { borderColor: "#ff9800" }]}>
          <Text style={styles.statNumber}>1</Text>
          <Text>Warning Bins</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.greenCard]}>
          <Text style={styles.greenNumber}>1,247</Text>
          <Text style={{ color: "#fff" }}>Active Users</Text>
        </View>

        <View style={styles.greenCard}>
          <Text style={styles.greenNumber}>87</Text>
          <Text style={{ color: "#fff" }}>Today's Pickups</Text>
        </View>
      </View>

      {/* Bin Monitoring */}
      <Text style={styles.sectionTitle}>Bin Monitoring</Text>

      {bins.map((bin, index) => (
        <View key={index} style={styles.binCard}>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={styles.binTitle}>{bin.name}</Text>
              <Text style={styles.zoneText}>{bin.zone}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.levelText}>{bin.level}%</Text>
              <Text style={{ color: getColor(bin.status) }}>
                {bin.status}
              </Text>
            </View>
          </View>

          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${bin.level}%`,
                  backgroundColor: getColor(bin.status)
                }
              ]}
            />
          </View>

          <View style={styles.binFooter}>
            <Text style={{ color: "#777" }}>
              Last collected: 2 hours ago
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "#2e7d32", fontWeight: "bold" }}>
                Assign Pickup
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      ))}

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.generateBtn}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Generate Report
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => navigation.navigate("Alerts")}
        >
          <Text style={{ color: "#2e7d32", fontWeight: "bold" }}>
            View Alerts
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5", padding: 20 },

  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 15 },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },

  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e53935"
  },

  greenCard: {
    width: "48%",
    backgroundColor: "#2e7d32",
    padding: 20,
    borderRadius: 15
  },

  greenNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff"
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 15
  },

  binCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2
  },

  binTitle: { fontWeight: "bold", fontSize: 16 },
  zoneText: { color: "#777" },

  levelText: { fontSize: 18, fontWeight: "bold" },

  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 10
  },

  progressFill: {
    height: 8,
    borderRadius: 5
  },

  binFooter: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  generateBtn: {
    backgroundColor: "#2e7d32",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center"
  },

  alertBtn: {
    borderWidth: 1,
    borderColor: "#2e7d32",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center"
  }
});