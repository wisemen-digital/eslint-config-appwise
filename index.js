module.exports = {
  "extends": [
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "unused-imports",
    "import",
    "putout"
  ],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/strict-boolean-expressions": "on",
    "@typescript-eslint/no-extraneous-class":"off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "ignoredNodes": [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
        ]
      }
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "import/order": "error",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/newline-after-import": "error",
    "putout/remove-empty-newline-after-last-element": "error",
    "putout/remove-empty-newline-after-last-specifier": "error",
    "putout/remove-empty-newline-before-first-specifier": "error",
    "putout/remove-newline-from-empty-object": "error",
    "putout/add-newline-before-function-call": "error",
    "putout/add-newline-after-function-call": "error",
  }
};
