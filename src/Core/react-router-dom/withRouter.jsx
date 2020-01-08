import React from 'react';
import ReactRouterContext from './context';

// HOC中不能使用hook,所以使用老式写法
export default function withRouter(Component) {
  return (
    <ReactRouterContext.Consumer>
      {(context) => {
        return (props) => {
          // 透传ref函数
          const { wrappedComponentRef, ...remainingProps } = props;
          return <Component {...remainingProps} {...context} ref={wrappedComponentRef} />;
        };
      }}
    </ReactRouterContext.Consumer>
  );
}
