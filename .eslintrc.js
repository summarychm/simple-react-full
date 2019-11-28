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
    quotes: 0, // 可以使用双引号
    'no-param-reassign': 0, // 禁止给参数重新赋值
    'arrow-body-style': 0, // 箭头函数在多层嵌套时,可读性不高
    'no-unused-vars': 0, // 可以存在未使用的变量
    'space-before-function-paren': 0, // 函数名空格校验
    'object-curly-newline': 0, // 尽量使用一行导出
    'no-restricted-syntax': 0, // 使用forOf+Object.entries语法
    'operator-linebreak': [2, 'after'], // 换行时运算符放到行尾

    'no-console': 0, // 可以使用console
    'import/newline-after-import': 0, // 处理import *的情况
    'import/prefer-default-export': 0, // 可以使用export导出
    'react/prop-types': 0, // prop-types改为可选
    'react/no-unused-state': 0, // 屏蔽未使用state导致的报错
    'react/jsx-props-no-spreading': 0, // 使用展开运算符批量传递props
  },
};
