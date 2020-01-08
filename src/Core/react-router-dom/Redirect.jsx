import { useContext } from 'react';

import RouterContent from './context';

// 只负责跳转,不渲染内容
export default function Redirect(props) {
  const ctx = useContext(RouterContent);
  const { history, location } = ctx;
  const { to, from } = props;
  if (!from || from === location.pathname) history.push(to);

  return null;
}
