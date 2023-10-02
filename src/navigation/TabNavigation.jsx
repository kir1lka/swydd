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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

//components
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ResponseScreen from "../screens/responseScreen/ResponseScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ gestureEnabled: false }}
      />
      <Tab.Screen
        name="ResponseScreen"
        component={ResponseScreen}
        options={{ gestureEnabled: false }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ gestureEnabled: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
