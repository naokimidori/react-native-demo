/**
 * route.js
 */

// 引入依赖
import React, {Component} from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

// 引入页面组件
import Home from '../pages/Home';
import About from '../pages/About';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';

// 配置路由;
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Home,
//   },
//   About: {
//     screen: About,
//   },
// });

// export default class Route extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const Tab = createAppContainer(AppNavigator);
//     return <Tab />;
//   }
// }

const ScreenTab = createBottomTabNavigator(
  // 配置 tab 路由
  {
    Home: {
      screen: Home,
    },
    Tab1: {
      screen: Tab1,
    },
    Tab2: {
      screen: Tab2,
    },
    Tab3: {
      screen: Tab3,
    },
  },
  // 其他配置选项
  {
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition: 'bottom',
  },
);
export default class Route extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Tab = createAppContainer(ScreenTab);
    return <Tab />;
  }
}
