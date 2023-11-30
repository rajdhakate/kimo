import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SVGComponent = ({color, props = {}}) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="Group 1">
      <Path
        id="arrow_forward"
        d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
        fill={color}
      />
    </G>
  </Svg>
);
export default SVGComponent;
