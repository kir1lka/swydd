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

//tabBar
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

//stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//components
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ResponseScreen from "../screens/responseScreen/ResponseScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import FavoriteScreen from "../screens/favoriteScreen/FavoriteScreen";
import JobScreen from "../screens/jobScreen/JobScreen";
import { BlurView } from "expo-blur";

//svg
import SvgSearch from "../components/svg/tabNavigate/SvgSearch";
import SvgFavorite from "../components/svg/tabNavigate/SvgFavorite";
import SvgResponse from "../components/svg/tabNavigate/SvgResponse";
import SvgProfile from "../components/svg/tabNavigate/SvgProfile";

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="JobScreen"
        component={JobScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}
function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#7c7c7c",
        tabBarActiveTintColor: "#64F6D3",
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: "MontserratBold",
        },
      }}
      back
    >
      <Tab.Screen
        name="Поиск"
        component={HomeStack}
        options={{
          gestureEnabled: false,
          tabBarIcon: ({ color }) => <SvgSearch color={color} />,
        }}
      />
      <Tab.Screen
        name="Избранное"
        component={FavoriteScreen}
        options={{
          gestureEnabled: false,
          tabBarIcon: ({ color }) => <SvgFavorite color={color} />,
        }}
      />
      <Tab.Screen
        name="Отклики"
        component={ResponseScreen}
        options={{
          gestureEnabled: false,
          tabBarIcon: ({ color }) => <SvgResponse color={color} />,
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          gestureEnabled: false,
          tabBarIcon: ({ color }) => <SvgProfile color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
