import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect'  // Cela permet de détecter automatiquement la version de React
      }
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
  },
];
