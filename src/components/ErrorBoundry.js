import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: true, info: info });
  }
  render() {
    if (this.state.hasError) {
      return <h1>opps there is a problem</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
