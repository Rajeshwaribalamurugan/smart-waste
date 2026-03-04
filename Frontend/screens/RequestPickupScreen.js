import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RequestPickupScreen({ navigation }) {
  const [selectedWaste, setSelectedWaste] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [notes, setNotes] = useState("");

  const wasteTypes = [
    { name: "Plastic", color: "#5E92E5" },
    { name: "Organic", color: "#4CAF6F" },
    { name: "Paper", color: "#E5984A" },
    { name: "Glass", color: "#4DB6AC" },
    { name: "Metal", color: "#8D949C" },
    { name: "E-Waste", color: "#EF5350" }
  ];

  const timeSlots = [
    "08:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 02:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM"
  ];

  const handleSchedule = () => {
    if (!selectedWaste || !selectedTime) {
      Alert.alert("Error", "Please select waste type and time slot");
      return;
    }

    Alert.alert("Success", "Pickup Scheduled Successfully!");
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Request Pickup</Text>
      <Text style={styles.subtitle}>Schedule your waste collection</Text>

      {/* Waste Type */}
      <Text style={styles.section}>Select Waste Type *</Text>

      <View style={styles.grid}>
        {wasteTypes.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.wasteButton,
              {
                backgroundColor:
                  selectedWaste === item.name
                    ? item.color
                    : item.color + "88"
              }
            ]}
            onPress={() => setSelectedWaste(item.name)}
          >
            <Text style={styles.wasteText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Address */}
      <Text style={styles.section}>Pickup Address *</Text>
      <View style={styles.inputBox}>
        <Ionicons name="location-outline" size={18} color="#777" />
        <Text style={{ marginLeft: 10 }}>
          123 Green Street, Eco City
        </Text>
      </View>

      {/* Date */}
      <Text style={styles.section}>Select Date *</Text>
      <View style={styles.inputBox}>
        <Ionicons name="calendar-outline" size={18} color="#777" />
        <Text style={{ marginLeft: 10 }}>dd-mm-yyyy</Text>
      </View>

      {/* Time Slot */}
      <Text style={styles.section}>Select Time Slot *</Text>

      {timeSlots.map((slot) => (
        <TouchableOpacity
          key={slot}
          style={[
            styles.timeBox,
            selectedTime === slot && styles.selectedTime
          ]}
          onPress={() => setSelectedTime(slot)}
        >
          <Ionicons name="time-outline" size={18} color="#777" />
          <Text style={{ marginLeft: 10 }}>{slot}</Text>
        </TouchableOpacity>
      ))}

      {/* Notes */}
      <Text style={styles.section}>Additional Notes (Optional)</Text>
      <TextInput
        placeholder="E.g., Gate code, special instructions..."
        style={styles.notes}
        multiline
        value={notes}
        onChangeText={setNotes}
      />

      {/* Estimated Weight */}
      <View style={styles.weightCard}>
        <Text style={{ fontSize: 16 }}>Estimated Weight</Text>
        <Text style={styles.weightText}>~5 kg</Text>
        <Text style={{ fontSize: 12 }}>
          Earn approximately 25 reward points
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.scheduleBtn} onPress={handleSchedule}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Schedule Pickup
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f5", padding: 20 },

  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 15 },

  section: { marginTop: 15, marginBottom: 10, fontWeight: "bold" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  wasteButton: {
    width: "48%",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12
  },

  wasteText: { color: "#fff", fontWeight: "bold" },

  inputBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  timeBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  selectedTime: {
    borderWidth: 2,
    borderColor: "#2e7d32"
  },

  notes: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    height: 80,
    textAlignVertical: "top"
  },

  weightCard: {
    backgroundColor: "#c8e6c9",
    padding: 20,
    borderRadius: 15,
    marginTop: 20
  },

  weightText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5
  },

  scheduleBtn: {
    backgroundColor: "#2e7d32",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20
  }
});