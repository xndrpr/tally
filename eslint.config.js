import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off", // Disable React in scope requirement
            "react/jsx-uses-react": "off", // Disable usage detection for React
        },
    },
    {
        plugins: { prettier: pluginPrettier },
        rules: {
            "prettier/prettier": "error", // Treat Prettier issues as errors
            "no-empty": ["error", { allowEmptyCatch: false }], // Disallow empty blocks
            "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }], // Disallow multiple empty lines
            "max-lines": ["error", { max: 200, skipBlankLines: false, skipComments: true }], // Limit max lines in a file
        },
    },
    prettierConfig,
];
