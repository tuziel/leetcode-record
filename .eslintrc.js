module.exports = {
  'env': {
    'es6': true,
    "commonjs": true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'comma-dangle': [
      "error",
      "always-multiline",
    ],
    'indent': [
      'error',
      2,
      { "SwitchCase": 1 }
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    "eqeqeq": [
      "error",
      "always",
      { "null": "ignore" }
    ],
    "no-constant-condition": "off",
    "no-console": "warn",
    "no-unused-vars": "warn"
  }
};
