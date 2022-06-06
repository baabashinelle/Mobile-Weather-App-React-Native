import {
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";
import WeatherImages from "./Components/WeatherImages";
import Temperature from "./Components/Temperature";
import WeatherWidget from "./Components/WeatherWidget";
import WarningWidget from "./Components/WarningWidget";
import axios from "axios"


export default function App() {

  const [town, setTown] = useState("")

  
  const getWeatherData = async () => {
    if (town === ""){
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=accra&appid=d467205cb02234512d5a273cb405f713"
      );
      const data = await res.data
      console.log(data);
    } else {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=d467205cb02234512d5a273cb405f713`
        );
        const data = await res.data;
        console.log(data);
      } catch (error) {
        console.log(error)
        console.log("Error! Incomplete input")
      }
    }
  }

  getWeatherData()
  

  return (
    <SafeAreaView style={tw`bg-[#ffff]`}>
      <ScrollView style={tw`px-6`}>
        <View
          style={tw`p-3 w-full bg-[#FDFCFC] rounded-xl items-center flex flex-row justify-between`}
        >
          <TextInput
            placeholder="Search Location"
            style={tw`text-xl`}
            onChangeText={(town) => setTown(town)}
          />
          <TouchableOpacity onPress={getWeatherData}>
            <View>
              <FontAwesome name="search" style={tw`text-xl text-gray-300`} />
            </View>
          </TouchableOpacity>
        </View>
        <WeatherImages />
        <Temperature />
        <WeatherWidget />
        <WarningWidget />
      </ScrollView>
    </SafeAreaView>
  );
}

