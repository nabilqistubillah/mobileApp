import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import Heading from '../../Components/Heading';
import Colors from '@/app/Utils/Colors';

export default function Categories() {

 
    interface Category {
        icon: { url: string };
        name: string;
    }

    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(()=>{
        getCategories();
    },[])
    const getCategories = () => {
        GlobalAPI.getCateggories().then(resp => {
          const allowed = ['Cleaning', 'Repair', 'Painting', 'Shifting']; // yang mau ditampilkan
          const filtered = resp?.categories.filter((cat: Category) =>
            allowed.includes(cat.name)
          );
          setCategories(filtered);
        });
    } 
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Categories'} isViewAll={true}/>
      <FlatList
      data={categories}
      numColumns={4}
      renderItem={({item,index})=>(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={{uri:item?.icon?.url}} 
                style={{width:30,height:30}}
                />
            </View>
            <Text style={{fontFamily:'Outfit-Medium, marginTop:5'}}>{item?.name}</Text>
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',

    },
    iconContainer:{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:17,
        borderRadius:99,

    }
    })