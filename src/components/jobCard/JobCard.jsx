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

//navigate
import { NavigationContainer, useNavigation } from "@react-navigation/native";

function JobCard({ item, similarJob }) {
  const navigation = useNavigation();

  return (
    <Animatable.View animation="fadeIn" duration={1000}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() =>
          navigation.navigate("JobScreen", {
            id: item.id,
            titleJob: item.titleJob,
            price: item.price,
            experience: item.experience,
            city: item.city,
            description: item.description,
            time: item.time,
            nameCompany: item.nameCompany,
            logo: item.logo,
            numberName: item.numberName,
            number: item.number,
            similarJob: similarJob,
          })
        }
      >
        <View
          style={{
            height: 160,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#e6e6e6",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratBold",
                fontSize: 18,
                color: "#64F6D3",
              }}
            >
              {item.titleJob}
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              {item.price} руб.
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsText",
                fontSize: 14,
                opacity: 0.7,
              }}
            >
              Опыт работы:{" "}
              {`${item.experience} ${
                item.experience === "без опыта" ? "" : "года"
              }`}
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsText",
                fontSize: 14,
                marginBottom: 10,
                opacity: 0.7,
              }}
            >
              {item.city}
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsText",
                fontSize: 14,
                opacity: 0.7,
              }}
            >
              {item.time}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: item.logo,
              }}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontFamily: "PoppinsText", fontSize: 14 }}>
              {item.nameCompany}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
}

export default JobCard;
