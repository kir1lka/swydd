//react
import React, { useState, useEffect, useCallback } from "react";

//navigate
import { NavigationContainer } from "@react-navigation/native";

//components
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View, Image } from "react-native";
import StackNavigation from "./src/navigation/StackNavigation";
import StartSplashScreen from "./src/screens/splashScreen/StartSplashScreen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Загрузка шрифтов
        await Font.loadAsync({
          MontserratLogo: require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
          MontserratExtraBold: require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
          MontserratBold: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
          MontserratSemiBold: require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
          PoppinsTitle: require("./assets/fonts/Popins/Poppins-Bold.ttf"),
          PoppinsSemiBold: require("./assets/fonts/Popins/Poppins-SemiBold.ttf"),
          PoppinsMedium: require("./assets/fonts/Popins/Poppins-Medium.ttf"),
          PoppinsText: require("./assets/fonts/Popins/Poppins-Regular.ttf"),
        });

        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <StartSplashScreen />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
}
