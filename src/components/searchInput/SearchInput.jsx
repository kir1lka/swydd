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
import styles from "./searchInput.style";

//svg
import SvgSearch from "./../../components/svg/tabNavigate/SvgSearch";

function SearchInput({ textHolder }) {
  const textInputRef = useRef(null);

  //functions
  const handleTouchableOpacityClick = () => {
    textInputRef.current.focus();
  };

  return (
    <TouchableOpacity onPress={handleTouchableOpacityClick} activeOpacity={0.4}>
      <View style={styles.wrapperTextInput}>
        <SvgSearch color="#8c8c8c" />
        <TextInput
          ref={textInputRef}
          placeholder={textHolder}
          placeholderTextColor="#8c8c8c"
          style={{
            marginLeft: 10,
            fontSize: 18,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default SearchInput;
