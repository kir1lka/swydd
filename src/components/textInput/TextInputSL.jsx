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

//svg
import SvgUser from "./../svg/logSign/SvgUser";
import SvgMail from "./../svg/logSign/SvgMail";
import SvgLock from "./../svg/logSign/SvgLock";

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
          {imgIcon === "user" ? (
            <SvgUser />
          ) : imgIcon === "mail" ? (
            <SvgMail />
          ) : imgIcon === "lock" ? (
            <SvgLock />
          ) : (
            ""
          )}
          <TextInput
            ref={textInputRef}
            placeholder={textHolder}
            placeholderTextColor="#8c8c8c"
            style={{ fontSize: 18, marginLeft: 10 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TextInputSL;
