import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

//constants
import { COLORS } from "./../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    height: 380,
    width: 300,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    color: COLORS.main,
    fontFamily: "PoppinsTitle",
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: "PoppinsText",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    opacity: 0.7,
    marginHorizontal: 34,
  },
});

export default styles;
