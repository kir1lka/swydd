import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

function TextInputSL({ imgIcon, textHolder }) {
  const textInputRef = useRef(null);

  const handleTouchableOpacityClick = () => {
    textInputRef.current.focus();
  };

  return (
    <TouchableOpacity onPress={handleTouchableOpacityClick} activeOpacity={0.4}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 315,
            height: 51,
            backgroundColor: "#edeeec",
            borderRadius: 10,
            marginBottom: 20,
            color: "#000",
            paddingLeft: 20,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image source={imgIcon} style={{ marginRight: 10 }} />
          <TextInput
            ref={textInputRef}
            placeholder={textHolder}
            style={{ fontSize: 20 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TextInputSL;
