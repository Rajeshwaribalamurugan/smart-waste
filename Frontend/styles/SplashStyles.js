import { StyleSheet } from "react-native";

const SplashStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
  },

  logoCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,

    // Shadow (Figma style)
    elevation: 5,
  },

  logoImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 18,
    color: "#E8F5E9",
    marginBottom: 15,
  },

  tagline: {
    fontSize: 16,
    color: "#C8E6C9",
  },

});

export default SplashStyles;