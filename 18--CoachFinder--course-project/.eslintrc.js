module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "plugin:vue/essential",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {},
};
