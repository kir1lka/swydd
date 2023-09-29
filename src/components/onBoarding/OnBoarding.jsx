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

//styles
import styles from "./onBoarding.style";

//components
import Onboarding from "react-native-onboarding-swiper";
import SvgArrow from "../svg/SvgArrow";

//navigate
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("HomeScreen");
    // setItem("onboarded", "1");
  };

  const DotComponent = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? "#64F6D3" : "rgba(0, 0, 0, 0.3)";
    } else {
      backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)";
    }
    return (
      <View
        style={{
          width: 10,
          height: 10,
          marginHorizontal: 8,
          backgroundColor,
          borderRadius: 8,
          marginBottom: 0,
        }}
      />
    );
  };

  const NextButtonComponent = ({ ...props }) => (
    <View style={{ marginRight: 35 }}>
      <TouchableOpacity onPress={handleDone} {...props}>
        <View
          style={{
            backgroundColor: "#64F6D3",
            width: 50,
            height: 50,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgArrow />
        </View>
      </TouchableOpacity>
    </View>
  );

  const DoneButtonComponent = ({ ...props }) => (
    <View style={{ marginRight: 35 }}>
      <TouchableOpacity onPress={handleDone} {...props}>
        <View
          style={{
            backgroundColor: "#64F6D3",
            width: 50,
            height: 50,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgArrow />
        </View>
      </TouchableOpacity>
    </View>
  );

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
            backgroundColor: "#fff",
            image: (
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/onBoarding/onBoard1.png")}
                />
              </View>
            ),
            title: <Text style={styles.title}>Вакансии мечты</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Находите идеальные рабочие места для своей карьеры
              </Text>
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/onBoarding/onBoard2.png")}
                />
              </View>
            ),
            title: <Text style={styles.title}>Работа рядом с вами</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Ищите ближайшие вакансии в вашем городе и регионе
              </Text>
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/onBoarding/onBoard3.png")}
                />
              </View>
            ),
            title: <Text style={styles.title}>Возможности</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Исследуйте новые горизонты карьеры с нашим приложением
              </Text>
            ),
          },
        ]}
      />
    </View>
  );
}

export default OnBoarding;

{
  /* <View style={styles.container}>
      <StatusBar style="dark" />
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{ paddingHorizontal: 0 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  style={styles.image}
                  source={require("../../../assets/onBoarding/onBoard1.png")}
                />
              </View>
            ),
            title: <Text style={styles.title}>Вакансии мечты</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Находите идеальные рабочие места для своей карьеры
              </Text>
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  style={styles.image}
                  source={require("../../../assets/onBoarding/onBoard2.png")}
                />
              </View>
            ),
            title: <Text style={styles.title}>Работа рядом с вами</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Ищите ближайшие вакансии в вашем городе и регионе
              </Text>
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  style={styles.image}
                  source={require("../../../assets/onBoarding/onBoard3.png")}
                />
              </View>
            ),
            title: <Text style={styles.title}>Возможности</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Исследуйте новые горизонты карьеры с нашим приложением
              </Text>
            ),
          },
        ]}
      />
    </View> */
}
