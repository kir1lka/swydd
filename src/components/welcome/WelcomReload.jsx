//react
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

//components
import { SvgUri } from "react-native-svg";

//style
import styles from "./welcom.style";

//img
import SvgLogo from "../svg/SvgLogo";

function WelcomReload() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SvgLogo />

      <ActivityIndicator style={{ marginTop: 15 }} size="large" />
    </View>
  );
}

export default WelcomReload;

// const navigation = useNavigation();

// useEffect(() => {
//   const timer = setTimeout(() => {
//     navigation.navigate("HomeScreen");
//   }, 2500);

//   return () => clearTimeout(timer);
// }, [navigation]);
