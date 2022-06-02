import React from 'react'
import { View, TextInput} from 'react-native'
import tw from "twrnc";

const Searchbar = () => {
  return (
    <View style={tw`p-4 w-full bg-[#FDFCFC] rounded-xl items-center flex flex-row`}>
      <TextInput
        placeholder="Search Location"
      />
    </View>
  );
}

export default Searchbar