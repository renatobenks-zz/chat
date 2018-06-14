// @flow

import * as React from 'react';
import styled from 'styled-components';

const Gradient1 = styled.stop`
  stop-color: ${props => props.theme.palette.primary};
`;

const Gradient2 = styled.stop`
  stop-color: ${props => props.theme.palette.secondary};
`;

type Props = {
  withTitle?: boolean,
  size?: number,
};

const Logo = ({ withTitle, size }: Props) => {
  return (
    <svg height={size} viewBox="0 0 739 143">
      <defs>
        <path id="a" d="M68.19 78.034V.545H.364v77.489H68.19z" />
        <linearGradient x1="97.694%" y1="2.306%" x2="2.196%" y2="97.804%" id="c">
          <Gradient1 offset="0%" />
          <Gradient2 offset="100%" />
        </linearGradient>
        <path
          d="M194.458 92.195c0 1.929-.624 3.394-.624 3.394-10.213 27.77-36.943 46.42-66.56 46.42a70.506 70.506 0 0 1-28.226-5.874s-12.23 5.872-28.164 5.872C31.736 142.007 0 110.282 0 71.145 0 32.01 31.736.285 70.884.285c16.286 0 28.164 5.872 28.164 5.872A70.506 70.506 0 0 1 127.273.283c29.618 0 56.348 18.65 66.561 46.42 0 0 .624 1.464.624 3.393 0 1.343-.302 2.91-1.325 4.363-1.722 2.444-4.728 3.95-8.148 3.97h-46.26c-7.692 0-10.867-8.887-10.867-8.887-5.392-14.191-15.823-25.55-28.795-32.333C79.645 27.4 66.36 47.745 66.355 71.145c.005 23.402 13.29 43.749 32.708 53.938 12.972-6.782 23.403-18.142 28.795-32.333 0 0 3.175-8.888 10.867-8.888h46.26c3.42.02 6.426 1.527 8.148 3.97 1.023 1.455 1.325 3.021 1.325 4.363zm-58.126-48.347c-5.398-12.911-14.434-23.677-25.635-31.278a60.694 60.694 0 0 1 16.576-2.311c24.843 0 47.318 15.273 56.538 38.195h-42.372c-3.323 0-5.107-4.606-5.107-4.606zM9.98 71.145C9.987 37.572 37.312 10.26 70.898 10.26c5.68 0 11.233.804 16.535 2.308C68.708 25.332 56.385 46.83 56.375 71.145c.01 24.315 12.333 45.815 31.058 58.58a60.497 60.497 0 0 1-16.535 2.308c-33.586 0-60.911-27.313-60.918-60.888zm100.717 58.577c11.201-7.602 20.237-18.367 25.635-31.279 0 0 1.784-4.604 5.107-4.604h42.372c-9.22 22.921-31.695 38.194-56.538 38.194a60.74 60.74 0 0 1-16.576-2.311z"
          id="d"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        {withTitle && (
          <React.Fragment>
            <path
              d="M340.106 36.05c-.005-1.978-1.582-3.667-3.595-3.573-9.565.7-17.167 4.09-22.793 10.178-6.358 6.88-9.536 16.439-9.536 28.68v34.638a3.584 3.584 0 0 0 3.583 3.585h2.805a3.584 3.584 0 0 0 3.584-3.585l-.01-34.638c0-9.394 2.23-16.581 6.69-21.563 3.765-4.207 9.004-6.615 15.677-7.27 2.013-.175 3.595-1.47 3.595-3.647V36.05zm11.862 30.587c.758-7.874 3.58-14.182 8.469-18.31 4.885-4.127 11.647-6.191 20.28-6.191 8.635 0 15.397 2.064 20.285 6.191 4.886 4.128 7.672 10.436 8.525 18.31h-57.559zm28.75 33.876c-9.49 0-16.702-2.466-21.634-7.402-4-3.997-6.349-9.52-7.108-16.51h62.275c1.934 0 2.988-.397 4.01-1.321 1.544-1.397 1.461-4.026 1.461-4.026 0-12.24-3.42-21.578-10.252-28.457-6.832-6.879-16.416-10.32-28.752-10.32-12.496 0-21.735 3.422-28.75 10.32-11.2 11.013-10.248 28.853-10.248 28.868-.02 12.363 3.416 21.68 10.23 28.586 11.089 11.239 28.684 10.23 28.704 10.23 12.334 0 22.016-3.421 28.848-10.253 3.708-3.707 5.641-6.2 7.337-11.529 1.197-3.775-2.49-3.519-2.49-3.519l-4.628.001c-2.092-.018-2.853 1.401-3.927 3.48-5.328 9.325-15.585 11.852-25.076 11.852zm108.445-7.272c-4.933 4.982-12.144 7.472-21.634 7.472-9.395 0-16.582-2.49-21.564-7.472-4.982-4.982-7.472-12.32-7.472-21.714 0-9.491 2.49-16.39 7.472-21.324 4.982-4.935 12.169-7.401 21.564-7.401 9.49 0 16.701 2.466 21.634 7.4 4.936 4.934 7.402 11.834 7.402 21.325 0 9.394-2.466 16.732-7.402 21.714m13.782-90.24h-2.805a3.584 3.584 0 0 0-3.585 3.584l.01 38.71c-3.186-4.2-7.813-7.83-12.7-9.681-4.887-1.851-10.074-2.775-16.336-2.775-12.24 0-21.777 3.416-28.61 10.248-6.832 6.83-10.248 16.103-10.248 28.44 0 12.24 3.416 21.927 10.249 28.76 6.832 6.832 16.369 10.247 28.609 10.247 12.336 0 21.919-3.415 28.75-10.247 6.834-6.833 10.249-16.52 10.249-28.449V6.896c0-2.291-1.605-3.896-3.583-3.896M230.268 71.546c0 12.222 3.409 21.765 10.23 28.635 6.821 6.868 16.39 10.334 28.704 10.334 11.32 0 18.718-3.166 22.44-5.645 2.879-1.749 2.565-3.782 2.565-6.055v-1.811c0-4.65-3.807-2.732-5.9-1.586-4.585 2.435-9.188 5.118-19.105 5.118-9.473 0-16.674-2.487-21.599-7.46-4.926-4.974-7.389-12.15-7.389-21.53s2.463-16.555 7.39-21.53c4.924-4.972 12.125-7.46 21.598-7.46 6.575 0 11.823 1.2 16.408 3.634 2.047.987 5.9 2.919 5.9-1.424v-2.102c0-2.273.324-4.061-2.582-5.716-6.078-3.041-11.233-4.37-19.726-4.37-12.315 0-21.883 3.466-28.704 10.334-6.821 6.87-10.23 16.413-10.23 28.634m358.957 32.524c0-2.177-1.592-3.472-3.603-3.647-6.675-.654-11.913-3.062-15.677-7.27-4.463-4.98-6.691-12.168-6.691-21.562l.008-28.25h16.419a3.583 3.583 0 0 0 3.583-3.584v-2.806a3.583 3.583 0 0 0-3.583-3.583h-16.418V9.648a3.583 3.583 0 0 0-3.583-3.583h-2.799v.002l-.006-.002a3.584 3.584 0 0 0-3.583 3.584v23.719h-7.086a3.584 3.584 0 0 0-3.584 3.583v2.806a3.584 3.584 0 0 0 3.584 3.583h7.086v28.25c0 12.242 3.179 21.8 9.536 28.68 5.625 6.09 13.227 9.479 22.794 10.178 2.011.095 3.597-1.594 3.603-3.573v-2.804zM527.873 2.949h-2.804a3.584 3.584 0 0 0-3.584 3.583v9.148a3.584 3.584 0 0 0 3.584 3.584h2.804a3.584 3.584 0 0 0 3.585-3.584V6.532a3.584 3.584 0 0 0-3.585-3.583m0 30.419h-2.804a3.584 3.584 0 0 0-3.584 3.584v69.022a3.584 3.584 0 0 0 3.584 3.583h2.804a3.584 3.584 0 0 0 3.585-3.583V36.952a3.584 3.584 0 0 0-3.585-3.584m123.232 51.17c0 12.262-7.633 16.4-26.5 16.4-13.505 0-21.473-4.505-21.473-14.168 0-10.585 8.243-14.713 26.64-14.713h21.333v12.48zm.027-29.497v8.1h-21.706c-25.055 0-36.229 7.226-36.229 23.436 0 14.97 11.742 23.907 31.408 23.907 25.637 0 36.49-7.666 36.49-25.633v-29.81c0-11.083-7.54-16.04-7.54-16.04-3.767-2.915-8.576-4.736-14.422-5.466-3.6-.466-6.606-.637-10.31-.637-3.514 0-6.523.141-9.918.55-6.205.648-11.31 2.488-15.275 5.553-4.991 3.865-7.494 9.277-7.53 16.04 0 0 .117 3.118 3.523 3.118h2.767c1.951 0 3.534-1.263 3.534-3.215 0-7.202 6.035-9.537 6.035-9.537 1.757-.853 8.331-2.845 16.815-2.845 8.838 0 14.7 1.99 16.455 2.844 0 0 5.904 2.241 5.904 9.635z"
              fill="#828796"
            />
            <g transform="translate(670.72 32.353)">
              <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
              </mask>
              <path
                d="M33.238 43.054c18.396 0 25.018 1.119 25.018 11.703 0 9.664-9.385 13.73-22.89 13.73-10.836 0-17.965-1.364-22.072-4.848-3.341-3.028-3.108-7.554-3.108-7.554 0-1.951-1.582-3.215-3.534-3.215H3.887C.48 52.87.364 55.987.364 55.987c0 11.242 7.474 16.197 7.474 16.197 5.926 4.004 14.947 5.85 27.528 5.85 19.665 0 32.825-8.5 32.825-23.47 0-16.207-9.85-21.175-34.906-21.175-10.712 0-15.854-2.735-15.854-2.735-6.254-2.756-5.905-8.581-5.905-8.581 0-6.808 5.905-9.314 5.905-9.314 1.755-.854 7.016-2.549 15.854-2.549 8.485 0 14.459 1.815 16.216 2.668 0 0 5.52 2.408 5.927 7.795.14 1.85 1.582 2.997 3.534 2.997h2.765c3.48 0 3.413-3.118 3.413-3.118 0-4.459-2.32-10.039-7.312-13.904-3.966-3.065-8.97-4.81-14.674-5.553-3.39-.442-6.404-.55-9.92-.55-3.703 0-6.11.17-9.707.637-5.848.73-10.915 2.814-14.424 5.466 0 0-7.54 4.933-7.54 15.425 0 0-.52 9.125 7.54 15.095 0 0 6.444 5.886 24.135 5.886"
                fill="#828796"
                mask="url(#b)"
              />
            </g>
          </React.Fragment>
        )}
        <use fill="url(#c)" xlinkHref="#d" transform="translate(.91 .4)" />
      </g>
    </svg>
  );
};

Logo.defaultProps = {
  size: 30,
  withTitle: true,
};

export default Logo;
