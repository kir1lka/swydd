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

import { StatusBar } from "expo-status-bar";

function FavoriteScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="dark" />
      <Text>FavoriteScreen</Text>
    </View>
  );
}

export default FavoriteScreen;
