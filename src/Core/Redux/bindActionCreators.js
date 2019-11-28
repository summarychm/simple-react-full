// 为单个actionCreator绑定dispatch
function bindActionCreator(actionCreator, dispatch) {
  return (...args) => {
    dispatch(actionCreator(...args)); // 支持接收参数
  };
}
/** 批量为actionAcretors绑定dispatch
 * @param {function | object} actionCreators
 * @param {function} dispatch
 * obj 写法 let actions = { add:{type: types.ADD}}
 * func写法 let add=function(){ return {type:types.ADD,payload}}
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }
  const boundActionCreators = {}; // 存放绑定dispatch后actionCreators
  for (const key in actionCreators) {
    if (Object.prototype.hasOwnProperty.call(actionCreators, key)) {
      const actionCreator = actionCreators[key];
      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }
  }
  return boundActionCreators;
}
export default bindActionCreators;
