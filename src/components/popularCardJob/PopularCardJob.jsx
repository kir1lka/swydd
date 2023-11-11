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

//components
import * as Animatable from "react-native-animatable";

//styles
import styles from "./popularCardJob.style";

function PopularCardJob({ item }) {
  return (
    <Animatable.View animation="fadeIn" duration={3000}>
      <TouchableOpacity activeOpacity={0.4}>
        <View
          style={{
            position: "relative",
            width: 160,
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text
            style={{
              zIndex: 1,
              fontFamily: "MontserratExtraBold",
              color: "#fff",
              fontSize: 18,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              zIndex: 1,
              fontFamily: "PoppinsMedium",
              color: "#fff",
              opacity: 0.8,
              fontSize: 14,
            }}
          >
            {item.text}
          </Text>
          <Image
            source={{
              uri: item.img,
            }}
            style={{
              position: "absolute",
              width: 160,
              height: 70,
              borderRadius: 10,
              top: 0,
              left: 0,
              resizeMode: "contain",
              zIndex: 0,
            }}
          />
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
}

export default PopularCardJob;
