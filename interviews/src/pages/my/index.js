import Taro, { Component } from '@tarojs/taro'
import { View ,Image,Text} from '@tarojs/components'
import './my.css'
import my from '../../images/my.png'
import right from '../../images/arrow.svg'

export default class Index extends Component {
 
  config = {
    navigationBarTitleText: '个人中心'
  }
  render () {
    return (
      <View className='index'>
        <View className='index-t'>
            <Image src={my}></Image>
        </View>
        <View className='index-con'>
          <Text></Text>
          <Text>我的面试</Text>
          <Image src={right}></Image>
        </View>
        <View className='index-con'>
          <Text></Text>
          <Text>客服中心</Text>
          <Image src={right}></Image>
        </View>
      </View>
    )
  }
 
}
