import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  AllTravels,
  Details,
  Favorites,
  MyTravels,
  Registration,
  SearchScreen,
} from "../screens";
import { Colors } from "../constants";
import { InputField, SearchButton } from "../components";
import { useContext } from "react";
import { TravelContext } from "../context/travelContext";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
        tabBarActiveTintColor: Colors.primaryLight,
        tabBarInactiveTintColor: Colors.secondLight,
        tabBarStyle: {
          backgroundColor: Colors.primaryBlue,
        },
        tabBarIndicatorStyle: { backgroundColor: Colors.primaryLight },
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
  const { searchedTravel, setSearchedTravel } = useContext(TravelContext);

  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.primaryLight,
          headerStyle: {
            backgroundColor: Colors.primaryBlue,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={TabScreens}
          options={{
            title: "Share Dreams",
            headerShadowVisible: false,
            headerRight: () => <SearchButton />,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            title: "Travel Register",
            headerShadowVisible: true,
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Details",
            headerShadowVisible: true,
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShadowVisible: true,
            headerTitle: () => (
              <InputField
                width={96}
                height={30}
                placeholder="Search"
                value={searchedTravel}
                onChangeText={travel => setSearchedTravel(travel)}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
