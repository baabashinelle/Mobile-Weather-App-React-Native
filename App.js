
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Searchbar from './Components/Searchbar';
import tw from "twrnc";
import WeatherImages from "./Components/WeatherImages";
import Temperature from "./Components/Temperature";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={tw`px-6`}>
        <Searchbar />
        <WeatherImages/>
        <Temperature/>
      </ScrollView>
    </SafeAreaView>
  );
}

