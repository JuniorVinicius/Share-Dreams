import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AllTravels, Favorites, MyTravels } from "../screens";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.70)",
        tabBarStyle: {
          backgroundColor: "#005691",
        },
        tabBarIndicatorStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="AllTravels"
        component={AllTravels}
        options={{
          title: "ALL TRAVELS",
        }}
      />
      <Tab.Screen
        name="MyTravels"
        component={MyTravels}
        options={{
          title: "MY TRAVELS",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "FAVORITES",
        }}
      />
    </Tab.Navigator>
  );
};

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#005691",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={TabScreens}
          options={{
            title: "Share Dreams",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
