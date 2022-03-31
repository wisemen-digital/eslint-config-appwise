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

`tsconfig.json`
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": true,
    "declaration": true,
    "target": "esnext",
    "module": "commonjs",
    "types": [
      "node"
    ],
    "moduleResolution": "node",
    "sourceMap": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true,
    "strictNullChecks": true
  },
  "include": [
    "src/**/*",
    "test/**/*"
  ],
  "exclude": [
    "**/node_modules",
    "**/.*/"
  ]
}

```

```
npm i -D eslint-config-appwise eslint eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-putout eslint-plugin-unused-imports putout
```
