module.exports = {
  'env': {
    'es2022': true,
    'commonjs': true,
    'node': true,
    'mocha': true,
  },
  'extends': 'eslint:recommended',
  'globals': {
    '_': 'readonly',
    'TreeNode': 'readonly',
    'ListNode': 'readonly',
    'describe': 'readonly',
    'Node': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion ': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'eqeqeq': [
      'error',
      'always',
      { 'null': 'ignore' },
    ],
    'no-constant-condition': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
};
