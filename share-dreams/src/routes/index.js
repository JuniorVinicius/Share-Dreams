import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AllTravels, Favorites, MyTravels } from "../screens";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants";

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
            headerRight: () => (
              <FontAwesome5 name="search" size={18} color={Colors.primaryLight}  />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
