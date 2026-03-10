import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { BarChart, PieChart, LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function AdminAnalytics() {

  const dailyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [45, 52, 47, 60, 55, 38, 44]
      }
    ]
  };

  const userGrowth = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        data: [900, 1050, 1120, 1200]
      }
    ]
  };

  const wasteData = [
    {
      name: "Plastic",
      population: 32,
      color: "#2E86DE",
      legendFontColor: "#333",
      legendFontSize: 12
    },
    {
      name: "Organic",
      population: 28,
      color: "#27AE60",
      legendFontColor: "#333",
      legendFontSize: 12
    },
    {
      name: "Paper",
      population: 18,
      color: "#F39C12",
      legendFontColor: "#333",
      legendFontSize: 12
    },
    {
      name: "Glass",
      population: 12,
      color: "#16A085",
      legendFontColor: "#333",
      legendFontSize: 12
    },
    {
      name: "Metal",
      population: 7,
      color: "#95A5A6",
      legendFontColor: "#333",
      legendFontSize: 12
    },
    {
      name: "E-Waste",
      population: 3,
      color: "#E74C3C",
      legendFontColor: "#333",
      legendFontSize: 12
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`,
    labelColor: () => "#333"
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Analytics</Text>
      <Text style={styles.subtitle}>System insights and statistics</Text>

      {/* Top Cards */}
      <View style={styles.cardRow}>
        <View style={[styles.card, { backgroundColor: "#2ecc71" }]}>
          <Text style={styles.cardNumber}>341</Text>
          <Text style={styles.cardText}>Total Pickups</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#3498db" }]}>
          <Text style={styles.cardNumber}>1,247</Text>
          <Text style={styles.cardText}>Active Users</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={[styles.card, { backgroundColor: "#e67e22" }]}>
          <Text style={styles.cardNumber}>87%</Text>
          <Text style={styles.cardText}>Avg Segregation</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#16a085" }]}>
          <Text style={styles.cardNumber}>2.5T</Text>
          <Text style={styles.cardText}>Waste Collected</Text>
        </View>
      </View>

      {/* Bar Chart */}
      <Text style={styles.chartTitle}>Daily Pickups (This Week)</Text>

      <BarChart
        data={dailyData}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />

      {/* Pie Chart */}
      <Text style={styles.chartTitle}>Waste Type Distribution</Text>

      <PieChart
        data={wasteData}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"10"}
        absolute
      />

      {/* Line Chart */}
      <Text style={styles.chartTitle}>User Growth</Text>

      <LineChart
        data={userGrowth}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        bezier
      />

      {/* Monthly Summary */}
      <View style={styles.summary}>
        <View>
          <Text style={styles.summaryNumber}>3.2 tons</Text>
          <Text>CO₂ Saved</Text>
        </View>

        <View>
          <Text style={styles.summaryNumber}>156</Text>
          <Text>Trees Planted</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F4F6F7"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold"
  },

  subtitle: {
    color: "gray",
    marginBottom: 15
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },

  card: {
    width: "48%",
    padding: 20,
    borderRadius: 10
  },

  cardNumber: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold"
  },

  cardText: {
    color: "#fff",
    marginTop: 5
  },

  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  },

  chart: {
    marginVertical: 10,
    borderRadius: 10
  },

  summary: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#D5F5E3",
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },

  summaryNumber: {
    fontSize: 20,
    fontWeight: "bold"
  }
});