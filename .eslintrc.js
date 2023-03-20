module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    semi: 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    curly: ['error', 'multi'],
    eqeqeq: ['error', 'always'],
    'no-extra-semi': 'error',
    'multiline-ternary': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'no-duplicate-imports': 'error',
    'max-len': [
      'error',
      {
        ignoreComments: true,
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
  },
};
