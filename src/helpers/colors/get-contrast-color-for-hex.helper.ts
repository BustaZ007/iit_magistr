import { convertHexToRGBA } from '.';
import getContrastColorForRGBA from './get-contrasts-color-for-rgba.helper';

const getContrastColorForHex = (color: string): string => {
  const rgbaColor = convertHexToRGBA(color);

  return getContrastColorForRGBA(rgbaColor);
};

export default getContrastColorForHex;
