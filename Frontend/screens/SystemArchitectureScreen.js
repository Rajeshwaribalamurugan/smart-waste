import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SystemArchitectureScreen({ navigation }) {

return ( <ScrollView style={styles.container}>


  {/* Title */}
  <Text style={styles.title}>System Architecture</Text>
  <Text style={styles.subtitle}>Smart Waste Management Ecosystem</Text>

  {/* IoT Layer */}
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>IoT Layer - Smart Bins</Text>

    <View style={styles.row}>

      <View style={[styles.box,{backgroundColor:"#dbeafe"}]}>
        <Ionicons name="camera" size={24} color="#2563eb"/>
        <Text style={styles.boxTitle}>AI Camera</Text>
        <Text style={styles.small}>Waste Detection</Text>
      </View>

      <View style={[styles.box,{backgroundColor:"#ede9fe"}]}>
        <Ionicons name="wifi" size={24} color="#7c3aed"/>
        <Text style={styles.boxTitle}>Fill Sensors</Text>
        <Text style={styles.small}>Level Monitoring</Text>
      </View>

      <View style={[styles.box,{backgroundColor:"#ffedd5"}]}>
        <Ionicons name="hardware-chip" size={24} color="#ea580c"/>
        <Text style={styles.boxTitle}>Microcontroller</Text>
        <Text style={styles.small}>ESP32 / Arduino</Text>
      </View>

    </View>
  </View>

  <Ionicons name="arrow-down-circle" size={30} color="#2e7d32" style={styles.arrow}/>

  {/* Cloud */}
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>Cloud Infrastructure</Text>

    <View style={styles.cloudBox}>
      <Ionicons name="cloud" size={22} color="#2e7d32"/>
      <View style={{marginLeft:10}}>
        <Text style={styles.boxTitle}>Cloud Server</Text>
        <Text style={styles.small}>AWS / Azure / Google Cloud</Text>
      </View>
    </View>

    <View style={styles.cloudBox}>
      <Ionicons name="server" size={22} color="#2e7d32"/>
      <View style={{marginLeft:10}}>
        <Text style={styles.boxTitle}>Database</Text>
        <Text style={styles.small}>PostgreSQL / MongoDB</Text>
      </View>
    </View>

  </View>

  <Ionicons name="arrow-down-circle" size={30} color="#2e7d32" style={styles.arrow}/>

  {/* Application */}
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>Application Layer</Text>

    <View style={styles.row}>

      <View style={[styles.appBox,{backgroundColor:"#2e7d32"}]}>
        <Ionicons name="phone-portrait" size={24} color="#fff"/>
        <Text style={styles.appText}>User App</Text>
        <Text style={styles.appSmall}>Request & Track</Text>
      </View>

      <View style={[styles.appBox,{backgroundColor:"#2563eb"}]}>
        <Ionicons name="car" size={24} color="#fff"/>
        <Text style={styles.appText}>Driver App</Text>
        <Text style={styles.appSmall}>Route & Collect</Text>
      </View>

    </View>
  </View>

  {/* Data Flow */}
  <View style={styles.greenCard}>
    <Text style={styles.sectionTitleWhite}>Data Flow</Text>

    <Text style={styles.flow}>1  Sensors detect bin fill level & waste type</Text>
    <Text style={styles.flow}>2  Data sent to cloud via WiFi/LoRa</Text>
    <Text style={styles.flow}>3  AI processes & categorizes waste</Text>
    <Text style={styles.flow}>4  Alerts sent to users & drivers</Text>
    <Text style={styles.flow}>5  Admin monitors & optimizes routes</Text>
  </View>

  {/* Technologies */}
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>Technologies</Text>

    <View style={styles.techRow}>
      <View style={styles.techBox}>
        <Text style={styles.techTitle}>Frontend</Text>
        <Text>React + TypeScript</Text>
      </View>

      <View style={styles.techBox}>
        <Text style={styles.techTitle}>Backend</Text>
        <Text>Node.js + Express</Text>
      </View>
    </View>

    <View style={styles.techRow}>
      <View style={styles.techBox}>
        <Text style={styles.techTitle}>AI/ML</Text>
        <Text>TensorFlow / PyTorch</Text>
      </View>

      <View style={styles.techBox}>
        <Text style={styles.techTitle}>IoT</Text>
        <Text>ESP32 / MQTT</Text>
      </View>
    </View>
  </View>

  {/* Back Button */}
  <TouchableOpacity
    style={styles.backBtn}
    onPress={() => navigation.goBack()}
  >
    <Text style={{color:"#fff",fontWeight:"bold"}}>
      Back to Role Selection
    </Text>
  </TouchableOpacity>

</ScrollView>


);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#e8f5e9",
padding:15
},

title:{
fontSize:24,
fontWeight:"bold",
textAlign:"center"
},

subtitle:{
textAlign:"center",
color:"#555",
marginBottom:15
},

card:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
marginBottom:15
},

sectionTitle:{
fontWeight:"bold",
marginBottom:10,
textAlign:"center"
},

sectionTitleWhite:{
fontWeight:"bold",
color:"#fff",
marginBottom:10,
textAlign:"center"
},

row:{
flexDirection:"row",
justifyContent:"space-between"
},

box:{
width:"30%",
padding:10,
borderRadius:10,
alignItems:"center"
},

boxTitle:{
fontWeight:"bold",
fontSize:12,
marginTop:5
},

small:{
fontSize:11,
color:"#666"
},

arrow:{
alignSelf:"center",
marginBottom:10
},

cloudBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#e8f5e9",
padding:10,
borderRadius:8,
marginBottom:10
},

appBox:{
width:"48%",
padding:15,
borderRadius:10,
alignItems:"center"
},

appText:{
color:"#fff",
fontWeight:"bold",
marginTop:5
},

appSmall:{
color:"#e0e0e0",
fontSize:11
},

greenCard:{
backgroundColor:"#2e7d32",
padding:15,
borderRadius:12,
marginBottom:15
},

flow:{
color:"#fff",
marginBottom:5
},

techRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:10
},

techBox:{
backgroundColor:"#f3f4f6",
padding:10,
borderRadius:8,
width:"48%"
},

techTitle:{
fontWeight:"bold"
},

backBtn:{
backgroundColor:"#2e7d32",
padding:15,
borderRadius:10,
alignItems:"center",
marginBottom:20
}

});
