import React from 'react';
import Link from './Link';
import Route from './Route';
// import { Route, Link } from '.';
export default function NavLink(props) {
  const { to, exact, activeClassName, activeStyle, isActive, children, ...remaining } = props;
  return (
    <Route
      path={to}
      exact={exact}
      // eslint-disable-next-line react/no-children-prop
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
        // if (activeFlag) {
        //   return (

        //   );
        // }
        // return <Link>{children}</Link>;
      }}
    />
  );
}
