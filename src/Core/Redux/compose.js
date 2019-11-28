// 组合函数,可用于applyMiddleware和enhancer的增强
export default function compose(...fns) {
  if (fns.length === 0) return (arg) => arg; // 返回空函数
  if (fns.length === 1) return fns[0]; // 原样返回
  // reduce中返回函数,延迟其执行.反向依次嵌套包装middleware
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

// 旧写法
// function compose(...fns) {
//   if (!fns.length) return (args) => args;
//   return (...args) => {
//     let last = fns.pop();
//     let val = last(...args);
//     return fns.reduceRight((pre, cur) => {
//       return cur(pre);
//     }, val);
//   };
// }
