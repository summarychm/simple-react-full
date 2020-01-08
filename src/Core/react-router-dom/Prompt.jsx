import React, { useContext } from 'react';
import ReactRouterContext from './context';
export default function Prompt({ when, message }) {
  const { history } = useContext(ReactRouterContext);
  history.block(when ? message : null); // 设置block信息
  return null;
}
