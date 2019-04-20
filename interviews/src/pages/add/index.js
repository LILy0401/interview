import Taro, { Component } from '@tarojs/taro'
import { View  ,Text,Input,Textarea } from '@tarojs/components';
import './add.css';

export default class Index extends Component {
    config = {
        navigationBarTitleText: '添加面试'
    }
    render(){
        return(
            <View className='index'>
               <View className='menage'>面试信息</View>
               <View className='box'>
                   <View>
                       <Text>公司名称:</Text>
                       <Input type='text' placeholder='请输入公司名称'></Input>
                   </View>
                   <View>
                       <Text>公司电话:</Text>
                       <Input type='text' placeholder='请输入面试联系人电话'></Input>
                   </View>
                   <View>
                       <Text>面试时间:</Text>
                       <Text className='text'>2019-04-19 16:00</Text>
                   </View>
                   <View>
                       <Text>面试地址:</Text>
                       <Text className='text'>请选择面试地址</Text>
                   </View>
               </View>
               <View className='menage'>备注信息</View>
               <View className='textbox'>
                <Textarea className='textarea' placeholder='备注信息(可选，100字以内)'></Textarea>
               </View>
               
               <View className='btn'>确认</View>
            </View>
        )
    }
}
