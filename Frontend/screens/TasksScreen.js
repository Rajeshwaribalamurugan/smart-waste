import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TasksScreen() {

const [selectedPickup, setSelectedPickup] = useState(null);
const [selectedDriver, setSelectedDriver] = useState(null);

const pickups = [
{
id: 1,
address: "123 Green Street, Eco City",
type: "Plastic",
time: "10:00 AM",
color: "#3b82f6"
},
{
id: 2,
address: "456 Park Avenue, Green District",
type: "Organic",
time: "11:00 AM",
color: "#16a34a"
}
];

const drivers = [
{ id: 1, name: "Mike Johnson", initials: "M" },
{ id: 2, name: "Sarah Williams", initials: "SW" }
];

const [tasks, setTasks] = useState([
{
address: "789 Eco Lane, Nature Valley",
type: "Paper",
time: "02:00 PM",
driver: "Mike Johnson"
}
]);

const assignTask = () => {
if (!selectedPickup || !selectedDriver) return;

```
const pickup = pickups.find(p => p.id === selectedPickup);
const driver = drivers.find(d => d.id === selectedDriver);

const newTask = {
  address: pickup.address,
  type: pickup.type,
  time: pickup.time,
  driver: driver.name
};

setTasks([...tasks, newTask]);

setSelectedPickup(null);
setSelectedDriver(null);
```

};

return ( <ScrollView style={styles.container}>

```
  <Text style={styles.title}>Task Assignment</Text>
  <Text style={styles.subtitle}>Assign pickups to drivers</Text>

  {/* STATS */}
  <View style={styles.statsRow}>

    <View style={styles.statBox}>
      <Text style={styles.red}>2</Text>
      <Text style={styles.statText}>Unassigned</Text>
    </View>

    <View style={styles.statBox}>
      <Text style={styles.green}>1</Text>
      <Text style={styles.statText}>Assigned</Text>
    </View>

    <View style={styles.statBox}>
      <Text style={styles.blue}>2</Text>
      <Text style={styles.statText}>Available</Text>
    </View>

  </View>

  {/* QUICK ASSIGN */}
  <View style={styles.card}>

    <Text style={styles.sectionTitle}>Quick Assign</Text>

    <Text style={styles.label}>Select Pickup Request</Text>

    {pickups.map((item) => (
      <TouchableOpacity
        key={item.id}
        style={[
          styles.pickupBox,
          selectedPickup === item.id && styles.selectedBox
        ]}
        onPress={() => setSelectedPickup(item.id)}
      >
        <View style={[styles.locationIcon,{backgroundColor:item.color}]}>
          <Ionicons name="location" size={16} color="#fff" />
        </View>

        <View style={{ marginLeft:10 }}>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.small}>
            {item.type} • {item.time}
          </Text>
        </View>
      </TouchableOpacity>
    ))}

    <Text style={styles.label}>Assign to Driver</Text>

    {drivers.map((driver) => (
      <TouchableOpacity
        key={driver.id}
        style={[
          styles.driverBox,
          selectedDriver === driver.id && styles.selectedBox
        ]}
        onPress={() => setSelectedDriver(driver.id)}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{driver.initials}</Text>
        </View>

        <View>
          <Text style={styles.driverName}>{driver.name}</Text>
          <Text style={styles.available}>Available</Text>
        </View>

      </TouchableOpacity>
    ))}

    <TouchableOpacity style={styles.assignBtn} onPress={assignTask}>
      <Text style={styles.assignText}>Assign Task</Text>
    </TouchableOpacity>

  </View>

  {/* TODAY'S ASSIGNMENTS */}
  <Text style={styles.sectionTitle}>Today's Assignments</Text>

  {tasks.map((task,index)=>(

    <View key={index} style={styles.taskCard}>

      <View style={styles.taskRow}>

        <View style={styles.orangeIcon}>
          <Ionicons name="location" size={16} color="#fff"/>
        </View>

        <View style={{marginLeft:10}}>
          <Text style={styles.address}>{task.address}</Text>
          <Text style={styles.small}>
            {task.type} • {task.time}
          </Text>
        </View>

        <Ionicons
          name="checkmark-circle"
          size={20}
          color="#22c55e"
          style={{marginLeft:"auto"}}
        />

      </View>

      <View style={styles.assignedBox}>
        <Ionicons name="person" size={14} color="#2e7d32"/>
        <Text style={styles.assignedText}>
          Assigned to: {task.driver}
        </Text>
      </View>

    </View>

  ))}

</ScrollView>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f4f6f5",
padding:15
},

title:{
fontSize:22,
fontWeight:"bold"
},

subtitle:{
color:"#777",
marginBottom:15
},

statsRow:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:15
},

statBox:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
width:"30%",
alignItems:"center",
elevation:2
},

statText:{
fontSize:12,
color:"#555"
},

red:{color:"#ef4444",fontSize:20,fontWeight:"bold"},
green:{color:"#16a34a",fontSize:20,fontWeight:"bold"},
blue:{color:"#2563eb",fontSize:20,fontWeight:"bold"},

card:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
borderWidth:1,
borderColor:"#cce5cc",
marginBottom:20
},

sectionTitle:{
fontSize:16,
fontWeight:"bold",
marginBottom:10
},

label:{
marginTop:10,
marginBottom:5,
fontWeight:"500"
},

pickupBox:{
flexDirection:"row",
alignItems:"center",
padding:12,
borderRadius:10,
borderWidth:1,
borderColor:"#ddd",
marginBottom:10
},

locationIcon:{
width:28,
height:28,
borderRadius:8,
justifyContent:"center",
alignItems:"center"
},

driverBox:{
flexDirection:"row",
alignItems:"center",
padding:12,
borderRadius:10,
borderWidth:1,
borderColor:"#ddd",
marginBottom:10
},

avatar:{
width:36,
height:36,
borderRadius:18,
backgroundColor:"#4CAF50",
justifyContent:"center",
alignItems:"center",
marginRight:10
},

avatarText:{
color:"#fff",
fontWeight:"bold"
},

driverName:{
fontWeight:"600"
},

available:{
color:"#16a34a",
fontSize:12
},

selectedBox:{
borderColor:"#22c55e",
backgroundColor:"#f0fff4"
},

assignBtn:{
backgroundColor:"#8bc08b",
padding:14,
borderRadius:10,
alignItems:"center",
marginTop:10
},

assignText:{
color:"#fff",
fontWeight:"bold"
},

taskCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
marginBottom:10,
borderWidth:1,
borderColor:"#cce5cc"
},

taskRow:{
flexDirection:"row",
alignItems:"center"
},

orangeIcon:{
backgroundColor:"#f59e0b",
width:28,
height:28,
borderRadius:8,
justifyContent:"center",
alignItems:"center"
},

address:{
fontWeight:"600"
},

small:{
fontSize:12,
color:"#777"
},

assignedBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#dff5e1",
padding:8,
borderRadius:8,
marginTop:10
},

assignedText:{
marginLeft:5,
color:"#2e7d32"
}

});
