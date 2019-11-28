import React, { useContext } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import RouterContext from './context';
export default function Router(props) {
  const { location } = useContext(RouterContext);
  const { path, component: Component, exact = false } = props;
  // 使用pathToRegexp进行路径匹配,支持精确匹配
  const regexp = pathToRegexp(path, [], { end: exact });
  const result = location.pathname.match(regexp);
  // console.log('regexp,pathname,result', regexp, location.pathname, result);
  if (result) return <Component />;
  return null;
}
