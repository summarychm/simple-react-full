import React from 'react';
import ReactRouterContext from './context';

// 在使用hook时出现无法及时获取state的问题,所以先暂时使用类组件
export default class HashRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/',
      },
    };
  }

  componentDidMount() {
    // url变更后更新location信息,更新页面
    window.addEventListener('hashchange', (event) => {
      this.setState((prevState) => ({
        ...prevState,
        location: {
          ...prevState.location,
          pathname: window.location.hash.slice(1) || '/',
          state: this.locationState,
        },
      }));
    });
    window.location.hash = window.location.hash || '/';
  }

  render() {
    const that = this;
    const history = {
      location: this.state.location,
      push(to) {
        if (history.prompt) {
          const target = typeof to === 'string' ? { pathname: to } : to;
          const yes = window.confirm(history.prompt(target));
          if (!yes) return;
        }
        if (typeof to === 'object') {
          // 传的是一个对象 {pathname,state}
          const { pathname, state } = to;
          that.locationState = state;
          window.location.hash = pathname;
        } else {
          window.location.hash = to;
        }
      },
      block(prompt) {
        history.prompt = prompt;
      },
      unblock() {
        history.prompt = null;
      },
      createHref(to) {
        let href = '#';
        if (typeof to === 'object') href += to.pathname;
        else if (typeof to === 'string') href += to;
        else href += '/';
        return href;
      },
    };
    return (
      <ReactRouterContext.Provider
        value={{
          location: that.state.location,
          history,
        }}
      >
        {that.props.children}
      </ReactRouterContext.Provider>
    );
  }
}
