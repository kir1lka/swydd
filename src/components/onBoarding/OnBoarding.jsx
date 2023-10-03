//react
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Button,
} from "react-native";

const { width, height } = Dimensions.get("window");

//Animatable
import * as Animatable from "react-native-animatable";

//styles
import styles from "./onBoarding.style";

//components
import Onboarding from "react-native-onboarding-swiper";
import SvgArrow from "../svg/SvgArrow";

//navigate
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function OnBoarding() {
  const navigation = useNavigation();

  // functions
  const DotComponent = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? "#64F6D3" : "rgba(0, 0, 0, 0.3)";
    } else {
      backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)";
    }
    return <View style={styles.dotComponent(backgroundColor)} />;
  };

  const NextButtonComponent = ({ ...props }) => (
    <View style={{ marginRight: 35 }}>
      <TouchableOpacity onPress={handleDone} {...props}>
        <Animatable.View animation="bounceIn" duration={1000}>
          <View style={styles.nextButtonComponent}>
            <SvgArrow />
          </View>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );

  const DoneButtonComponent = ({ ...props }) => (
    <View style={{ marginRight: 35 }}>
      <TouchableOpacity onPress={handleDone} {...props}>
        <View style={styles.doneButtonComponent}>
          <SvgArrow />
        </View>
      </TouchableOpacity>
    </View>
  );

  const handleDone = () => {
    navigation.navigate("SignUpSceen");
    // setItem("onboarded", "1");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        skipLabel={""}
        nextLabel={""}
        DotComponent={DotComponent}
        NextButtonComponent={NextButtonComponent}
        DoneButtonComponent={DoneButtonComponent}
        controlStatusBar={false}
        bottomBarHighlight={false}
        containerStyles={{ paddingHorizontal: 0 }}
        pages={[
          {
            //
            // Первая страница
            //
            backgroundColor: "#fff",
            image: (
              <Animatable.View animation="fadeIn" duration={1000}>
                <View style={styles.imageView}>
                  <Image
                    style={styles.image}
                    source={require("../../../assets/onBoarding/onBoard1.png")}
                  />
                </View>
              </Animatable.View>
            ),
            title: (
              <Animatable.Text
                animation="fadeIn"
                duration={1000}
                style={styles.title}
              >
                Вакансии мечты
              </Animatable.Text>
            ),
            subtitle: (
              <Animatable.Text
                animation="fadeIn"
                duration={1000}
                style={styles.subtitle}
              >
                Находите идеальные рабочие места для своей карьеры
              </Animatable.Text>
            ),
          },
          {
            //
            // Вторая страница
            //
            backgroundColor: "#fff",
            image: (
              <Animatable.View animation="fadeIn" duration={1000}>
                <View style={styles.imageView}>
                  <Image
                    style={styles.image}
                    source={require("../../../assets/onBoarding/onBoard2.png")}
                  />
                </View>
              </Animatable.View>
            ),
            title: (
              <Animatable.Text
                animation="fadeIn"
                duration={1000}
                style={styles.title}
              >
                Работа рядом с вами
              </Animatable.Text>
            ),
            subtitle: (
              <Animatable.Text
                animation="fadeIn"
                duration={1000}
                style={styles.subtitle}
              >
                Ищите ближайшие вакансии в вашем городе и регионе
              </Animatable.Text>
            ),
          },
          {
            //
            //  Третья страница
            //
            backgroundColor: "#fff",
            image: (
              <Animatable.View animation="fadeIn" duration={1000}>
                <View style={styles.imageView}>
                  <Image
                    style={styles.image}
                    source={require("../../../assets/onBoarding/onBoard3.png")}
                  />
                </View>
              </Animatable.View>
            ),
            title: (
              <Animatable.Text
                animation="fadeIn"
                duration={1000}
                style={styles.title}
              >
                Возможности
              </Animatable.Text>
            ),
            subtitle: (
              <Animatable.Text
                animation="fadeIn"
                duration={1000}
                style={styles.subtitle}
              >
                Исследуйте новые горизонты карьеры с нашим приложением
              </Animatable.Text>
            ),
          },
        ]}
      />
    </View>
  );
}

export default OnBoarding;
