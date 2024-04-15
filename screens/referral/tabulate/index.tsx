
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Status from "./status";
import Invite from "./invite";
import { View } from "react-native"; 
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const ReferralStack = () => {
  return ( 

    <Tab.Navigator>
      
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Invite" component={Invite} />
    </Tab.Navigator>
  )
};

export default ReferralStack;
 

// import { View, Text } from 'react-native'
// import React from 'react'

// const TabsPage = () => {
//   return (
//     <View>
//       <Text>  Index inside of the tabs folder</Text>
//     </View>
//   ) 
// }

// export default TabsPage