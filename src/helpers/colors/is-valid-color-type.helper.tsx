import { theme } from '@chakra-ui/react';
import { TChakraColors, TCodeSequence } from '../../consts';

// Проверка, что строка сответствует формату #ABCDEF | #abcdef | #000000
const isValidHex = (hexColor: string): boolean => {
  const hexRegExp = /^#[\d|A-F|a-f]{6}/;

  return hexRegExp.test(hexColor);
};

// Проверка, что rgb(0,0,0) <= значения RGB цвета <= rgba(255,255,255)
const isValidRGB = (rgbColor: string): boolean => {
  const rgbRegExp =
    /^rgb\(((2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9]),){2}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])\)$/;

  return rgbRegExp.test(rgbColor);
};

// Проверка, что rgba(0,0,0,0) <= значения RGBA цвета <= rgba(255,255,255,1)
const isValidRGBA = (rgbaColor: string): boolean => {
  const rgbaRegExp =
    /^rgba\(((2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9]),){3}(0\.[0-9]*[1-9]|(0|1)(?!\.))\)$/;

  return rgbaRegExp.test(rgbaColor);
};

const isValidHSL = (hslaColor: string): boolean => {
  const hslRegExp =
    /^hsl\((3(([0-5][0-9])|60)|[1-2]([0-9]{2})|[1-9][0-9]|[0-9]),(100|[1-9][0-9]|[0-9])%,(100|[1-9][0-9]|[0-9])%\)$/;

  return hslRegExp.test(hslaColor);
};

// Проверка, что hsla(0,0,0,0) <= значения RGBA цвета <= rgba(255,255,255,1)
const isValidHSLA = (hslaColor: string): boolean => {
  const hslaRegExp =
    /^hsla\((3(([0-5][0-9])|60)|[1-2]([0-9]{2})|[1-9][0-9]|[0-9]),((100|[1-9][0-9]|[0-9])%,){2}(0\.[0-9]*[1-9]|(0|1)(?!\.))\)$/;

  return hslaRegExp.test(hslaColor);
};

const isValidChakra = (color: string): boolean => {
  const [colorName, code] = color.split('.') as [TChakraColors, TCodeSequence];

  if (!theme.colors[colorName] || (code && !theme.colors[colorName][code])) {
    return false;
  }

  return true;
};

export {
  isValidHex,
  isValidRGB,
  isValidRGBA,
  isValidHSL,
  isValidHSLA,
  isValidChakra,
};
