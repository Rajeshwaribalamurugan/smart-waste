import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserTabs from "./UserTabs";
import DriverTabs from "./DriverTabs";

import UserDashboard from "../screens/UserDashboard";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import RoleScreen from "../screens/RoleScreen";

import DriverDashboard from "../screens/DriverDashboard";
import DriverMapScreen from "../screens/DriverMapScreen";
import DriverProfileScreen from "../screens/DriverProfileScreen";

import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import RequestPickupScreen from "../screens/RequestPickupScreen";
import TrackPickupScreen from "../screens/TrackPickupScreen";
import RewardsScreen from "../screens/RewardsScreen";
import AdminDashboardScreen from "../screens/AdminDashboardScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Role" component={RoleScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="UserTabs" component={UserTabs} />
        <Stack.Screen name="DriverTabs" component={DriverTabs} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="RequestPickup" component={RequestPickupScreen} />
        <Stack.Screen name="TrackPickup" component={TrackPickupScreen} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
        
        <Stack.Screen name="DriverDashboard" component={DriverDashboard} />
        <Stack.Screen name="DriverMap" component={DriverMapScreen} />
        <Stack.Screen name="DriverProfile" component={DriverProfileScreen} />
        
        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}