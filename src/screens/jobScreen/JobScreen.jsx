//react
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

//components
import { StatusBar } from "expo-status-bar";
import Animated from "react-native-reanimated";
import axios from "axios";
import JobCard from "../../components/jobCard/JobCard";

//svg
import SvgFavoriteDetails from "./../../components/svg/jobDetails/SvgFavoriteDetails";
import SvgShareDetails from "./../../components/svg/jobDetails/SvgShareDetails";
import SvgBackArrow from "../../components/svg/SvgBackArrow";

function JobScreen({ navigation, route }) {
  //jobCard
  const [jobCardDate, setJobCardDate] = useState([]);

  //functions
  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 44,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar style="dark" />

      {/* TOP_MENU */}
      <View
        style={{
          height: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* left */}
        <View style={{ marginLeft: 15, marginRight: 15, flex: 1 }}>
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

        {/* right */}

        <View style={{ marginRight: 15, flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.4}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#e6e6e6",
                padding: 8,
                borderRadius: 10,
                height: 45,
                width: 45,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <SvgFavoriteDetails />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.4}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#e6e6e6",
                padding: 8,
                borderRadius: 10,
                height: 45,
                width: 45,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgShareDetails />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Animated.ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE JOB */}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 26,
              fontFamily: "MontserratBold",
              marginBottom: 5,
              paddingLeft: 15,
              color: "#64F6D3",
            }}
          >
            {route.params?.titleJob}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "PoppinsSemiBold",
              marginBottom: 15,
              paddingLeft: 15,
              color: "#000",
            }}
          >
            {`${route.params?.price} руб.`}
          </Text>
        </View>

        {/* DETAILS AND LOGO */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          {/* details */}
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "PoppinsText",
                paddingLeft: 15,
                color: "#000",
              }}
            >
              {`Опыт работы: ${route.params?.experience} ${
                route.params?.experience === `без опыта` ? `` : `года`
              }`}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "PoppinsText",
                paddingLeft: 15,
                color: "#000",
              }}
            >
              {route.params?.city}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "PoppinsText",
                paddingLeft: 15,
                color: "#000",
              }}
            >
              {route.params?.time}
            </Text>
          </View>

          {/* logo */}
          <View style={{ paddingRight: 15 }}>
            <View
              style={{
                alignItems: "center",
                // borderWidth: 1,
                // borderColor: "#e6e6e6",
                borderRadius: 10,
                width: 80,
                height: 80,
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: route.params?.logo,
                }}
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  fontFamily: "PoppinsText",
                  fontSize: 14,
                  width: 120,
                  textAlign: "center",
                }}
              >
                {route.params?.nameCompany}
              </Text>
            </View>
          </View>
        </View>

        {/* DESCRIPTION */}
        <View style={{ marginTop: 10, marginHorizontal: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "PoppinsSemiBold",
              marginBottom: 5,
              color: "#000",
            }}
          >
            Описание работы
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#e6e6e6",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "PoppinsText",
                color: "#000",
              }}
            >
              {route.params?.description}
            </Text>
          </View>
        </View>

        {/* NUMBER */}
        <View style={{ marginTop: 10, marginHorizontal: 15, marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "PoppinsSemiBold",
              marginBottom: 5,
              color: "#000",
            }}
          >
            Номер телефона
          </Text>

          {/* number name */}
          <View
            style={{
              borderWidth: 1,
              borderColor: "#e6e6e6",
              borderRadius: 10,
              padding: 10,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "PoppinsText",
                color: "#000",
              }}
            >
              {`${route.params?.numberName}: `}
            </Text>

            {/* number */}
            <TouchableOpacity activeOpacity={0.4}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "PoppinsText",
                  color: "#64F6D3",
                  textDecorationLine: "underline",
                }}
              >
                {route.params?.number}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* NEWJOBS */}
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "MontserratSemiBold",
                marginBottom: 10,
                paddingLeft: 15,
              }}
            >
              Похожии вакансии
            </Text>

            <TouchableOpacity activeOpacity={0.4}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "PoppinsText",
                  marginBottom: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: "#64F6D3",
                }}
              >
                показать все
              </Text>
            </TouchableOpacity>
          </View>
          {/* cards */}
          <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
            <FlatList
              scrollEnabled={false}
              data={route.params?.similarJob.slice(0, 3)}
              renderItem={({ item, index }) => (
                <JobCard item={item} similarJob={jobCardDate} />
              )}
              keyExtractor={(item, index) => `key-${index}`}
              contentContainerStyle={{ rowGap: 10 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </Animated.ScrollView>

      {/* BUTTON RESPONSEJOB */}
      <View style={{ marginHorizontal: 15 }}>
        <TouchableOpacity activeOpacity={0.4}>
          <View
            style={{
              height: 50,
              marginVertical: 5,
              backgroundColor: "#64F6D3",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "PoppinsSemiBold",
                fontSize: 18,
              }}
            >
              Откликнуться
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default JobScreen;
