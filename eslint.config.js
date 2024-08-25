import love from 'eslint-config-love'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

const compatConfig = compat.config({
  plugins: [
    'putout',
    'unused-imports',
    // 'import'
  ],
  rules: {
    "no-console": "warn",
    "max-len": [
      "error",
      {
        "code": 100,
        "comments": 100,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "@typescript-eslint/strict-boolean-expressions": "error",
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
    // "import/order": "error",
    // "import/no-absolute-path": "error",
    // "import/no-dynamic-require": "error",
    // "import/no-deprecated": "warn",
    // "import/no-extraneous-dependencies": "error",
    // "import/no-mutable-exports": "error",
    // "import/no-self-import": "error",
    // "import/no-useless-path-segments": "error",
    // "import/newline-after-import": "error",
    "putout/remove-empty-newline-after-last-element": "error",
    "putout/remove-empty-newline-after-last-specifier": "error",
    "putout/remove-empty-newline-before-first-specifier": "error",
    "putout/remove-newline-from-empty-object": "error",
    "putout/add-newline-before-function-call": "error",
    "putout/add-newline-after-function-call": "error",
    "curly": [
      "error", "multi-line"
    ],
    "nonblock-statement-body-position": [
      "error", "beside"
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      { "selector": "interface", "format": ["PascalCase"] },
      { "selector": "class", "format": ["PascalCase" ]}
    ]
  }
})

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...love
  },
  ...compatConfig
)
