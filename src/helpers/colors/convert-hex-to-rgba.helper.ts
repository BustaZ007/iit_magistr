// Конвертация из Hex (FF) в десятичную систему счисления (255)
const convertFromHexToDecimal = (hex: string) => parseInt(`0x${hex}`, 16);

const convertHexToRGBA = (color: string) => {
  const red = convertFromHexToDecimal(color.slice(1, 3));
  const green = convertFromHexToDecimal(color.slice(3, 5));
  const blue = convertFromHexToDecimal(color.slice(5, 7));

  return `rgba(${red},${green},${blue},0)`;
};

export default convertHexToRGBA;
