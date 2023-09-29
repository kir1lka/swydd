//react
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

//stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//components
import HomeScreen from "../screens/homeScreen/HomeScreen";
import WelcomReload from "../components/welcome/WelcomReload";
import OnBoarding from "../components/onBoarding/OnBoarding";
import OnBoarding2 from "../components/onBoarding2/OnBoarding2";

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="WelcomReload"
        component={WelcomReload}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
