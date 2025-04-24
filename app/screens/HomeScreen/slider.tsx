import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '@/app/Utils/GlobalApi'

export default function slider() {

    const [slider,setSlider]=useState();
    useEffect(()=>{
        getSlider();
    },[])
    const getSlider=() => {
        GlobalAPI.getSlider().then(resp=>{
            console.log("resp",resp);
        })
    }
  return (
    <View>
      <Text>slider</Text>
    </View>
  )
}