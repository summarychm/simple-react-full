import React, { useContext } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import RouterContext from './context';

export default function Route(props) {
  const ctx = useContext(RouterContext);

  const { pathname } = ctx.location;
  const { component: Component, exact = false, render, children } = props;
  const path = typeof props.path === 'string' ? props.path : pathname;

  // 用于props传递
  const routeProps = {
    location: ctx.location,
    history: ctx.history,
  };

  let keys = [];
  // 使用pathToRegexp生成path对应的Regexp.
  const regexp = pathToRegexp(path, keys, { end: exact });
  const result = pathname.match(regexp);
  if (result) {
    // result是数组类型,首个值是当前url,无用所以剔除.
    const [url, ...values] = result;
    // keys的item使用对象形式存储,所以过滤下无用项.
    keys = keys.map((k) => k.name);
    // 拼装路径参数对象
    const params = values.reduce((memo, val, idx) => {
      memo[keys[idx]] = val;
      return memo;
    }, {});
    // TODO 测试下url和pathname是否在各种情况下都相等.
    routeProps.match = {
      path,
      url: pathname,
      isExact: pathname === url,
      params,
    };

    if (Component) return <Component {...routeProps} />;
    if (render) return render(routeProps);
    if (children) return children(routeProps);
    return null;
  }
  return children ? children(routeProps) : null;
}
