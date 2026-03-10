import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function DriverProfileScreen({ navigation,route }) {
  const { user } = route.params || {};
  const driverName = user?.name || user?.email?.split("@")[0] || "Driver";
  const email = user?.email || "Not provided";
  return (
    <ScrollView style={styles.container}>
      
      {/* ----------- HEADER ----------- */}
      <View style={styles.headerCard}>
        <Ionicons name="person-circle-outline" size={90} color="#fff" />

        <Text style={styles.driverName}>{driverName}</Text>
        <Text style={styles.driverId}>Driver ID: DR-2345</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={18} color="#ffe500" />
          <Text style={styles.ratingText}>4.8 Rating</Text>

          <Ionicons name="time-outline" size={18} color="#fff" style={{ marginLeft: 12 }} />
          <Text style={styles.ratingText}>Since Dec 2025</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>235</Text>
            <Text style={styles.statLabel}>Pickups</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>3,525</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>98%</Text>
            <Text style={styles.statLabel}>On-time</Text>
          </View>
        </View>
      </View>

      {/* ----------- VEHICLE INFO ----------- */}
      <Text style={styles.sectionTitle}>🚚 Vehicle Information</Text>

      <View style={styles.infoCard}>
        <View style={styles.rowSpace}>
          <View>
            <Text style={styles.infoLabel}>Vehicle Number</Text>
            <Text style={styles.infoValue}>GR-1234</Text>
          </View>
          <View>
            <Text style={styles.infoLabel}>Type</Text>
            <Text style={styles.infoValue}>Truck - Medium</Text>
          </View>
        </View>

        <View style={styles.rowSpace}>
          <View>
            <Text style={styles.infoLabel}>Capacity</Text>
            <Text style={styles.infoValue}>500 kg</Text>
          </View>
          <View>
            <Text style={styles.infoLabel}>Status</Text>
            <Text style={styles.statusActive}>Active</Text>
          </View>
        </View>
      </View>

      {/* ----------- CONTACT INFO ----------- */}
      <Text style={styles.sectionTitle}>📞 Contact Information</Text>

      <View style={styles.contactBox}>
        <Ionicons name="mail-outline" size={24} color="#2e7d32" />
        <Text style={styles.contactText}>{email}</Text>
      </View>

      <View style={styles.contactBox}>
        <Ionicons name="call-outline" size={24} color="#2e7d32" />
        <Text style={styles.contactText}>+1 234 567 8901</Text>
      </View>

      {/* ----------- PERFORMANCE ----------- */}
      <Text style={styles.sectionTitle}>📊 This Month's Performance</Text>

      <View style={styles.performanceCard}>
        <View>
          <Text style={styles.performanceLabel}>Collections</Text>
          <Text style={styles.performanceValue}>47</Text>
        </View>

        <View>
          <Text style={styles.performanceLabel}>Avg Rating</Text>
          <Text style={styles.performanceValue}>4.9</Text>
        </View>
      </View>

      {/* ----------- ACHIEVEMENTS ----------- */}
      <Text style={styles.sectionTitle}>🏆 Achievements</Text>

      <View style={styles.achRow}>
        <View style={styles.achCard}>
          <MaterialCommunityIcons name="medal" size={28} color="#fff" />
          <Text style={styles.achText}>Top Driver</Text>
        </View>

        <View style={styles.achCard}>
          <MaterialCommunityIcons name="truck" size={28} color="#fff" />
          <Text style={styles.achText}>100 Trips</Text>
        </View>

        <View style={styles.achCard}>
          <Ionicons name="star" size={28} color="#fff" />
          <Text style={styles.achText}>5-Star</Text>
        </View>

        <View style={[styles.achCard, { backgroundColor: "#ccc" }]}>
          <Text style={styles.achText}>250 Trips</Text>
        </View>
      </View>

      {/* ----------- LOGOUT BUTTON ----------- */}
      <TouchableOpacity
  style={styles.logoutBtn}
  onPress={() =>
    navigation.reset({
      index: 0,
      routes: [{ name: "Role" }],
    })
  }
>
  <Ionicons name="log-out-outline" size={22} color="red" />
  <Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f1f3f4", flex: 1 },

  headerCard: {
    backgroundColor: "#2e7d32",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 25,
    alignItems: "center",
  },

  driverName: { fontSize: 24, fontWeight: "bold", color: "#fff", marginTop: 5 },
  driverId: { color: "#e0f2f1", fontSize: 14, marginTop: 2 },

  ratingRow: { flexDirection: "row", marginTop: 8 },
  ratingText: { color: "#fff", marginLeft: 4, fontSize: 14 },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    marginTop: 20,
  },

  statBox: {
    width: "32%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },

  statNum: { fontSize: 20, fontWeight: "bold", color: "#2e7d32" },
  statLabel: { fontSize: 12, color: "#777", marginTop: 4 },

  sectionTitle: { marginTop: 18, marginLeft: 20, fontSize: 18, fontWeight: "600" },

  infoCard: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 12,
  },

  rowSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  infoLabel: { color: "#777", fontSize: 13 },
  infoValue: { fontSize: 15, fontWeight: "600" },
  statusActive: {
    backgroundColor: "#c8e6c9",
    color: "#2e7d32",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    fontWeight: "bold",
  },

  contactBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },

  contactText: { marginLeft: 15, fontSize: 14, color: "#333" },

  performanceCard: {
    backgroundColor: "#c8e6c9",
    margin: 15,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  performanceLabel: { fontSize: 14, color: "#2e7d32" },
  performanceValue: { fontSize: 22, fontWeight: "bold", color: "#1b5e20" },

  achRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginVertical: 15,
  },

  achCard: {
    backgroundColor: "#2e7d32",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    width: 70,
  },

  achText: { marginTop: 5, color: "#fff", fontSize: 12, fontWeight: "600", textAlign: "center" },

  logoutBtn: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#ffe5e5",
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  logoutText: { color: "red", fontSize: 16, fontWeight: "600", marginLeft: 10 },
});