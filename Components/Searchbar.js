import React from 'react'
import { View, TextInput} from 'react-native'
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

const Searchbar = () => {
  return (
    <View
      style={tw`p-4 w-full bg-[#FDFCFC] rounded-xl items-center flex flex-row justify-between`}
    >
      <TextInput
        placeholder="Search Location"
        style={tw`text-xl text-gray-300`}
      />
      <View>
        <FontAwesome name="search" style={tw`text-xl text-gray-300`} />
      </View>
    </View>
  );
}

export default Searchbar