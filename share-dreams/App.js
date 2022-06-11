import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screens from "./src/routes";
import { ThemeProvider } from "styled-components";
import { Colors } from './src/constants';



export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ThemeProvider theme={{Colors}}>
        <Screens />
      </ThemeProvider>
      
    </>
  );
}
