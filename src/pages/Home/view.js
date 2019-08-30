import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default self => (
  <View>
    <Text style={{fontSize: 36, marginBottom: 50}}>首页</Text>
    <Button
      title="跳转至tab3"
      // 路由跳转
      onPress={() => self.navigation.navigate('Tab3')}
    />
  </View>
);
