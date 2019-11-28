import React from 'react';
import { ReactReduxContext } from './context';
export default class extends React.Component {
  constructor(props) {
    super(props);
    if (props.store == null) {
      throw new Error(`<Provider>组件内必须接收store属性!`);
    }
    const { getState, dispatch, subscribe } = props.store;
    this.state = {
      state: getState(),
      dispatch,
    };
    subscribe(() => this.setState({ state: getState() }));
  }

  render() {
    const { children } = this.props;
    return (
      <ReactReduxContext.Provider value={this.state}>
        {children && React.Children.only(children)}
      </ReactReduxContext.Provider>
    );
  }
}
