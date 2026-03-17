import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AIGuideScreen() {

const [selected,setSelected] = useState(null);

const categories = [
{
name:"Plastic",
items:"6 items",
color:"#3b82f6",
list:["Bottles","Containers","Bags","Food packaging","Straws","Cups"],
tip:"Rinse before disposal. Remove caps and labels."
},
{
name:"Organic",
items:"6 items",
color:"#16a34a",
list:["Food scraps","Vegetable peels","Fruit waste","Coffee grounds","Tea bags","Garden waste"],
tip:"Compost when possible."
},
{
name:"Paper",
items:"6 items",
color:"#ea580c",
list:["Newspapers","Cardboard","Office paper","Magazines","Books","Paper bags"],
tip:"Keep paper dry before recycling."
},
{
name:"Glass",
items:"4 items",
color:"#0d9488",
list:["Bottles","Jars","Containers","Broken glass (wrapped)"],
tip:"Wrap broken glass before disposal."
},
{
name:"Metal",
items:"4 items",
color:"#4b5563",
list:["Cans","Aluminum foil","Metal containers","Bottle caps"],
tip:"Rinse metal containers before recycling."
},
{
name:"E-Waste",
items:"5 items",
color:"#ef4444",
list:["Batteries","Electronics","Cables","Light bulbs","Circuit boards"],
tip:"Special handling required. Contact collection center."
}
];

return (

<ScrollView style={styles.container}>

<Text style={styles.title}>AI Waste Guide</Text> <Text style={styles.subtitle}>
Learn how to properly segregate your waste </Text>

{/* AI Scanner */}

<View style={styles.scanCard}>

<View>
<Text style={styles.scanTitle}>AI Scanner</Text>
<Text style={styles.scanSub}>Point camera at waste item</Text>
</View>

<View style={styles.cameraIcon}>
<Ionicons name="camera" size={20} color="#fff"/>
</View>

</View>

<TouchableOpacity style={styles.scanBtn}>
<Text style={styles.scanBtnText}>Start Scanning</Text>
</TouchableOpacity>

<Text style={styles.section}>Waste Categories</Text>

<View style={styles.grid}>

{categories.map((item,index)=>(

<TouchableOpacity
key={index}
style={[styles.card,{backgroundColor:item.color}]}
onPress={()=>setSelected(item)}

>

<Text style={styles.cardTitle}>{item.name}</Text> <Text style={styles.cardSub}>{item.items}</Text>

<View style={styles.circle}/>

</TouchableOpacity>

))}

</View>

{/* SHOW ONLY SELECTED CATEGORY */}

{selected && (

<View style={styles.detailCard}>

<View style={styles.row}>

<View style={[styles.infoIcon,{backgroundColor:selected.color}]}>
<Ionicons name="information-circle" size={18} color="#fff"/>
</View>

<Text style={styles.detailTitle}>{selected.name} Waste</Text>

</View>

<Text style={styles.itemsTitle}>Items Include:</Text>

<View style={styles.itemsWrap}>

{selected.list.map((item,i)=>(

<Text key={i} style={styles.tag}>{item}</Text>

))}

</View>

<View style={styles.tipBox}>

<Text style={styles.tipTitle}>✔ Disposal Tips:</Text> <Text style={styles.tipText}>{selected.tip}</Text>

</View>

</View>

)}

{/* GENERAL TIPS */}

<View style={styles.generalTips}>

<Text style={styles.generalTitle}>General Tips:</Text>

<Text style={styles.tipLine}>✔ Always rinse containers before disposal</Text> <Text style={styles.tipLine}>✔ Remove labels and caps when possible</Text> <Text style={styles.tipLine}>✔ Keep different waste types separate</Text>

</View>

<View style={{height:80}}/>

</ScrollView>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f4f6f5",
padding:16
},

title:{
fontSize:22,
fontWeight:"bold"
},

subtitle:{
color:"#666",
marginBottom:15
},

scanCard:{
backgroundColor:"#2e7d32",
padding:16,
borderRadius:12,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

scanTitle:{
color:"#fff",
fontWeight:"bold"
},

scanSub:{
color:"#d1fae5",
fontSize:12
},

cameraIcon:{
backgroundColor:"#4caf50",
padding:10,
borderRadius:20
},

scanBtn:{
backgroundColor:"#fff",
padding:12,
borderRadius:10,
alignItems:"center",
marginTop:10,
marginBottom:15
},

scanBtnText:{
color:"#2e7d32",
fontWeight:"bold"
},

section:{
fontWeight:"bold",
marginBottom:10
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

card:{
width:"48%",
padding:18,
borderRadius:14,
marginBottom:12
},

cardTitle:{
color:"#fff",
fontWeight:"bold"
},

cardSub:{
color:"#e5e7eb",
fontSize:12
},

circle:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"rgba(255,255,255,0.3)",
position:"absolute",
right:10,
bottom:10
},

detailCard:{
backgroundColor:"#fff",
borderRadius:12,
padding:16,
marginTop:10,
borderWidth:1,
borderColor:"#d4e7d6"
},

row:{
flexDirection:"row",
alignItems:"center"
},

infoIcon:{
width:30,
height:30,
borderRadius:15,
justifyContent:"center",
alignItems:"center",
marginRight:10
},

detailTitle:{
fontWeight:"bold",
fontSize:16
},

itemsTitle:{
marginTop:10,
fontWeight:"bold"
},

itemsWrap:{
flexDirection:"row",
flexWrap:"wrap",
marginTop:6
},

tag:{
backgroundColor:"#dbeafe",
paddingHorizontal:10,
paddingVertical:4,
borderRadius:12,
marginRight:6,
marginBottom:6,
fontSize:12
},

tipBox:{
backgroundColor:"#cfe8d2",
padding:12,
borderRadius:10,
marginTop:10
},

tipTitle:{
fontWeight:"bold",
color:"#2e7d32"
},

tipText:{
fontSize:13
},

generalTips:{
backgroundColor:"#cfe8d2",
padding:14,
borderRadius:12,
marginTop:15
},

generalTitle:{
fontWeight:"bold",
marginBottom:6
},

tipLine:{
fontSize:13,
marginBottom:2
}

});
