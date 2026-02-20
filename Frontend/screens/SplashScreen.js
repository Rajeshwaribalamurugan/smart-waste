import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import SplashStyles from "../styles/SplashStyles";

export default function SplashScreen({ navigation }) {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    // Fade animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate after 3 sec
    setTimeout(() => {
      navigation.replace("Role");
    }, 3000);

  }, []);

  return (

    <View style={SplashStyles.container}>

      <Animated.View style={{ opacity: fadeAnim, alignItems: "center" }}>

        <View style={SplashStyles.logoCircle}>
          <Image
            source={require("../assets/recycle.png")}
            style={SplashStyles.logoImage}
          />
        </View>

        <Text style={SplashStyles.title}>
          EcoWaste
        </Text>

        <Text style={SplashStyles.subtitle}>
          Smart Waste Management
        </Text>

        <Text style={SplashStyles.tagline}>
          🌱 Building a greener tomorrow
        </Text>

      </Animated.View>

    </View>

  );

}