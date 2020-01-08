import React from 'react';
import Link from './Link';
import Route from './Route';

// NavLink支持activeClassName和activeStyle,isActive等特殊属性
export default function NavLink(props) {
  const { to, exact, activeClassName, activeStyle, isActive, children, ...remaining } = props;
  return (
    <Route
      path={to}
      exact={exact}
      children={(childrenProps) => {
        let activeFlag = isActive && isActive(childrenProps);
        if (!activeFlag && childrenProps.match) activeFlag = true;
        return (
          <Link
            className={activeFlag && activeClassName}
            style={activeFlag && activeStyle}
            to={to}
            {...remaining}
          >
            {children}
          </Link>
        );
      }}
    />
  );
}
