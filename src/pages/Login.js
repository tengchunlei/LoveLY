import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';
import {useStores} from '../stores';
import { useHistory } from 'react-router-dom';



const Wrapper=styled.div`
max-width:600px;
margin:100px  auto;
box-shadow:2px 2px 4px 4px rgba(0,0,0,0.2);
border-radius:5px;
padding:18px;
`

const Title=styled.h1`
margin-bottom:30px;
text-align:center;
`


const layout={
labelCol:{
    span:6,
},
wrapperCol:{
    span:18
},
};

const tailLayout={
    wrapperCol:{
        offset:6,
        span:18
    }
};

const Component = () => {
  const {AuthStore} =useStores() ;
  const history=useHistory ();
  const onFinish = (values) => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    console.log('Success:', values);
    AuthStore.login().then(()=>{
      console.log('登录成功，即将跳转到首页')
      history.push('/')
  }).catch(()=>{
    console.log('登录失败，请重新检查用户名与密码')
  });





  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validateUsername=(rule,value)=>{
      if(/\W/.test(value)) return Promise.reject('只能是字母数字下划线哦');
      if(value.length<4  || value.length>10) return Promise.reject('输入长度为4-10个字符哦');
       return Promise.resolve ();
  }



  return (
    <Wrapper> 
    <Title>登录</Title>
    <Form
    {...layout}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名哦',
          },
         
          {
            validator:validateUsername
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码哦',
          },
          {
            min:4,
             message:'最少要输入4个字符哦'
             },
 
           {
           max:10,
            message:'最多只能输入10个字符哦'
            }
        ]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
    </Wrapper>
  );
  
};

export default Component;