import {
  isValidHex,
  isValidRGB,
  isValidRGBA,
  isValidHSL,
  isValidHSLA,
  isValidChakra,
} from './is-valid-color-type.helper';

type TColorTypes = 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'chakra';

const getColorType = (color: string): TColorTypes | undefined => {
  if (isValidHex(color)) return 'hex';
  if (isValidRGB(color)) return 'rgb';
  if (isValidRGBA(color)) return 'rgba';
  if (isValidHSL(color)) return 'hsl';
  if (isValidHSLA(color)) return 'hsla';
  if (isValidChakra(color)) return 'chakra';

  return undefined;
};

export { getColorType, type TColorTypes };
