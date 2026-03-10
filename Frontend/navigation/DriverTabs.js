import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DriverDashboard from "../screens/DriverDashboard";
import DriverMapScreen from "../screens/DriverRouteScreen";
import DriverProfileScreen from "../screens/DriverProfileScreen";

const Tab = createBottomTabNavigator();

export default function DriverTabs({ route }) {

  const { user } = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2e7d32",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Jobs") iconName = "briefcase-outline";
          else if (route.name === "Map") iconName = "map-outline";
          else if (route.name === "Profile") iconName = "person-outline";

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Jobs"
        component={DriverDashboard}
        initialParams={{ user }}
      />

      <Tab.Screen
        name="Map"
        component={DriverMapScreen}
        initialParams={{ user }}
      />

      <Tab.Screen
        name="Profile"
        component={DriverProfileScreen}
        initialParams={{ user }}
      />
    </Tab.Navigator>
  );
}