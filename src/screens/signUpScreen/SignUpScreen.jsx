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

//navigate
import { NavigationContainer, useNavigation } from "@react-navigation/native";

//svg
import SvgBackArrow from "../../components/svg/SvgBackArrow";

//components
import { StatusBar } from "expo-status-bar";
import TextInputSL from "../../components/textInput/TextInputSL";
import ButtonSL from "../../components/buttonSL/ButtonSL";

//styles
import styles from "./signUpScreen.style";

function SignUpScreen() {
  const navigation = useNavigation();

  //functions
  const handleSignUp = () => {
    navigation.navigate("LogInSceen");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* 
      // TITLE
      */}
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.textUnderTitle}>Создание нового аккаунта</Text>
      </View>

      {/* 
      // INPUTS TEXT
      */}
      <View style={styles.wrapperTextInput}>
        {/* marginBottom: 20 + 20 c  TextInputSL*/}
        <View style={{ marginBottom: 20 }}>
          <TextInputSL imgIcon="user" textHolder={"Введите имя"} texthol />
          <TextInputSL imgIcon="mail" textHolder={"Введите почту"} />
          <TextInputSL imgIcon="lock" textHolder={"Введите пароль"} />
        </View>

        <ButtonSL textBT={"Регистрация"} navigateBT="TabNavigation" />
      </View>

      {/* / */}
      <View style={{ flex: 1 }}></View>
      {/* / */}

      {/* 
      // NAVIGATE IN LOGIN
      */}
      <View style={styles.wrapperBottomNavigate}>
        <Text style={styles.textBottomNavigate}>Уже есть аккаунт?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.linkBottomNavigate}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpScreen;
