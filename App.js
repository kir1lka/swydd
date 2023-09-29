//react
import React, { useState, useEffect, useCallback } from "react";

//navigate
import { NavigationContainer } from "@react-navigation/native";

//components
import WelcomReload from "./src/components/welcome/WelcomReload";
import StackNavigation from "./src/navigation/StackNavigation";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View } from "react-native";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          MontserratLogo: require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
          PoppinsTitle: require("./assets/fonts/Popins/Poppins-Bold.ttf"),
          PoppinsText: require("./assets/fonts/Popins/Poppins-Medium.ttf"),
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
    return <WelcomReload />; // Отображайте загрузочный экран, пока приложение не готово
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
}

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({
//           MontserratLogo: require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
//           PoppinsTitle: require("./assets/fonts/Popins/Poppins-Bold.ttf"),
//           PoppinsText: require("./assets/fonts/Popins/Poppins-Medium.ttf"),
//         });
//         await new Promise((resolve) => setTimeout(resolve, 5000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return <WelcomReload />; // Отображайте загрузочный экран, пока приложение не готово
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <NavigationContainer>
//         <StackNavigation />
//       </NavigationContainer>
//     </View>
//   );
// }
