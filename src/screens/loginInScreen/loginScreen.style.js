import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "./../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 44,
  },

  //NAVIGATETOP
  wrapperTopNavigate: {
    height: 44,
    marginLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  //TITLE
  title: {
    marginTop: 44,
    marginBottom: 10,
    fontFamily: "PoppinsTitle",
    fontSize: 30,
  },
  textUnderTitle: {
    fontFamily: "PoppinsText",
    fontSize: 17,
    opacity: 0.3,
  },

  //FORGOT
  wrapperInput: { alignItems: "center", marginTop: 40 },
  wrapperForgot: { width: 315, marginBottom: 40 },
  textForgot: {
    color: COLORS.main,
    textDecorationLine: "underline",
    fontFamily: "PoppinsText",
    fontSize: 18,
  },

  //NAVIGATE IN SIGNUP
  wrapperBottomNavigate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 40,
  },
  textBottomNavigate: { fontFamily: "PoppinsText", fontSize: 17 },
  linkBottomNavigate: {
    paddingLeft: 5,
    color: COLORS.main,
    textDecorationLine: "underline",
    fontFamily: "PoppinsText",
    fontSize: 17,
  },
});

export default styles;
