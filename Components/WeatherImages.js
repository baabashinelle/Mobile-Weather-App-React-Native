import React from 'react'
import { View, Image} from 'react-native'
import tw from "twrnc"



const WeatherImages = () => {
  return (
    <View style={tw`items-center pt-12`}>
      <Image source={require("../assets/sun2.png")} />
    </View>
  );
}

export default WeatherImages