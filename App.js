import {
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";
import WeatherImages from "./Components/WeatherImages";
import Temperature from "./Components/Temperature";
import WeatherWidget from "./Components/WeatherWidget";
import WarningWidget from "./Components/WarningWidget";
import axios from "axios";

export default function App() {
  const [town, setTown] = useState("");
  const [dataFetched, setdataFetched] = useState(false);
  const [townRes, setTownRes] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [pressure, setPressure] = useState("");
  const [country, setCountry] = useState("");

  const getWeatherData = async () => {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=d467205cb02234512d5a273cb405f713&units=metric`
            );
            const data = await res.data;
            setDescription(data.weather[0].description);
            setTownRes(data.name);
            setTemp(data.main.temp.toFixed(0));
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setPressure(data.main.pressure);
            setCountry(data.sys.country);
            setdataFetched(true)
            Keyboard.dismiss();
          } catch (error) {
            console.log(error);
            console.log("Error! Incomplete input");
          }
  };

  const defaultWeather = async () => {
    if (!dataFetched) {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=accra&appid=d467205cb02234512d5a273cb405f713&units=metric"
      );
      const data = await res.data;
      setDescription(data.weather[0].description);
      setTownRes(data.name);
      setTemp(data.main.temp.toFixed(0));
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setPressure(data.main.pressure);
      setCountry(data.sys.country);
    }
  }

  useEffect(() => {
    defaultWeather();
  }, [town])

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
        <Temperature town={townRes} temp={temp} description={description}/>
        <WeatherWidget humidity={humidity} wind={wind} pressure={pressure} country={country}/>
        <WarningWidget />
      </ScrollView>
    </SafeAreaView>
  );
}
