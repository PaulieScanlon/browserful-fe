import { css } from 'react-emotion';

// This had to be styled as a css property or next-routes got confused
export const SliderWrapper = css`
  .rheostat {
    overflow: visible;
  }
  .rheostat-horizontal {
    height: 24px;
  }
  .rheostat-background {
    background-color: #fcfcfc;
    border: 1px solid #d8d8d8;
    position: relative;
  }
  .rheostat-horizontal .rheostat-background {
    height: 15px;
    top: 0px;
    width: 100%;
  }
  .rheostat-horizontal .rheostat-handle {
    top: -5px;
    margin-left: -13px;
  }
  .rheostat-progress {
    background-color: #abc4e8;
    position: absolute;
  }
  .rheostat-horizontal .rheostat-progress {
    height: 15px;
    top: 0px;
  }
  .rheostat-handle {
    background-color: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 20%;
    height: 24px;
    outline: none;
    z-index: 2;
    width: 24px;
  }
  .rheostat-handle:before,
  .rheostat-handle:after {
    content: '';
    display: block;
    position: absolute;
    background-color: #dadfe8;
  }
`;
