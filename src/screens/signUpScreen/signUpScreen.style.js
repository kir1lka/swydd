import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "./../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 44,
  },

  //TITLE
  wrapperTitle: {
    marginTop: 84,
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontFamily: "PoppinsTitle",
    fontSize: 30,
  },
  textUnderTitle: {
    fontFamily: "PoppinsText",
    fontSize: 17,
    opacity: 0.3,
  },

  // INPUTS TEXT
  wrapperTextInput: {
    alignItems: "center",
    marginTop: 40,
  },

  //NAVIGATE IN LOGIN
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
