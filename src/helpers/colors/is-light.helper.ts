type TIsLight = {
  hue: number;
  saturation: number;
  light: number;
  alpha: number;
};

const isLight = ({ hue, saturation, light, alpha }: TIsLight): boolean => {
  if (light >= 80 || alpha >= 44) {
    return true;
  }

  if (
    light <= 44 ||
    hue <= 20 ||
    hue >= 216 ||
    saturation <= 112 - light ||
    hue <= 100 - light ||
    hue >= 180 + (0.8 * light - 38.4)
  ) {
    return false;
  }

  return true;
};

export { isLight, type TIsLight };
