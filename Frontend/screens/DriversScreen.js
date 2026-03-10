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

export default function DriversScreen() {

const [showForm,setShowForm]=useState(false);

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [vehicle,setVehicle]=useState("");

const [drivers,setDrivers]=useState([
{
id:1,
name:"Mike Johnson",
email:"mike@ecowaste.com",
phone:"+1 234 567 8901",
vehicle:"GR-1234"
},
{
id:2,
name:"Sarah Williams",
email:"sarah.w@ecowaste.com",
phone:"+1 234 567 8902",
vehicle:"GR-5678"
}
]);

const createDriver=()=>{

if(!name || !email || !phone || !vehicle){
alert("Fill all fields");
return;
}

const newDriver={
id:Date.now(),
name,
email,
phone,
vehicle
};

setDrivers([...drivers,newDriver]);

setShowForm(false);

setName("");
setEmail("");
setPhone("");
setVehicle("");

};

return(

<ScrollView style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<View>
<Text style={styles.title}>Driver Management</Text>
<Text style={styles.subtitle}>Manage driver accounts</Text>
</View>

<TouchableOpacity
style={styles.addBtn}
onPress={()=>setShowForm(true)}
>
<Ionicons name="person-add" size={22} color="#fff"/>
</TouchableOpacity>

</View>


{/* CREATE DRIVER FORM */}

{showForm && (

<View style={styles.formCard}>

<Text style={styles.formTitle}>Create New Driver Account</Text>

<TextInput
placeholder="Full Name"
style={styles.input}
value={name}
onChangeText={setName}
/>

<TextInput
placeholder="Email"
style={styles.input}
value={email}
onChangeText={setEmail}
/>

<TextInput
placeholder="Phone"
style={styles.input}
value={phone}
onChangeText={setPhone}
/>

<TextInput
placeholder="Vehicle Number"
style={styles.input}
value={vehicle}
onChangeText={setVehicle}
/>

<View style={styles.btnRow}>

<TouchableOpacity
style={styles.createBtn}
onPress={createDriver}
>
<Text style={styles.btnText}>Create Account</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.cancelBtn}
onPress={()=>setShowForm(false)}
>
<Text>Cancel</Text>
</TouchableOpacity>

</View>

</View>

)}


{/* DRIVER LIST */}

{drivers.map((d)=>(

<View key={d.id} style={styles.driverCard}>

<View style={styles.row}>

<View style={styles.avatar}>
<Text style={{color:"#fff",fontWeight:"bold"}}>
{d.name.charAt(0)}
</Text>
</View>

<View style={{marginLeft:10}}>

<Text style={styles.driverName}>{d.name}</Text>
<Text style={styles.info}>{d.email}</Text>
<Text style={styles.info}>{d.phone}</Text>
<Text style={styles.info}>Vehicle: {d.vehicle}</Text>

</View>

</View>

</View>

))}

</ScrollView>

);
}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f4f6f5",
padding:15
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:15
},

title:{
fontSize:22,
fontWeight:"bold"
},

subtitle:{
color:"#777"
},

addBtn:{
backgroundColor:"#2e7d32",
width:40,
height:40,
borderRadius:10,
justifyContent:"center",
alignItems:"center"
},

formCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
marginBottom:20,
elevation:2
},

formTitle:{
fontWeight:"bold",
marginBottom:10
},

input:{
backgroundColor:"#f1f1f1",
padding:12,
borderRadius:8,
marginBottom:10
},

btnRow:{
flexDirection:"row",
justifyContent:"space-between"
},

createBtn:{
backgroundColor:"#2e7d32",
padding:12,
borderRadius:8,
flex:1,
alignItems:"center",
marginRight:10
},

cancelBtn:{
backgroundColor:"#ddd",
padding:12,
borderRadius:8,
flex:1,
alignItems:"center"
},

btnText:{
color:"#fff",
fontWeight:"bold"
},

driverCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
marginBottom:10,
elevation:2
},

row:{
flexDirection:"row",
alignItems:"center"
},

avatar:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#2e7d32",
justifyContent:"center",
alignItems:"center"
},

driverName:{
fontWeight:"bold"
},

info:{
color:"#777",
fontSize:12
}

});