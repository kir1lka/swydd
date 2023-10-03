import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "./../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 88,
  },

  //TITLE
  wrapperTitle: {
    marginTop: 50,
    alignItems: "center",
  },
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

  // INPUTS TEXT
  wrapperTextInput: {
    alignItems: "center",
    marginTop: 60,
  },

  //NAVIGATE IN LOGIN
  wrapperBottomNavigate: {
    alignItems: "center",
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
