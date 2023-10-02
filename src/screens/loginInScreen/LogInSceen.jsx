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
import TextInputSL from "../../components/textInput/TextInputSL";
import ButtonSL from "../../components/buttonSL/ButtonSL";

function LogInSceen() {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("SignUpSceen");
  };

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
      }}
    >
      <StatusBar style="dark" />
      {/* <View
        style={{
          marginBottom: 44,
          display: "flex",
          flexDirection: "row",
          paddingsVertical: 15,
        }}
      >
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={handleBackNavigate}
            style={{ paddingHorizontal: 10, paddingVertical: 5 }}
          >
            <Image source={require("./../../img/BackArrowpng.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}></View>
        <View>
          <Text></Text>
        </View>
      </View> */}
      <View
        style={{
          // marginTop: 40,
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
          Авторизация
        </Text>
        <Text style={{ fontFamily: "PoppinsText", fontSize: 17, opacity: 0.6 }}>
          Вход в систему
        </Text>
      </View>
      {/* / */}
      <View
        style={{
          // flex: 1,
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <TextInputSL
          imgIcon={require("./../../img/logIn/mail.png")}
          textHolder={"Введите почту"}
        />
        <TextInputSL
          imgIcon={require("./../../img/logIn/lock.png")}
          textHolder={"Введите пароль"}
        />
        <View
          style={{
            width: 315,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              color: "#64F6D3",
              textDecorationLine: "underline",
              fontFamily: "PoppinsText",
              fontSize: 17,
            }}
          >
            Забыли пароль?
          </Text>
        </View>
        {/* / */}
        <ButtonSL textBT={"Войти"} />
      </View>
      {/* / */}
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 40,
        }}
      >
        <Text style={{ fontFamily: "PoppinsText", fontSize: 17 }}>
          Нет аккаунта?
          <TouchableOpacity onPress={handleSignUp}>
            <Text
              style={{
                color: "#64F6D3",
                textDecorationLine: "underline",
                fontFamily: "PoppinsText",
                fontSize: 17,
              }}
            >
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

export default LogInSceen;
