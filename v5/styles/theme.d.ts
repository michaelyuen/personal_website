import { Theme } from "styled-system";

type ColorMode = {
  _name: string;
  background: string;
  gray: string;
  highlight: string;
  accent: string;
  lightgray: string;
  midgray: string;
  primary: string;
  secondary: string;
  text: string;
};

// color has inconsistent properties
type Theme = {
  breakpoints: string[];
  colors: {
    _name: string;
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    highlight: string;
    // muted: string;
    gray: string; // Consider removing. Refer to theme spec
    lightgray: string; // Consider removing
    midgray: string; // Consider removing
    modes: {
      dark: ColorMode;
      gray: ColorMode;
      rose: ColorMode;
      chocolate: ColorMode;
      teal: ColorMode;
    };
  };
  fonts: {
    body: string;
    header: string;
    mono: string;
  };
  fontSizes: number[];
  lineHeights: {
    body: number;
    heading: number;
  };
  mediaQueries: {
    small: string;
    medium: string;
    large: string;
  };
  sizes: {
    avatar: string;
    maxWidth: string;
  };
  space: number[];
  zIndices: number[];
};

export default Theme;
