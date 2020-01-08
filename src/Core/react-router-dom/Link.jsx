import React, { useContext } from 'react';
import RouterContext from './context';
export default function Link(props) {
  const { history } = useContext(RouterContext);
  const { children, to, ...rest } = props;

  return (
    <a
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        history.push(to);
      }}
      href="#"
    >
      {/* href={history.createHref(to)} */}
      {children}
    </a>
  );
}
