import { convertRGBAtoHSLA } from './convert-rgba-to-hsla.helper';
import getContrastColorForHSLA from './get-contrasts-color-for-hsla.helper';

const getContrastColorForRGBA = (color: string): string => {
  const [red, green, blue, alpha = 1] = color
    .slice(color.indexOf('(') + 1, color.indexOf(')'))
    .split(',');

  const hslaColor = convertRGBAtoHSLA({
    red: Number(red),
    green: Number(green),
    blue: Number(blue),
    alpha: Number(alpha),
  });

  return getContrastColorForHSLA(hslaColor);
};

export default getContrastColorForRGBA;
