import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function ResponseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="dark" />
      <Text>ResponseScreen</Text>
    </View>
  );
}

export default ResponseScreen;
