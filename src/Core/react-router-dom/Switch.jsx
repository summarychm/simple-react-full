import { useContext } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import RouterContext from './context';

// 通过判断Route.path和ctx.location.pathname是否匹配来决定是否渲染该Route
// 找到Route的话就停止渲染并返回该Route
export default function Switch(props) {
  const { location } = useContext(RouterContext);
  const children = Array.isArray(props.children) ? props.children : [props.children];

  // 依次对比children,如果匹配则直接返回,不再向下匹配
  for (let i = 0; i < children.length; i += 1) {
    const child = children[i]; // as Route
    const { path = '/', exact = false } = child.props;

    const regexp = pathToRegexp(path, [], { end: exact });
    const result = location.pathname.match(regexp);
    // 如果找到匹配项就停止循环并返回Route用于渲染.
    if (result) return child;
  }
  return null;
}
