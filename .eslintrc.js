// eslint-disable-next-line no-undef
module.exports = {
  env: {
      browser: true,
      es2021: true
  },
  // parser: ["@typescript-eslint/parser", "babel-eslint"],
  extends: [
      "plugin:react/recommended",
      "eslint:recommended", 
      "plugin:react/recommended",
      "airbnb",
      "prettier"
  ],
  // globals: {
  //     Atomics: "readonly",
  //     SharedArrayBuffer: "readonly"
  // },
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
  },
  plugins: [
      "react",
      "prettier",
      "@typescript-eslint"
  ],
  rules: {
      "react/prop-types": 0,
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "react/state-in-constructor": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
  }
}

