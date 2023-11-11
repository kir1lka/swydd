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

//components
import TextInputSL from "../../components/textInput/TextInputSL";
import ButtonSL from "../../components/buttonSL/ButtonSL";

//styles
import styles from "./loginScreen.style";

//svg
import SvgBackArrow from "../../components/svg/SvgBackArrow";

function LogInSceen() {
  const navigation = useNavigation();

  //functions
  const handleSignUp = () => {
    navigation.navigate("SignUpSceen");
  };

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* TopNavigate */}
      <View style={styles.wrapperTopNavigate}>
        <TouchableOpacity
          onPress={handleBackNavigate}
          activeOpacity={0.4}
          style={{
            paddingVertical: 5,
            paddingRight: 25,
          }}
        >
          <SvgBackArrow />
        </TouchableOpacity>
      </View>

      {/* 
      // TITLE
      */}
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Авторизация</Text>
        <Text style={styles.textUnderTitle}>Вход в систему</Text>
      </View>

      {/* 
      // INPUTS TEXT
      */}
      <View style={styles.wrapperInput}>
        <TextInputSL imgIcon="mail" textHolder={"Введите почту"} />
        <TextInputSL imgIcon="lock" textHolder={"Введите пароль"} />
        <View style={styles.wrapperForgot}>
          <Text style={styles.textForgot}>Забыли пароль?</Text>
        </View>

        <ButtonSL textBT={"Войти"} navigateBT="TabNavigation" />
      </View>

      {/* */}
      <View style={{ flex: 1 }}></View>
      {/* */}

      {/* 
      // NAVIGATE IN SIGNUP
      */}
      <View style={styles.wrapperBottomNavigate}>
        <Text style={styles.textBottomNavigate}>Нет аккаунта?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.linkBottomNavigate}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LogInSceen;
