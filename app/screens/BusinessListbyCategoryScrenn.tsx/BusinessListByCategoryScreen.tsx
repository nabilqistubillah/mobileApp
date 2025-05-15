import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GlobalAPI from '@/app/Utils/GlobalAPI';
import BusinessListItem from './BusinessListItem';


export default function BusinessListByCategoryScreen() {
    const param = useRoute().params as { category: string };
    const navigation = useNavigation();
    const [businessList, setBusinessList] = useState([]);

    useEffect(()=>{
      param && getBusinessByCategory();
    },[param])

    const getBusinessByCategory=()=>{
      GlobalAPI.getBussinesListByCategory(param.category).then(resp=>{
        setBusinessList(resp.businessLists);
      })
    }
  return (
    <View style={{padding:20,paddingTop:30}}>
      <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}
      onPress={()=> navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black"/>
        <Text style={{fontSize:25,fontFamily:'Outfit-Medium'}}>{param?.category}</Text>
      </TouchableOpacity>
      <FlatList
      data={businessList}
      renderItem={({item})=>(
        <BusinessListItem business={item}/>
      )}
      />
    </View>
  )
}