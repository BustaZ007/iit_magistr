/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRODUCT_NAME: string;
  readonly VITE_COMPANY_FULL_NAME: string;
  readonly VITE_SUPPORT_EMAIL: string;
  readonly VITE_FOUNDATION_YEAR: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
