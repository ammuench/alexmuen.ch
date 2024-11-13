import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    ignores: [
      ".astro/**",
      ".husky/**",
      "*.d.ts",
      "node_modules/",
      "public/license.html",
    ],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  eslintConfigPrettier,
];
