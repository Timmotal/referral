import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export default function StatusContent() {

  const image = "https://media.istockphoto.com/id/1371970572/photo/png-photo-europian-robin-in-nature.webp?b=1&s=170667a&w=0&k=20&c=5Pz1XZlD9n2uaW9_RdTLRIUarvH0rVB9WLAov92keAo=";

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center',}}>
         {/* Top Image */}
         <View>
             <Image source={{ uri: image }} style={{ width: 200, height: 150 }} />
             </View>
      </View>

      
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {/* MIddle Text */}
        <View style={styles.topSection}>
        <View style={styles.midText}>
        <Text style={styles.referralText}>Invite your friends & get 6% bonus</Text>
        <Text style={styles.descriptionText}>
          Refer friends to BillPoint and earn rewards! Share your code and get bonuses
           when they sign up and deposit. You'll also get a 6% bonus on your first referral's deposit.
            Start sharing your unique code now!
        </Text>
        </View>
      </View>
      </View>


      <View style={{ flex: 1, justifyContent: 'flex-end' }}>

  

<View >

<View style={{ justifyContent: 'center', alignItems: 'center' }}>
<TouchableOpacity style={styles.button} onPress={() => {console.log("Feel is Pressed")}}>
<Text style={styles.buttonText}>Refer a Friend</Text>
</TouchableOpacity>
</View>
</View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1, 
       padding: 20,
      // justifyContent: 'center', 
    //  alignItems: 'center',
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
// backgroundColor: '#f0c600', // Orange color as in the image
  color: '#4fa66a', // White text color
  fontSize: 12, 
},
copyIcon: {
width: 20,
height: 20,
},
referralCode: {
flex: 1,
fontSize: 12,
},
codeSection: {
marginBottom: 30,
},

copyButtonContainer: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#cbe7d4',
  borderRadius: 36  , // Rounded corners
  paddingHorizontal: 16, // Horizontal padding
  paddingVertical: 12, // Vertical padding
},
copyButtonClick: {
  backgroundColor: '#f0c600', // Orange color as in the image
  color: 'red', // White text color
  fontSize: 10, // Adjust font size as needed
  
},
})