/** @type {import('prettier').Config} */
export default {
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
    "^@workspace\/[A-Za-z]+\/(.*)",
    "^@repo\/[A-Za-z]+\/(.*)",
    "^[#~$]\/[A-Za-z]+\/(.*)",
    "",
    "^[./]",
  ],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro",
    "prettier-plugin-svelte",
  ],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
};
