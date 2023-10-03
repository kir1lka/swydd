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
        <TextInputSL
          imgIcon={require("./../../img/logIn/mail.png")}
          textHolder={"Введите почту"}
        />
        <TextInputSL
          imgIcon={require("./../../img/logIn/lock.png")}
          textHolder={"Введите пароль"}
        />
        <View style={styles.wrapperForgot}>
          <Text style={styles.textForgot}>Забыли пароль?</Text>
        </View>

        <ButtonSL textBT={"Войти"} />
      </View>

      {/* */}
      <View style={{ flex: 1 }}></View>
      {/* */}

      {/* 
      // NAVIGATE IN SIGNUP
      */}
      <View style={styles.wrapperBottomNavigate}>
        <Text style={styles.textBottomNavigate}>
          Нет аккаунта?
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.linkBottomNavigate}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

export default LogInSceen;
