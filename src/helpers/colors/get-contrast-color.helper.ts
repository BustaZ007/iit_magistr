import { getColorType } from './get-color-type.helper';
import getContrastColorForChakraColor from './get-contrast-color-for-chakra-color.helper';
import getContrastColorForHex from './get-contrast-color-for-hex.helper';
import getContrastColorForHSLA from './get-contrasts-color-for-hsla.helper';
import getContrastColorForRGBA from './get-contrasts-color-for-rgba.helper';

type TColorTypes = {
  chakra: (color: string) => string;
  hex: (color: string) => string;
  rgb: (color: string) => string;
  rgba: (color: string) => string;
  hsl: (color: string) => string;
  hsla: (color: string) => string;
};

const colorTypes: TColorTypes = {
  chakra: getContrastColorForChakraColor,
  hex: getContrastColorForHex,
  rgb: getContrastColorForRGBA,
  rgba: getContrastColorForRGBA,
  hsl: getContrastColorForHSLA,
  hsla: getContrastColorForHSLA,
};

function getContrastColor(color: string): string | undefined {
  const colorType = getColorType(color);

  return colorType !== undefined ? colorTypes[colorType](color) : undefined;
}

export default getContrastColor;
