import React from 'react'
import { View, Text } from "react-native";
import tw from "twrnc";

const WeatherWidget = ({humidity, wind, pressure, country }) => {
  return (
    <View style={tw`bg-[#FDFCFC] p-5 rounded-xl flex-row justify-between`}>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>HUMIDITY</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>{humidity}%</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>WIND</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>{wind}m/s</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>PRESSURE</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>{pressure}mb</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>COUNTRY</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>{country}</Text>
      </View>
    </View>
  );
}

export default WeatherWidget