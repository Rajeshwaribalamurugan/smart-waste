import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

const handleLogout = () => {
  Alert.alert(
    "Logout",
    "Are you sure you want to logout?",
    [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        onPress: () => {
          navigation.getParent()?.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Role" }],
            })
          );
        },
      },
    ]
  );
};

export default function ProfileScreen({ navigation }) {

 

const handleLogout = () => {
  Alert.alert(
    "Logout",
    "Are you sure you want to logout?",
    [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        onPress: () => {
          navigation.getParent()?.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Role" }],
            })
          );
        },
      },
    ]
  );
};

  return (
    <ScrollView style={styles.container}>

      {/* Top Card */}
      <View style={styles.topCard}>
        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={40} color="#2e7d32" />
        </View>

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.member}>Eco Warrior Member</Text>
        <Text style={styles.level}>⭐ Level 5 • Since Jan 2026</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>32</Text>
            <Text style={styles.statLabel}>Pickups</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2,450</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>87%</Text>
            <Text style={styles.statLabel}>Score</Text>
          </View>
        </View>
      </View>

      {/* Personal Info */}
      <Text style={styles.sectionTitle}>Personal Information</Text>

      <View style={styles.infoCard}>
        <Text>Email</Text>
        <Text style={styles.infoValue}>john.doe@email.com</Text>
      </View>

      <View style={styles.infoCard}>
        <Text>Phone</Text>
        <Text style={styles.infoValue}>+1 234 567 8900</Text>
      </View>

      <View style={styles.infoCard}>
        <Text>Address</Text>
        <Text style={styles.infoValue}>
          123 Green Street, Eco City
        </Text>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutCard} onPress={handleLogout}>
        <Text style={{ color: "red", fontWeight: "bold" }}>
          Logout
        </Text>
      </TouchableOpacity>

      <Text style={styles.version}>EcoWaste v1.0.0</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5", padding: 15 },

  topCard: {
    backgroundColor: "#2e7d32",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20
  },

  avatar: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  name: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  member: { color: "#c8e6c9" },
  level: { color: "#fff", marginTop: 5 },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15
  },

  statBox: {
    backgroundColor: "#388e3c",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "30%"
  },

  statNumber: { color: "#fff", fontWeight: "bold" },
  statLabel: { color: "#c8e6c9", fontSize: 12 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10
  },

  infoCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2
  },

  infoValue: { fontWeight: "bold", marginTop: 5 },

  logoutCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f44336"
  },

  version: {
    textAlign: "center",
    marginTop: 20,
    color: "#777"
  }
});