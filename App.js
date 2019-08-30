import React, {Component} from 'react';
import Route from './src/config/route';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 渲染页面
    return <Route />;
  }
}
