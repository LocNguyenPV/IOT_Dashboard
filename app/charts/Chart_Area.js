import React,{ useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {  VictoryChart,VictoryTheme,VictoryArea,} from "victory-native";


var API_URL = 'https://625576b38646add390d75d72.mockapi.io/iot'

function Chart_Area(props) {
  const [data, setData] = useState([]);
  const get_area_data = async () => {
    try {
     const response = await fetch(`${API_URL}/area`);
     const json = await response.json();
     setData(json);
    return json;
   } catch (error) {
     console.error(error);
   }
 }

  useEffect(() => {
    get_area_data();
  }, []);
 
  return (
    <View style={{ flex: 1 }}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryArea
            style={{ data: { stroke: "#c43a31", strokeWidth: 15, strokeLinecap: "round" } }}
            data={[
              { x: 1, y: 2, y0: 0 },
              { x: 2, y: 3, y0: 1 },
              { x: 3, y: 5, y0: 1 },
              { x: 4, y: 4, y0: 2 },
              { x: 5, y: 6, y0: 2 },
            ]}
          />
        </VictoryChart>
    </View>
  );
}

export default Chart_Area;
