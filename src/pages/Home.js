import { observer } from 'mobx-react-lite';
import React from 'react'
import { useStores } from '../stores';
import Uploader from '../components/Uploader';
import Tips from '../components/Tips';
const  Home = observer(()=>{
    const {UserStore}=useStores();
    const User=()=><div>Hello{UserStore.currentUser.attributes.usernames}</div>
    
    return (
        <>
         <Tips>请您先登录然后再进行上传操作哦</Tips>
         <Uploader/>
  
        </>

    );
    
});

export default Home;