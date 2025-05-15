import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/app/Utils/Colors'
import Entypo from '@expo/vector-icons/Entypo';

interface Business {
  images: { url: string }[];
  contactPerson: string; // Added contactPerson property
  name: string; // Added name property
  address: string; // Added address property
}

export default function BusinessListItem({ business }: { business: Business }) {
  return (
    <View style={styles.container}>
      <Image source={{uri: business?.images[0]?.url}} style={styles.image}
       />
       <View style={styles.subContainer}>
        <Text style={{fontFamily:'Outfit-Regular',color:Colors.LIGHT_GRAY,fontSize:15}}>{business.contactPerson}</Text>
        <Text style={{fontFamily:'Outfit-Bold', fontSize:19}}>{business.name}</Text>
        <Text style={{fontFamily:'Outfit-Regular', color:Colors.LIGHT_GRAY, fontSize:16}}>
        <Entypo name="location" size={20} color={Colors.PRIMARY}  />
        {business.address}</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       padding:10,
       backgroundColor: Colors.WHITE, 
       borderRadius:15,
       marginBottom:15,
       display:'flex',
       flexDirection:'row',
       gap:10,
    },
    subContainer:{
        display:'flex',
        gap:8,
    },
    image:{
        width:100,
        height:100
    }

})