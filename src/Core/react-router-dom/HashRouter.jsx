import React from 'react';
import ReactRouterContext from './context';

export default class HashRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1),
      },
    };
  }

  componentDidMount() {
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
          // 就是个字符串
          window.location.hash = to;
        }
      },
      block(prompt) {
        history.prompt = prompt;
      },
      unblock() {
        history.prompt = null;
      },
    };
    const routerValue = {
      location: that.state.location,
      history,
    };
    return (
      <ReactRouterContext.Provider value={routerValue}>
        {that.props.children}
      </ReactRouterContext.Provider>
    );
  }
}
