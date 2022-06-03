import React from 'react'
import { View, Text } from "react-native";
import tw from "twrnc";

const WeatherWidget = () => {
  return (
    <View style={tw`bg-[#FDFCFC] p-5 rounded-xl flex-row justify-between`}>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>TIME</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>11:25 AM</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>UV</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>4</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>%RAIN</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>58%</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-[#C4C4C4] font-semibold`}>AQ</Text>
        <Text style={tw`text-[#9A9A9A] pt-3 font-semibold`}>22</Text>
      </View>
    </View>
  );
}

export default WeatherWidget