module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  rules: {
    'max-len': 0,
    'no-bitwise': 0,
    'arrow-parens': 0,
    'no-plusplus': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-underscore-dangle': 0,
    'no-console': 'off',
    'import/extensions': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: [
          'test/unit/index.js',
        ],
      },
    ],
    'import/no-unresolved': 0,
    'prefer-destructuring': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
