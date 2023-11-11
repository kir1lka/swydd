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
  RefreshControl,
  ActivityIndicator,
} from "react-native";

//components
import { StatusBar } from "expo-status-bar";
import PopularCardJob from "../../components/popularCardJob/PopularCardJob";
import Animated from "react-native-reanimated";
import * as Animatable from "react-native-animatable";
import ButtonSL from "./../../components/buttonSL/ButtonSL";
import axios from "axios";
import JobCard from "../../components/jobCard/JobCard";
import SearchInput from "../../components/searchInput/SearchInput";

//styles
import styles from "./homeSreen.style";

//svg
import SvgFilter from "./../../components/svg/filter/SvgFilter";

//navigate
import { NavigationContainer, useNavigation } from "@react-navigation/native";

//skeletons
import SkeletonPopularCardJob from "../../components/popularCardJob/SkeletonPopularCardJob";
import SkeletonJobCard from "../../components/jobCard/SkeletonJobCard";

function HomeScreen() {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  //popularCard
  const [popularJobCard, setPopularJobCard] = useState([]);
  const [popularJobLoading, setPopularJobLoading] = useState(false);

  //jobCard
  const [jobCardDate, setJobCardDate] = useState([]);
  const [jobLoadingDate, setLoadingDate] = useState(false);

  //useEffect date
  useEffect(() => {
    onResponse();
  }, []);

  //functions
  const onResponse = () => {
    axios
      .get("https://64ea1380bf99bdcc8e6746d5.mockapi.io/popularJobCard")
      .then((res) => {
        setPopularJobCard(res.data);
        setPopularJobLoading(true);
        setRefreshing(false);
      });

    axios
      .get("https://64ea1380bf99bdcc8e6746d5.mockapi.io/jobs")
      .then((res) => {
        setJobCardDate(res.data);
        setLoadingDate(true);
        setRefreshing(false);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPopularJobLoading(false);
    setLoadingDate(false);
    onResponse();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* TOP_MENU */}
      <View style={styles.wrapperTopNavigate}>
        {/* left */}
        <View style={{ marginLeft: 15, marginRight: 15, flex: 1 }}>
          <SearchInput textHolder="Поиск вакансий" />
        </View>

        {/* right */}

        <View style={{ marginRight: 15 }}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate("FilterSreen")}
          >
            <View
              style={{
                backgroundColor: "#71c2aa",
                padding: 8,
                borderRadius: 10,
                height: 45,
                width: 45,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgFilter />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* POPULAR JOBS */}
        <View style={{ marginTop: 13, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "MontserratSemiBold",
              marginBottom: 10,
              paddingLeft: 15,
            }}
          >
            Популярные профессии
          </Text>
          {/* cards */}
          <View>
            {popularJobLoading ? (
              <>
                <FlatList
                  scrollEnabled={true}
                  data={popularJobCard}
                  renderItem={({ item, index }) => (
                    <Animatable.View
                      animation="fadeIn"
                      duration={1000}
                      delay={index * 400}
                    >
                      <PopularCardJob item={item} />
                    </Animatable.View>
                  )}
                  contentContainerStyle={{ columnGap: 0, paddingLeft: 15 }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>
            ) : (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 15,
                  columnGap: 10,
                }}
              >
                <SkeletonPopularCardJob />
                <SkeletonPopularCardJob />
                <SkeletonPopularCardJob />
              </View>
            )}
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
              Новые вакансии
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
            {jobLoadingDate ? (
              <>
                <FlatList
                  scrollEnabled={false}
                  data={jobCardDate}
                  renderItem={({ item, index }) => (
                    <Animatable.View
                      animation="fadeIn"
                      duration={1000}
                      delay={index * 300}
                    >
                      <JobCard item={item} similarJob={jobCardDate} />
                    </Animatable.View>
                  )}
                  keyExtractor={(item, index) => `key-${index}`}
                  contentContainerStyle={{ rowGap: 10 }}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            ) : (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 10,
                }}
              >
                <SkeletonJobCard />
                <SkeletonJobCard />
                <SkeletonJobCard />
                <SkeletonJobCard />
              </View>
            )}
          </View>
        </View>

        {/* ALL JOBS BUTTON */}
        <View style={{ marginBottom: 15, flex: 1, marginHorizontal: 15 }}>
          <TouchableOpacity activeOpacity={0.4}>
            <View
              style={{
                height: 50,
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
                Показать все вакансии
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>

      {/* / */}
    </View>
  );
}

export default HomeScreen;
