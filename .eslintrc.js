module.exports = {
  'env': {
    'es2020': true,
    'commonjs': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'globals': {
    '_': 'readonly',
    'TreeNode': 'readonly',
    'ListNode': 'readonly',
    'describe': 'readonly',
    'it': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 11,
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
