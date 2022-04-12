import React,{ useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {VictoryBar,VictoryChart, VictoryTheme} from "victory-native";


var API_URL = 'https://625576b38646add390d75d72.mockapi.io/iot'

const chart_bar_data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 16500 },
];

function Chart_Bar(props) {
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
    <View style={{ flex: 1 }}>
        <VictoryChart
          width={350}
          theme={VictoryTheme.material}
        >
          <VictoryBar data={data} x={(d) => d.quarter} y={(a) => a.earnings} />
        </VictoryChart>
    </View>
  );
}

export default Chart_Bar;
