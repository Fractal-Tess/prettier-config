/** @type {import('prettier').Config} */
const defaultConfig = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  arrowParens: "avoid",
  trailingComma: "none",

  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "",
    "^[$@#~]\/[A-Za-z]+\/(.*)",
    "",
    "^[./]",
  ],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};

/**
 * @param {Partial<import('prettier').Config>} overrides
 */
export function config(overrides = {}) {
  return {
    ...defaultConfig,
    ...overrides,
  };
}
