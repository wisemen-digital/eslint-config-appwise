`eslintrc.json`
```json
{
    "env": {
        "es2021": true,
        "node": true,
        "commonjs": true,
        "mocha": true
    },
    "extends": [
        "appwise"
    ],
    "parserOptions": {
        "project": "tsconfig.json"
    }
}
```

```
npm i -D eslint-config-appwise eslint eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-putout eslint-plugin-unused-imports
```
