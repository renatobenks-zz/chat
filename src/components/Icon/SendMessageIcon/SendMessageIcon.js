// @flow

import * as React from 'react';

type Props = {
  color?: string,
  size?: number,
};

const SendMessageIcon = ({ color, size }: Props) => {
  return (
    <svg viewBox="0 0 367.92 367.92" xmlSpace="preserve">
      <g fill={color}>
        <path d="M367.851,6.944c-0.056-0.424-0.12-0.832-0.248-1.248c-0.136-0.456-0.32-0.872-0.528-1.296c-0.112-0.232-0.152-0.48-0.288-0.704c-0.088-0.144-0.232-0.24-0.336-0.376c-0.264-0.368-0.576-0.688-0.904-1.016c-0.328-0.328-0.656-0.632-1.032-0.896c-0.136-0.096-0.224-0.232-0.36-0.312c-0.224-0.136-0.472-0.168-0.704-0.28c-0.44-0.216-0.872-0.4-1.336-0.536c-0.392-0.104-0.776-0.16-1.176-0.208c-0.472-0.056-0.928-0.088-1.4-0.064c-0.44,0.024-0.864,0.112-1.296,0.216c-0.272,0.064-0.552,0.04-0.824,0.136l-352,120c-3.184,1.072-5.352,4.04-5.416,7.408c-0.064,3.368,1.984,6.416,5.136,7.624l164.456,63.192l71.064,164.512c1.272,2.936,4.168,4.824,7.344,4.824c0.136,0,0.264,0,0.4-0.008c3.336-0.168,6.208-2.384,7.224-5.56l112-352c0.08-0.248,0.056-0.504,0.104-0.76c0.096-0.448,0.168-0.88,0.184-1.336C367.931,7.808,367.907,7.384,367.851,6.944z M31.475,128.368L330.011,26.592L173.619,182.984L31.475,128.368z M246.859,337.112l-61.76-142.976L342.403,36.824L246.859,337.112z" />
        <path d="M125.659,242.264c-3.128-3.128-8.184-3.128-11.312,0l-112,112c-3.128,3.128-3.128,8.184,0,11.312c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344l112-112C128.787,250.448,128.787,245.392,125.659,242.264z" />
        <path d="M146.347,298.264l-56,56c-3.128,3.128-3.128,8.184,0,11.312c1.56,1.56,3.608,2.344,5.656,2.344c2.048,0,4.096-0.784,5.656-2.344l56-56c3.128-3.128,3.128-8.184,0-11.312C154.531,295.136,149.475,295.136,146.347,298.264z" />
        <path d="M8.003,279.92c2.048,0,4.096-0.784,5.656-2.344l56-56c3.128-3.128,3.128-8.184,0-11.312c-3.128-3.128-8.184-3.128-11.312,0l-56,56c-3.128,3.128-3.128,8.184,0,11.312C3.907,279.136,5.955,279.92,8.003,279.92z" />
      </g>
    </svg>
  );
};

SendMessageIcon.defaultProps = {
  color: 'white',
};

export default SendMessageIcon;
