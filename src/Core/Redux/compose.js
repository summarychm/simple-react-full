/** 组合函数,将middleware层层嵌套包裹起来,供外层调用.
 * 可用于applyMiddleware和enhancer的增强
 * @param  {...any} fns middleware集合
 */
export default function compose(...fns) {
  if (fns.length === 0) return (arg) => arg; // 返回空函数
  if (fns.length === 1) return fns[0]; // 原样返回
  // 反向依次嵌套middleware,合成一个洋葱版的中间件函数.首个中间件支持传递多个参数
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

// 旧写法
// function compose(...fns) {
//   if (!fns.length) return (args) => args;
//   return (...args) => {
//     let last = fns.pop();
//     let val = last(...args);// 接收额外参数
//     return fns.reduceRight((pre, cur) => {
//       return cur(pre);
//     }, val);
//   };
// }
