import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity,
TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RequestPickupScreen() {

const [wasteType,setWasteType] = useState("");
const [timeSlot,setTimeSlot] = useState("");
const [date,setDate] = useState(new Date());
const [showCalendar,setShowCalendar] = useState(false);

const wasteTypes = ["Plastic","Organic","Paper","Glass","Metal","E-Waste"];

const colors = ["#6c9be6","#4CAF50","#e49a45","#48a9a6","#7b8794","#e65159"];

const timeSlots = [
"08:00 AM - 10:00 AM",
"10:00 AM - 12:00 PM",
"12:00 PM - 02:00 PM",
"02:00 PM - 04:00 PM",
"04:00 PM - 06:00 PM"
];

return (

<ScrollView style={styles.container}>

<Text style={styles.title}>Request Pickup</Text>
<Text style={styles.subtitle}>Schedule your waste collection</Text>

{/* Waste Type */}
<Text style={styles.label}>Select Waste Type *</Text>

<View style={styles.grid}>

{wasteTypes.map((type,index)=>{

return(
<TouchableOpacity
key={index}
style={[
styles.typeBtn,
{backgroundColor:colors[index]},
wasteType===type && styles.selectedType
]}
onPress={()=>setWasteType(type)}
>

<Text style={styles.typeText}>{type}</Text>

</TouchableOpacity>
);

})}

</View>

{/* Address */}
<Text style={styles.label}>Pickup Address *</Text>

<View style={styles.inputBox}>
<Ionicons name="location-outline" size={18} color="#777"/>
<TextInput
placeholder="123 Green Street, Eco City"
style={styles.input}
/>
</View>

<Text style={styles.location}>Use current location</Text>

{/* Date */}
<Text style={styles.label}>Select Date *</Text>

<TouchableOpacity
style={styles.inputBox}
onPress={()=>setShowCalendar(true)}
>

<Ionicons name="calendar-outline" size={18} color="#777"/>

<Text style={{marginLeft:8}}>
{date.toDateString()}
</Text>

</TouchableOpacity>

{showCalendar && (

<DateTimePicker
value={date}
mode="date"
display="default"
onChange={(event,selectedDate)=>{

setShowCalendar(false);

if(selectedDate){
setDate(selectedDate);
}

}}
/>

)}

{/* Time */}
<Text style={styles.label}>Select Time Slot *</Text>

{timeSlots.map((slot,index)=>(

<TouchableOpacity
key={index}
style={[
styles.timeBtn,
timeSlot===slot && styles.timeSelected
]}
onPress={()=>setTimeSlot(slot)}
>

<Ionicons name="time-outline" size={18} color="#777"/>

<Text style={styles.timeText}>{slot}</Text>

</TouchableOpacity>

))}

{/* Notes */}
<Text style={styles.label}>Additional Notes (Optional)</Text>

<TextInput
placeholder="E.g. Gate code, special instructions..."
style={styles.notes}
multiline
/>

{/* Estimated */}
<View style={styles.estimateCard}>

<View>
<Text style={styles.weight}>Estimated Weight</Text>
<Text style={styles.kg}>~5 kg</Text>
<Text style={styles.points}>
Earn approximately 25 reward points
</Text>
</View>

<Ionicons name="trash-outline" size={24} color="#2e7d32"/>

</View>

{/* Button */}
<TouchableOpacity style={styles.btn}>
<Text style={styles.btnText}>Schedule Pickup</Text>
</TouchableOpacity>

<View style={{height:60}}/>

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

label:{
fontWeight:"600",
marginTop:10,
marginBottom:5
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

typeBtn:{
width:"48%",
padding:12,
borderRadius:10,
marginBottom:10,
alignItems:"center"
},

selectedType:{
borderWidth:2,
borderColor:"#2e7d32"
},

typeText:{
color:"#fff",
fontWeight:"bold"
},

inputBox:{
flexDirection:"row",
alignItems:"center",
borderWidth:1,
borderColor:"#ddd",
borderRadius:10,
padding:10
},

input:{
marginLeft:8,
flex:1
},

location:{
color:"#2e7d32",
fontSize:12,
marginTop:5
},

timeBtn:{
flexDirection:"row",
alignItems:"center",
borderWidth:1,
borderColor:"#ddd",
borderRadius:10,
padding:12,
marginBottom:8
},

timeSelected:{
borderColor:"#2e7d32",
backgroundColor:"#ecf8ee"
},

timeText:{
marginLeft:8
},

notes:{
borderWidth:1,
borderColor:"#ddd",
borderRadius:10,
padding:10,
height:70,
textAlignVertical:"top"
},

estimateCard:{
flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"#cfe8d2",
padding:15,
borderRadius:10,
marginTop:10
},

weight:{
fontSize:12
},

kg:{
fontWeight:"bold",
fontSize:18
},

points:{
fontSize:11,
color:"#2e7d32"
},

btn:{
backgroundColor:"#7dbb7f",
padding:15,
borderRadius:10,
alignItems:"center",
marginTop:10
},

btnText:{
color:"#fff",
fontWeight:"bold"
}

});