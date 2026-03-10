import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DriverRouteScreen() {

  return (
    <View style={styles.container}>

      {/* MAP AREA */}
      <View style={styles.map}>

        {/* Route Header */}
        <View style={styles.routeCard}>
          <View>
            <Text style={styles.title}>Today's Route</Text>
            <Text style={styles.subtitle}>3 stops • 6.6 km total</Text>
          </View>

          <View style={styles.timeBox}>
            <Ionicons name="time-outline" size={18} color="#2e7d32" />
            <Text style={styles.time}>~45 min</Text>
            <Text style={styles.est}>Estimated</Text>
          </View>
        </View>

        {/* Driver Marker */}
        <View style={[styles.marker,{top:100,left:60}]}>
          <Ionicons name="navigate" size={22} color="#fff" />
        </View>

        <Text style={[styles.youHere,{top:150,left:45}]}>You are here</Text>

        {/* Stop 1 */}
        <View style={[styles.stopMarker,{top:180,left:120,backgroundColor:"#2F80ED"}]}>
          <Ionicons name="location" size={18} color="#fff"/>
        </View>

        <Text style={[styles.stopLabel,{top:225,left:110}]}>Plastic</Text>

        {/* Stop 2 */}
        <View style={[styles.stopMarker,{top:320,left:200,backgroundColor:"#2E7D32"}]}>
          <Ionicons name="location" size={18} color="#fff"/>
        </View>

        <Text style={[styles.stopLabel,{top:365,left:190}]}>Organic</Text>

        {/* Stop 3 */}
        <View style={[styles.stopMarker,{top:420,left:110,backgroundColor:"#F57C00"}]}>
          <Ionicons name="location" size={18} color="#fff"/>
        </View>

        <Text style={[styles.stopLabel,{top:465,left:105}]}>Paper</Text>

      </View>

      {/* BOTTOM PANEL */}
      <View style={styles.bottomPanel}>

        <TouchableOpacity style={styles.startBtn}>
          <Ionicons name="navigate-outline" size={20} color="#fff"/>
          <Text style={styles.startText}>Start Navigation</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity style={styles.smallBtn}>
            <Text>View List</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallBtn}>
            <Text>Optimize Route</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.nextStop}>
          <Text style={styles.next}>NEXT STOP</Text>
          <Text style={styles.address}>123 Green Street</Text>
          <Text>Plastic Waste • 1.2 km • 4 min</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

map:{
flex:1,
backgroundColor:"#c7d9e2"
},

routeCard:{
position:"absolute",
top:10,
left:10,
right:10,
flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"#fff",
padding:15,
borderRadius:12,
elevation:4
},

title:{
fontSize:16,
fontWeight:"bold"
},

subtitle:{
color:"gray"
},

timeBox:{
alignItems:"flex-end"
},

time:{
color:"#2e7d32",
fontWeight:"bold"
},

est:{
fontSize:10,
color:"gray"
},

marker:{
position:"absolute",
width:50,
height:50,
borderRadius:25,
backgroundColor:"#4CAF50",
justifyContent:"center",
alignItems:"center"
},

stopMarker:{
position:"absolute",
width:40,
height:40,
borderRadius:20,
justifyContent:"center",
alignItems:"center"
},

youHere:{
position:"absolute",
backgroundColor:"#4CAF50",
color:"#fff",
paddingHorizontal:10,
paddingVertical:4,
borderRadius:10
},

stopLabel:{
position:"absolute",
backgroundColor:"#fff",
paddingHorizontal:8,
paddingVertical:3,
borderRadius:8,
fontSize:12
},

bottomPanel:{
padding:15,
backgroundColor:"#fff",
borderTopLeftRadius:20,
borderTopRightRadius:20,
elevation:10
},

startBtn:{
flexDirection:"row",
backgroundColor:"#2E7D32",
padding:15,
borderRadius:10,
justifyContent:"center",
alignItems:"center",
marginBottom:10
},

startText:{
color:"#fff",
fontWeight:"bold",
marginLeft:8
},

row:{
flexDirection:"row",
justifyContent:"space-between"
},

smallBtn:{
backgroundColor:"#eee",
padding:12,
borderRadius:10,
width:"48%",
alignItems:"center"
},

nextStop:{
backgroundColor:"#c8e6c9",
marginTop:10,
padding:15,
borderRadius:10
},

next:{
color:"#2E7D32",
fontSize:12
},

address:{
fontWeight:"bold"
}

});