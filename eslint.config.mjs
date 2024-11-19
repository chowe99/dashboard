import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Apply to all relevant file types
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  // Define global variables
  { languageOptions: { globals: globals.browser } },

  // Use recommended rules from @eslint/js
  pluginJs.configs.recommended,

  // Use recommended rules from TypeScript ESLint
  ...tseslint.configs.recommended,

  // Use recommended rules from eslint-plugin-react
  pluginReact.configs.flat.recommended,

  // Custom rule overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Suppress the error for missing 'import React' in files using JSX
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn", // or 'off'

      // Allow JSX syntax in .js, .jsx, .ts, and .tsx files (useful for Next.js projects)
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"] },
      ],
    },
  },
];
