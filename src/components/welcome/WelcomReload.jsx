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

//Animatable
import * as Animatable from "react-native-animatable";

//style
import styles from "./welcom.style";

//img
import SvgLogo from "../svg/SvgLogo";

function WelcomReload() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Animatable.View animation="fadeIn" duration={1000}>
        <SvgLogo />
      </Animatable.View>
      <Animatable.View animation="fadeIn" duration={3000}>
        <ActivityIndicator style={{ marginTop: 15 }} size="large" />
      </Animatable.View>
    </View>
  );
}

export default WelcomReload;
