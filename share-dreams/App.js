import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screens from "./src/routes";
import { ThemeProvider } from "styled-components";
import { Colors } from "./src/constants";
import { TravelProvider } from "./src/context/travelContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TravelProvider>
        <ThemeProvider theme={{ Colors }}>
          <Screens />
        </ThemeProvider>
      </TravelProvider>
    </>
  );
}
