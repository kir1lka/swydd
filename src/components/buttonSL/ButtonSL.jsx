import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

//navigate
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function ButtonSL({ textBT }) {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("TabNavigation");
  };

  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <View
        style={{
          width: 195,
          height: 50,
          backgroundColor: "#64F6D3",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "PoppinsSemiBold",
            fontSize: 21,
          }}
        >
          {textBT}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ButtonSL;
