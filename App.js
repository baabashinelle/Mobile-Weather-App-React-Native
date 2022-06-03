import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Searchbar from './Components/Searchbar';
import tw from "twrnc";
import WeatherImages from "./Components/WeatherImages";
import Temperature from "./Components/Temperature";
import WeatherWidget from "./Components/WeatherWidget";
import WarningWidget from "./Components/WarningWidget";

export default function App() {
  return (
    <SafeAreaView style={tw`bg-[#ffff]`}>
      <ScrollView style={tw`px-6`}>
        <Searchbar />
        <WeatherImages />
        <Temperature />
        <WeatherWidget/>
        <WarningWidget/>
      </ScrollView>
    </SafeAreaView>
  );
}

