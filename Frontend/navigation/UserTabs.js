import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import UserDashboard from "../screens/UserDashboard";
import RewardsScreen from "../screens/RewardsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function UserTabs({ route }) {
  const { user } = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2e7d32",
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Rewards") iconName = "gift-outline";
          else if (route.name === "Alerts") iconName = "notifications-outline";
          else if (route.name === "Profile") iconName = "person-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* PASS USER DATA */}
      <Tab.Screen
        name="Home"
        component={UserDashboard}
        initialParams={{ user }}
      />

      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        initialParams={{ user }}
      />

      <Tab.Screen
        name="Alerts"
        component={NotificationsScreen}
        initialParams={{ user }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user }}
      />
    </Tab.Navigator>
  );
}