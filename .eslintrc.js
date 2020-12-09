module.exports = {
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2020,
    // Allows for the use of imports
    sourceType: 'module',
  },
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    //This will display prettier errors as ESLint errors.
    //Make sure this is always the last configuration in the extends array
    'plugin:prettier/recommended',
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-shadow': 'warn',
    'no-undefined': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'standard/no-callback-literal': 'off',
    'prefer-promise-reject-errors': 'warn',
    'accessor-pairs': 'warn',

    // 'import/no-unresolved': 'error',

    // 'react/forbid-prop-types': 'off',
    // 'react/jsx-handler-names': 'warn',
    // 'react/jsx-indent': 'off',
    // 'react/jsx-curly-newline': 'off',
    // 'react/jsx-no-bind': 'warn',
    // 'react/jsx-pascal-case': [
    //   'error',
    //   {
    //     allowAllCaps: true,
    //   },
    // ],
    'class-methods-use-this': [
      'warn',
      {
        exceptMethods: [
          'render',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    // 禁止使用 '// @ts-ignore', 默认为error
    // 虽然如此，推荐使用'/*eslint no-use-before-define: "off"*/'去禁止检测
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
  },
}
