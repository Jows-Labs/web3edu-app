module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  // extends: [],
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*",
    "/generated/**/*",
  ],
  plugins: [],
  rules: {}, // Nenhuma regra ativa
};
