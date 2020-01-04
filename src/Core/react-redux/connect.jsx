import React, { useContext, useState, useEffect } from 'react';
import { ReactReduxContext } from './context';
import { bindActionCreators } from '../redux';

const isFunction = (obj) => typeof obj === 'function';

// 两层函数包裹(柯里化),外层用于自定义filterProps的参数,内层用于接收要包裹的Component.
export default (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
  const { dispatch, getState, subscribe } = useContext(ReactReduxContext);

  const [filterStateToProps, setFilterStateToProps] = useState(() => {
    console.log('mapStateToProps init');
    return mapStateToProps ? mapStateToProps(getState(), props) : {};
  });
  const [boundActionCreators] = useState(() => {
    console.log('mapDispatchToProps init');
    if (isFunction(mapDispatchToProps)) return mapDispatchToProps(dispatch, props);
    return bindActionCreators(mapDispatchToProps, dispatch);
  });
  useEffect(() => {
    console.log('useEffect');
    subscribe(() => {
      console.log('subscribe');
      setFilterStateToProps(() => (mapStateToProps ? mapStateToProps(getState(), props) : {}));
    });
  }, []);
  return <WrappedComponent {...props} {...filterStateToProps} {...boundActionCreators} />;
};
