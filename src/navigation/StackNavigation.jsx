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

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
