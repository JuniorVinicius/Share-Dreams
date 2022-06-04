import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screens from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Screens />
    </>
  );
}
