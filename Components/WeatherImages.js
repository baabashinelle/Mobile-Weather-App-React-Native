import React from 'react'
import { View, Image} from 'react-native'
import tw from "twrnc"



const WeatherImages = ({temp}) => {
  return (
    <>
      {temp <= 24 ? (
        <View style={tw`items-center pt-12`}>
          <View style={tw`relative items-center pt-20 pl-22`}>
            <Image
              source={require("../assets/moon.png")}
              style={tw`absolute right-0 bottom-12`}
            />
            <Image
              source={require("../assets/moon2.png")}
              style={tw`absolute right-0 bottom-5`}
            />
            <Image
              source={require("../assets/moon3.png")}
              style={tw`absolute right-6 bottom-2`}
            />
          </View>
        </View>
      ) : (
        <View style={tw`items-center pt-12`}>
          <Image source={require("../assets/sun2.png")} />
        </View>
      )}
    </>
  );
}

export default WeatherImages