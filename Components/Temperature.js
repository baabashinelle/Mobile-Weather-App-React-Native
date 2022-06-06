import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

const Temperature = ({ town, temp }) => {
  return (
    <View style={tw`items-center pt-6`}>
      <View style={tw`flex flex-row`}>
        <Text style={tw`font-bold text-4xl`}>{town}</Text>
        <FontAwesome name="location-arrow" style={tw`text-3xl`} />
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`text-8xl pt-6 font-semibold pb-6`}>{temp}</Text>
        <Text style={tw`text-4xl pt-3`}>°</Text>
        <Text style={tw`text-8xl font-semibold pt-6`}>C</Text>
      </View>
    </View>
  );
};

export default Temperature;
