module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-param-reassign': 0,
    'object-curly-newline': 0, // 尽量使用一行导出
    'no-restricted-syntax': 0, // 使用forOf+Object.entries语法
    quotes: 0, // 可以使用双引号
    'no-console': 0, // 可以使用console
    'import/newline-after-import': 0, // 处理import *的情况
    'import/prefer-default-export': 0, // 可以使用export导出
    'react/prop-types': 0, // prop-types改为可选
  },
};
