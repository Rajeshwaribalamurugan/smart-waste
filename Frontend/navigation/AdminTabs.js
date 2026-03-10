
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


import AdminDashboardScreen from "../screens/AdminDashboardScreen";
import DriversScreen from "../screens/DriversScreen";
import TasksScreen from "../screens/TasksScreen";
import AdminAnalytics from "../screens/AdminAnalytics";

const Tab = createBottomTabNavigator();

export default function AdminTabs({ route }) {

  const user = route?.params?.user;

  return (
    <Tab.Navigator
      screenOptions={({ route: tabRoute}) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {

          if(tabRoute.name==="Dashboard")
            return <Ionicons name="home-outline" size={size} color={color}/>

          if(tabRoute.name==="Drivers")
            return <Ionicons name="car-outline" size={size} color={color}/>

          if(tabRoute.name==="Tasks")
            return <Ionicons name="clipboard-outline" size={size} color={color}/>

          if(tabRoute.name==="Analytics")
            return <Ionicons name="analytics-outline" size={size} color={color}/>

          },
        })}
      >

      <Tab.Screen
        name="Dashboard"
        component={AdminDashboardScreen}
        initialParams={{ user }}
      />

      <Tab.Screen name="Drivers"
       component={DriversScreen} />

      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        initialParams={{ user }}
      />

      <Tab.Screen
        name="Analytics"
        component={AdminAnalytics}
        initialParams={{ user }}
      />

    </Tab.Navigator>
  );
}

