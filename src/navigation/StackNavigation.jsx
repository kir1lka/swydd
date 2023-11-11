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
import LogInSceen from "../screens/loginInScreen/LogInSceen";
import SignUpSceen from "../screens/signUpScreen/SignUpScreen";
import OnBoardingScreen from "../screens/onBoardingScreen/OnBoardingScreen";
import FilterSreen from "../screens/filterScreen/FilterScreen";

//navigation
import TabNavigation from "./TabNavigation";

//svg
import SvgBackArrow from "../components/svg/SvgBackArrow";

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
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
          headerShown: false,
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
      <Stack.Screen
        name="FilterSreen"
        component={FilterSreen}
        options={{
          headerShown: false,
          title: "",
          gestureEnabled: true,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => {},
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
