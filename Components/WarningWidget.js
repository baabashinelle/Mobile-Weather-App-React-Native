import React from 'react'
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

const WarningWidget = () => {
  return (
    <View style={tw`pt-6`}>
      <View style={tw`p-7 bg-[#FDFCFC] rounded-xl flex-row justify-between`}>
        <View>
          <View style={tw`flex-row justify-between items-center`}>
            <Ionicons name="warning" style={tw`text-[#FFD600] text-3xl`} />
            <Text style={tw`text-[#FFD600] text-xl pl-4`}>WARNING</Text>
          </View>
          <View style={tw`flex-row justify-between pt-5`}>
            <Text style={tw`text-[#C4C4C4] font-semibold`}>%RAIN</Text>
            <Text style={tw`text-[#C4C4C4] font-semibold`}>EXP TIME</Text>
          </View>
          <View style={tw`flex-row justify-between pt-4`}>
            <Text style={tw`text-[#9A9A9A] font-semibold`}>58%</Text>
            <Text style={tw`text-[#9A9A9A] font-semibold`}>02:00 PM</Text>
          </View>
        </View>
        <View style={tw`relative`}>
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
    </View>
  );
}

export default WarningWidget