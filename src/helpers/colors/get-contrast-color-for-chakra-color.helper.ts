import { theme } from "@chakra-ui/react";
import { TChakraColors, TCodeSequence } from "../../consts";
import getContrastColorForHex from "./get-contrast-color-for-hex.helper";
import getContrastColorForRGBA from "./get-contrasts-color-for-rgba.helper";

// Перед использованием проверить цвет на валидность с помощью isValidChakra
const getContrastColorForChakraColor = (color: string): string => {
  const [colorName, code] = color.split(".") as [TChakraColors, TCodeSequence];
  const chakraColor = (
    code === undefined ? theme.colors[colorName] : theme.colors[colorName][code]
  ) as string;

  return chakraColor.startsWith("#")
    ? getContrastColorForHex(chakraColor)
    : getContrastColorForRGBA(chakraColor.replace(/ /g, ""));
};

export default getContrastColorForChakraColor;
