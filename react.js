module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "react-refresh"
  ],
  rules: {
    "no-use-before-define": "off",
    "camelcase": "off",
    "react/self-closing-comp": "error",
    "react-refresh/only-export-components": "off",
    "react-hooks/exhaustive-deps": "off",
    "prettier/prettier": ["error", {
      "printWidth": 120,
      "tabWidth": 2,
      "singleQuote": false,
      "trailingComma": "all",
      "arrowParens": "always",
      "semi": true,
      "endOfLine": "auto",
    }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/no-unknown-property": "error",
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
  ignorePatterns: [
    "node_modules"
  ]
}