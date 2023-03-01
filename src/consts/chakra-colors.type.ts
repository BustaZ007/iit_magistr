import { theme } from "@chakra-ui/react";

type TChakraColors = keyof typeof theme.colors;
type TCodeSequence =
  | undefined
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type { TChakraColors, TCodeSequence };
