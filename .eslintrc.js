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
    'indent': [
      'error',
      2
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
      "always"
    ],
    "no-console": "warn",
    "no-unused-vars": "warn"
  }
};
