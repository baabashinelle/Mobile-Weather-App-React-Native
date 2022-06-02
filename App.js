// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Searchbar from './Components/Searchbar';
import tw from "twrnc";
import WeatherImages from "./Components/WeatherImages";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={tw`px-6`}>
        <Searchbar />
        <WeatherImages/>
      </ScrollView>
    </SafeAreaView>
  );
}

