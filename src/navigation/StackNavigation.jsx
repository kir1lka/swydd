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
import WelcomReload from "../components/welcome/WelcomReload";
import OnBoarding from "../components/onBoarding/OnBoarding";
import LogInSceen from "../screens/loginInScreen/LogInSceen";
import SignUpSceen from "../screens/signUpScreen/SignUpScreen";
import TabNavigation from "./TabNavigation";

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
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
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="LogInSceen"
        component={LogInSceen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name="SignUpSceen"
        component={SignUpSceen}
        options={{
          headerShown: false,
          title: "",
          gestureEnabled: false,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {},
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
