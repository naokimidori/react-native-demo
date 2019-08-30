/**
 * ScreenHome/index.js
 */

// 引入依赖略
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default self => (
  <View>
    <Text style={{fontSize: 36}}>122</Text>
    <Button
      title="haha"
      // 路由跳转
      onPress={() => alert('12')}
    />
  </View>
);
