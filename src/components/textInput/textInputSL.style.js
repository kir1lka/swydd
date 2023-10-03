import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "./../../constants/color";

const styles = StyleSheet.create({
  wrapperTextInput: {
    width: 315,
    height: 51,
    backgroundColor: COLORS.grayInput,
    borderRadius: 10,
    marginBottom: 20,
    color: "#000",
    paddingLeft: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default styles;
