import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Apply these rules to all JavaScript and TypeScript files
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Suppress the error for missing 'import React' in files using JSX
      "react/react-in-jsx-scope": "off",

      // Allow JSX syntax in .js and .jsx files (useful for Next.js projects)
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
    },
  },
];
