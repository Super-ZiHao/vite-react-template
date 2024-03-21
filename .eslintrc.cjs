module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "vue/multi-word-component-names": 0,
    "no-var": "error", // 不允许使用 var
    semi: "error", // 结尾带分号,
    quotes: [1, "single"],
    curly: "error",
    eqeqeq: "error",
    indent: "off",
    "no-multiple-empty-lines": "error",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
    "@typescript-eslint/no-explicit-any": "off",
    "no-undef": "off",
  },
};
