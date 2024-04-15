import React, { useEffect, useState } from 'react';
import { View, Animated, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Skeleton from ".././../../components/Skeleton"
import StatusContent from './stautusContent';

export default function Status() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
   setTimeout(() => {
     setLoading(false);
   }, 7000)
  }, []);

  return (
  <>
    { loading ? <Skeleton /> : <StatusContent /> }

    </>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1, 
       padding: 20,
     alignItems: 'center',
 },
  header: {
      fontSize: 20,
    },
    paragraphStyle: {
      fontSize: 16,
      lineHeight: 20,
      color: '#888', //Light gray color

   },
   topSection: {
     marginBottom: 20,
      justifyContent: 'center',
       alignItems: 'center'
     
   },
   midText: {
     alignItems: 'center'
     
   },
   referralText: {
    textAlign: 'center',
     alignSelf: 'center',
     fontSize: 18,
     fontWeight: 'bold',
     marginBottom: 10,
    
   },
   descriptionText: {
    textAlign: 'center',
     alignSelf: 'center',
     lineHeight: 20,
     fontSize: 14,
     color: '#888', //Light gray color
   },
    button: {
      backgroundColor: '#4fa66a',
      padding: 10,
      borderRadius: 5,
     width: '100%', 


    },
    buttonText: {
      color: '#fff', // White text
      textAlign: 'center',
      fontWeight: 'bold',
 
    },
codeText: {
fontSize: 14,

marginBottom: 10,
color: '#888', //Light gray color
},
codeContainer: {
  padding: 20,
flexDirection: 'row',
alignItems: 'center',
 backgroundColor: '#f0f0f0', 
 borderRadius: 17,
 borderWidth: 1,
 borderColor: 'orange'
},
copyButton: {
marginLeft: 10,
},
copyIcon: {
width: 20,
height: 20,
},
referralCode: {
flex: 1,
fontSize: 16,
},
codeSection: {
marginBottom: 30,
},
})