import React from 'react';
import { View, Animated, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Skeleton } from 'moti/skeleton';

export default function Status() {
  const SkeletonCommonProps = {
    colorMode: 'light',
    transition: {
      type: 'timing',
      duration: 2000
    },
    backgroundColor: '#D4D4D4',
  } as const;

  const image = "https://media.istockphoto.com/id/1371970572/photo/png-photo-europian-robin-in-nature.webp?b=1&s=170667a&w=0&k=20&c=5Pz1XZlD9n2uaW9_RdTLRIUarvH0rVB9WLAov92keAo=";

  return (
    <View style={styles.container}>
    <Skeleton.Group show>

    <Skeleton height={20} width={'100%'} {...SkeletonCommonProps} >
      <View style={{ width: 30, height: 20, backgroundColor: '#D1D5DB', borderRadius: 4, marginBottom: 7, }} />
    </Skeleton>
    <Skeleton height={20} width={'100%'} {...SkeletonCommonProps} >
      <View style={{ width: 30, height: 20, backgroundColor: '#D1D5DB', borderRadius: 4, marginBottom: 7, }} />
    </Skeleton>
    <Skeleton height={20} width={'100%'} {...SkeletonCommonProps} >
      <View style={{ width: 30, height: 20, backgroundColor: '#D1D5DB', borderRadius: 4, marginBottom: 7, }} />
    </Skeleton>
    <Skeleton height={20} width={'100%'} {...SkeletonCommonProps} >
      <View style={{ width: 30, height: 20, backgroundColor: '#D1D5DB', borderRadius: 4, marginBottom: 7, }} />
    </Skeleton>
    </Skeleton.Group>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1, 
       padding: 15,
       gap: 20,
      // justifyContent: 'space-between', 
     alignItems: 'center',
 },
  header: {
      fontSize: 20,
 // fontWeight: 'bold',
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
     // width: 100%,
     // display: row,
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
     width: '100%', // Take up the entire width

//  flexDirection: 'row',
//  alignItems: 'center',
//  justifyContent: 'space-between',
//  padding: 15,
//  backgroundColor: '#4CAF50',
//  borderRadius: 5,

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