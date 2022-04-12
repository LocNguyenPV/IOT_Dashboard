import React,{ useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {  VictoryPie,} from "victory-native";


var API_URL = 'https://625576b38646add390d75d72.mockapi.io/iot'

function Chart_Pie(props) {
  const [data, setData] = useState([]);
  const get_pie_data = async () => {
    try {
     const response = await fetch(`${API_URL}/pie`);
     const json = await response.json();
     setData(json);
    return json;
   } catch (error) {
     console.error(error);
   }
 }

  useEffect(() => {
    get_pie_data();
  }, []);
 
  return (
    <View style={{ flex: 1 }}>
       <VictoryPie data={data} style={{ flex: 1 }} />
    </View>
  );
}

export default Chart_Pie;
