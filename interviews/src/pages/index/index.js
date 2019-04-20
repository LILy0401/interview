import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map,Image } from '@tarojs/components'
import './index.css'
import location from '../../images/location.png';
import my from '../../images/my.png';

export default class Index extends Component {
 
  config = {
    navigationBarTitleText: '一面而就'
  }
  
  render () {
    return (
      <View className='index'>
        <Map className='map'></Map>
        <Image src={location} className='locations'></Image>
        <Image src={my} className='my'></Image>
        <Text className='text' onClick={this.addinterview.bind(this)}>添加面试</Text>
      </View>
    )
  }
  addinterview(){
    
    Taro.navigateTo({
      url: '/pages/add/index'
    })
  }
}
