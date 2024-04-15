import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Status from "./tabulate/status";
import Invite from "./tabulate/invite";
import { View } from "react-native"; 
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        textTransform: 'capitalize', // Capitalize first letter of each word
      },
      tabBarStyle: { /* Other tab bar styles (optional) */ },
      tabBarIndicatorStyle: {
        backgroundColor: '#4fa66a', // Your desired indicator color
        // height: 4, // Adjust height as needed
        // width: '20%', // Adjust width as needed (optional)
        // Other styles (borderRadius, margin, etc.)
      },
    }}>
      <Tab.Screen name="Invite" component={Invite} />
      <Tab.Screen name="Status" component={Status} />
    </Tab.Navigator>
  )
};

export default App;
 