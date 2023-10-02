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

//navigate
import { NavigationContainer, useNavigation } from "@react-navigation/native";

//svg
import SvgBackArrow from "../../components/svg/SvgBackArrow";
import TextInputSL from "../../components/textInput/TextInputSL";
import ButtonSL from "../../components/buttonSL/ButtonSL";

function SignUpScreen() {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("LogInSceen");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 88,
      }}
    >
      <StatusBar style="dark" />

      <View
        style={{
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginBottom: 10,
            fontFamily: "PoppinsTitle",
            fontSize: 34,
          }}
        >
          Регистрация
        </Text>
        <Text style={{ fontFamily: "PoppinsText", fontSize: 17, opacity: 0.6 }}>
          Создание нового аккаунта
        </Text>
      </View>
      <View
        style={{
          // flex: 1,
          alignItems: "center",
          marginTop: 60,
        }}
      >
        {/* marginBottom: 20 + 20 c  TextInputSL*/}
        <View style={{ marginBottom: 20 }}>
          <TextInputSL
            imgIcon={require("./../../img/logIn/user.png")}
            textHolder={"Введите имя"}
          />
          <TextInputSL
            imgIcon={require("./../../img/logIn/mail.png")}
            textHolder={"Введите почту"}
          />
          <TextInputSL
            imgIcon={require("./../../img/logIn/lock.png")}
            textHolder={"Введите пароль"}
          />
        </View>

        {/* / */}
        <ButtonSL textBT={"Регистрация"} />
      </View>
      {/* / */}
      <View style={{ flex: 1 }}></View>
      {/* / */}
      <View
        style={{
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Text style={{ fontFamily: "PoppinsText", fontSize: 17 }}>
          Уже есть аккаунт?
          <TouchableOpacity onPress={handleSignUp}>
            <Text
              style={{
                color: "#64F6D3",
                textDecorationLine: "underline",
                fontFamily: "PoppinsText",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Ввойти
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

export default SignUpScreen;
