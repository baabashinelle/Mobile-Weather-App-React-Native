import React from 'react'
import { View, Image} from 'react-native'
import sunicon from "../assets/sun.svg"
import tw from "twrnc"


const WeatherImages = () => {
  return (
    <View>
      <Image source={require("../assets/sun.svg")} />
    </View>
  );
}

export default WeatherImages