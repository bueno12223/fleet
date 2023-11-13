module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'semi': ['warn', 'never'],
    'no-console': 'warn',
    'quotes': ['warn', 'single'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'indent': ['warn', 2],
    '@typescript-eslint/indent': ['warn', 2],
  },
}
