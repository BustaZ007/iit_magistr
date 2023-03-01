import { isLight } from './is-light.helper';

const getContrastColorForHSLA = (color: string): string => {
  const [hue, saturation, light, alpha = 1] = color
    .slice(color.indexOf('(') + 1, color.indexOf(')'))
    .replace(/%/g, '')
    .split(',');

  return isLight({
    hue: Number(hue),
    saturation: Number(saturation),
    light: Number(light),
    alpha: Number(alpha),
  })
    ? 'black'
    : 'white';
};

export default getContrastColorForHSLA;
