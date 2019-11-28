import React, { useContext } from 'react';
import { ReactReduxContext } from './context';
import { bindActionCreators } from '../Redux';

function isFunction(obj) {
  return typeof obj === 'function';
}

// 两层函数包裹,外层用于接收filterProps相关的参数,内层用于接收要包裹的组件.
// 最终返回包装后的新组件(HOC)
export default (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
  const { dispatch, state } = useContext(ReactReduxContext);
  let filterProps = {};
  let finalProps = {};
  let boundActionCreators = null;
  if (isFunction(mapStateToProps)) {
    filterProps = { ...mapStateToProps(state, props) };
  }
  if (isFunction(mapDispatchToProps)) {
    boundActionCreators = mapDispatchToProps(dispatch, props);
  } else {
    boundActionCreators = bindActionCreators(mapDispatchToProps, dispatch);
  }
  finalProps = { ...props, ...filterProps, ...boundActionCreators };
  return <WrappedComponent {...finalProps} />;
};

// TODO 实现4个参数的版本
// TODO 数据缓存

// function shallowEqual(prev, next) {
//   const nextKeys = Object.keys(next);
//   const prevKeys = Object.keys(prev);
//   if (nextKeys.length !== prevKeys.length) return false;
//   for (const key of nextKeys) {
//     if (next[key] !== prev[key]) return false;
//   }
//   return true;
// }
