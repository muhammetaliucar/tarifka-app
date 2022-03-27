import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./src/pages/Categories";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Meals from "./src/pages/Meals";
import Detail from "./src/pages/Detail/Detail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Categories">
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerTitleAlign: "center", headerTintColor: "#fea500" }}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen
          options={{ headerTitleAlign: "center", headerTintColor: "#fea500" }}
          name="Meals"
          component={Meals}
        />
        <Stack.Screen
          options={{ headerTitleAlign: "center", headerTintColor: "#fea500" }}
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
