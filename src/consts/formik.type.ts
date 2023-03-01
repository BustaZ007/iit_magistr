import { ChangeEvent } from "react";

type TFormikOnChange = {
  (e: ChangeEvent<any>): void;
  <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
    ? void
    : (e: string | ChangeEvent<any>) => void;
};

type TFormikError = string | undefined;

export type { TFormikOnChange, TFormikError };
