import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBackArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={15}
    viewBox="0 0 8 15" // Add viewBox
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13.815L1 7.815l6-6"
    />
  </Svg>
);

export default SvgBackArrow;
