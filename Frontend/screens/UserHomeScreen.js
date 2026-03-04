import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function UserHomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>John Doe</Text>
      </View>

      {/* Score Card */}
      <View style={styles.scoreCard}>
        <Text>Today's Segregation Score</Text>
        <Text style={styles.score}>87 /100</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}></View>
        </View>
        <Text style={{ marginTop: 5 }}>+5% from yesterday</Text>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.grid}>
        <View style={styles.greenBox}>
          <Text style={styles.boxTitle}>Request Pickup</Text>
          <Text style={styles.boxSub}>Schedule collection</Text>
        </View>

        <View style={styles.whiteBox}>
          <Text style={styles.boxTitle}>AI Guide</Text>
          <Text style={styles.boxSub}>Identify waste type</Text>
        </View>

        <View style={styles.whiteBox}>
          <Text style={styles.boxTitle}>Track Pickup</Text>
          <Text style={styles.boxSub}>Live location</Text>
        </View>

        <View style={styles.whiteBox}>
          <Text style={styles.boxTitle}>My Rewards</Text>
          <Text style={styles.boxSub}>2,450 points</Text>
        </View>
      </View>

      {/* Recent Pickups */}
      <Text style={styles.sectionTitle}>Recent Pickups</Text>

      <View style={styles.pickupCard}>
        <Text>Plastic Waste</Text>
        <Text>Feb 18  +50 pts</Text>
      </View>

      <View style={styles.pickupCard}>
        <Text>Organic Waste</Text>
        <Text>Feb 19  Tracking</Text>
      </View>

      {/* Eco Tip */}
      <Text style={styles.sectionTitle}>Eco Tip of the Day</Text>

      <View style={styles.tipBox}>
        <Text style={{ color: "white" }}>
          Rinse plastic containers before recycling to prevent contamination and improve recycling quality!
        </Text>
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
  header: {
    marginBottom: 20,
  },
  hello: {
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scoreCard: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  score: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  progressFill: {
    width: "87%",
    height: 8,
    backgroundColor: "#2E7D32",
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  greenBox: {
    backgroundColor: "#2E7D32",
    width: "48%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  whiteBox: {
    backgroundColor: "white",
    width: "48%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  boxTitle: {
    fontWeight: "bold",
  },
  boxSub: {
    fontSize: 12,
    marginTop: 5,
  },
  pickupCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  tipBox: {
    backgroundColor: "#2E7D32",
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },
});