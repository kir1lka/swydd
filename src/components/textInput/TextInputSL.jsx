//react
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

//components
import { StatusBar } from "expo-status-bar";

//styles
import styles from "./textInputSL.style";

function TextInputSL({ imgIcon, textHolder }) {
  const textInputRef = useRef(null);

  //functions
  const handleTouchableOpacityClick = () => {
    textInputRef.current.focus();
  };

  return (
    <TouchableOpacity onPress={handleTouchableOpacityClick} activeOpacity={0.4}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.wrapperTextInput}>
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
