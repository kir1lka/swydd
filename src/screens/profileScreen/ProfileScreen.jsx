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

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="dark" />
      <Text>ProfileScreen</Text>
    </View>
  );
}

export default ProfileScreen;
