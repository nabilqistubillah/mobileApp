import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import Header from './Header';
import { FlatList } from 'react-native-gesture-handler';
import Heading from '@/app/Components/Heading';

type SliderItem = {
    image?: {
      url?: string;
    };
  };

export default function Slider() {

    const [slider, setSlider] = useState<SliderItem[]>([]);
    useEffect(()=>{
        getSlider();
    },[])

    
    const getSlider=() => {
        GlobalAPI.getSlider().then(resp=>{
            console.log("resp",resp.sliders);
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Heading text={'Offers For You'}/>
      <FlatList
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View style={{marginRight:20}}>
           <Image source={{uri:item?.image?.url}}
           style={styles.sliderImage}
           />
        </View>
      )}
      />    
    </View>
  )
}

const styles= StyleSheet.create({
    heading:{
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10,
    },
    sliderImage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:'contain'
    }
})