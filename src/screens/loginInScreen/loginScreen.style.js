import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "./../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 50,
  },
  //TITLE
  title: {
    marginBottom: 10,
    fontFamily: "PoppinsTitle",
    fontSize: 34,
  },
  textUnderTitle: {
    fontFamily: "PoppinsText",
    fontSize: 17,
    opacity: 0.6,
  },

  //FORGOT
  wrapperInput: { alignItems: "center", marginTop: 60 },
  wrapperForgot: { width: 315, marginBottom: 40 },
  textForgot: {
    color: COLORS.main,
    textDecorationLine: "underline",
    fontFamily: "PoppinsText",
    fontSize: 17,
  },

  //NAVIGATE IN SIGNUP
  wrapperBottomNavigate: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 40,
  },
  textBottomNavigate: { fontFamily: "PoppinsText", fontSize: 17 },
  linkBottomNavigate: {
    color: COLORS.main,
    textDecorationLine: "underline",
    fontFamily: "PoppinsText",
    fontSize: 17,
  },
});

export default styles;
