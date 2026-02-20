import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function RoleScreen() {

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5F5F5"
    }}>

      <Text style={{
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30
      }}>
        Select Your Role
      </Text>

      <TouchableOpacity style={{
        backgroundColor: "#2E7D32",
        padding: 15,
        borderRadius: 10,
        width: 200,
        marginBottom: 15
      }}>
        <Text style={{
          color: "white",
          textAlign: "center",
          fontSize: 18
        }}>
          User
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#1565C0",
        padding: 15,
        borderRadius: 10,
        width: 200
      }}>
        <Text style={{
          color: "white",
          textAlign: "center",
          fontSize: 18
        }}>
          Collector
        </Text>
      </TouchableOpacity>

    </View>
  );

}