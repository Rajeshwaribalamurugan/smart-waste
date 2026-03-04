import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RewardsScreen({ navigation }) {

  const totalPoints = 2450;

  const rewards = [
    { name: "Eco Shopping Bag", points: 500 },
    { name: "Plant Seedlings Kit", points: 750 },
    { name: "Bamboo Cutlery Set", points: 1000 },
    { name: "Compost Bin", points: 1500 },
    { name: "$10 Voucher", points: 2000 },
    { name: "Solar Power Bank", points: 3000 }
  ];

  const handleRedeem = (item) => {
    if (totalPoints >= item.points) {
      alert(`${item.name} Redeemed Successfully!`);
    } else {
      alert("Not enough points!");
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Rewards & Points</Text>
      <Text style={styles.subtitle}>
        Earn points for every collection
      </Text>

      {/* Points Card */}
      <View style={styles.pointsCard}>
        <Text style={styles.totalLabel}>Total Points</Text>
        <Text style={styles.totalPoints}>{totalPoints.toLocaleString()}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>32</Text>
            <Text>Total Pickups</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>87%</Text>
            <Text>Avg Score</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text>Rank</Text>
          </View>
        </View>
      </View>

      {/* Redeem Rewards */}
      <Text style={styles.sectionTitle}>Redeem Rewards</Text>

      <View style={styles.grid}>
        {rewards.map((item, index) => {
          const canRedeem = totalPoints >= item.points;

          return (
            <View key={index} style={styles.rewardCard}>
              <Ionicons
                name="gift-outline"
                size={30}
                color="#2e7d32"
              />

              <Text style={styles.rewardName}>{item.name}</Text>

              <Text style={styles.rewardPoints}>
                ⭐ {item.points} pts
              </Text>

              <TouchableOpacity
                style={[
                  styles.redeemBtn,
                  !canRedeem && styles.disabledBtn
                ]}
                disabled={!canRedeem}
                onPress={() => handleRedeem(item)}
              >
                <Text style={{ color: "#fff" }}>
                  {canRedeem ? "Redeem" : "Not Enough"}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>

      <View style={styles.activityCard}>
        <Text>Plastic Collection</Text>
        <Text style={{ color: "#2e7d32" }}>+50 pts</Text>
      </View>

      <View style={styles.activityCard}>
        <Text>Organic Waste</Text>
        <Text style={{ color: "#2e7d32" }}>+45 pts</Text>
      </View>

      <View style={styles.activityCard}>
        <Text>Redeemed: Eco Bag</Text>
        <Text style={{ color: "red" }}>-500 pts</Text>
      </View>

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5", padding: 20 },

  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 15 },

  pointsCard: {
    backgroundColor: "#2e7d32",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20
  },

  totalLabel: { color: "#c8e6c9" },
  totalPoints: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  statBox: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    width: "30%",
    alignItems: "center"
  },

  statNumber: { color: "#fff", fontWeight: "bold" },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 15
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  rewardCard: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2
  },

  rewardName: {
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5
  },

  rewardPoints: { marginBottom: 10 },

  redeemBtn: {
    backgroundColor: "#2e7d32",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8
  },

  disabledBtn: {
    backgroundColor: "#bbb"
  },

  activityCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    elevation: 2
  }
});