import React,{ useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Chart_Bar from "../charts/Chart_Bar";
import Chart_Area from "./Chart_Area";
import Chart_Pie from "./Chart_Pie";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    padding: 10,
  },
});
var API_URL = 'https://625576b38646add390d75d72.mockapi.io/iot'

const chart_bar_data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 16500 },
];  
function Chart(props) {
  const [data, setData] = useState([]);
  const get_bar_data = async () => {
    try {
     const response = await fetch(`${API_URL}/bar`);
     const json = await response.json();
     setData(json.items);
    return json.items;
   } catch (error) {
     console.error(error);
   }
 }

  useEffect(() => {
    get_bar_data();
  }, []);
 
  return (
    <View style={styles.container}>
      <ScrollView>
        <Chart_Bar />
        <Chart_Pie />
        <Chart_Area />
      </ScrollView>
    </View>
  );
}

export default Chart;
