type TConvertRGBAtoHSLA = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

// https://css-tricks.com/converting-color-spaces-in-javascript/ - формула для преобразований
const convertRGBAtoHSLA = ({
  red,
  green,
  blue,
  alpha,
}: TConvertRGBAtoHSLA): string => {
  const normilizeRed = red / 255;
  const normalizeGreen = green / 255;
  const normilizedBlue = blue / 255;

  const channelMin = Math.min(normilizeRed, normalizeGreen, normilizedBlue);
  const channelMax = Math.max(normilizeRed, normalizeGreen, normilizedBlue);
  const delta = channelMax - channelMin;

  let hue = 0;
  let saturation = 0;
  let light = 0;

  if (delta !== 0) {
    if (channelMax === normilizeRed) {
      hue = ((normalizeGreen - normilizedBlue) / delta) % 6;
    } else if (channelMax === normalizeGreen) {
      hue = (normilizedBlue - normilizeRed) / delta + 2;
    } else {
      hue = (normilizeRed - normalizeGreen) / delta + 4;
    }
  }

  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;

  light = (channelMax + channelMin) / 2;
  saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * light - 1));

  saturation = Number((saturation * 100).toFixed(1));
  light = Number((light * 100).toFixed(1));

  return `hsla(${hue},${saturation}%,${light}%,${alpha})`;
};

export { convertRGBAtoHSLA, type TConvertRGBAtoHSLA };
