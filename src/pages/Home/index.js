/**
 * ScreenHome/index.js
 */
import React, {Component} from 'react';
import {Image} from 'react-native';
import view from './view';

export default class Home extends Component {
  // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
  static navigationOptions = {
    // 设置 title
    // title: '首页',
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => {
      // 根据是否选中，显示不同图片
      const icon = focused
        ? require('../../assets/home1.png')
        : require('../../assets/home.png');
      return <Image source={icon} style={{height: 22, width: 22}} />;
    },
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}
