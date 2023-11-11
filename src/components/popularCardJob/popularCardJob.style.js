//react
import { Dimensions, StyleSheet } from "react-native";

//Dimensions
const { width, height } = Dimensions.get("window");

//components
import { COLORS } from "../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 44,
  },
});

export default styles;
