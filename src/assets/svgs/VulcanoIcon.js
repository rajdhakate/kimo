import * as React from 'react';
import Svg, {Mask, Rect, G, Path} from 'react-native-svg';
const VulcanoIcon = ({color, props}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="mask0_6_1011"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}>
      <Rect width={24} height={24} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_6_1011)">
      <Path
        d="M1 18L7 10L11.5 16H19L14 9.35L11.5 12.65L10.25 11L14 6L23 18H1ZM5 16H9L7 13.325L5 16Z"
        fill={color}
      />
    </G>
  </Svg>
);
export default VulcanoIcon;
