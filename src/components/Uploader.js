import { bind } from 'file-loader';
import React ,{useRef}from 'react';
import {useStores} from '../stores';
import {observer,useLocalStore} from 'mobx-react';
import  {message, Upload,Spin}  from   'antd';
import  {InboxOutlined} from '@ant-design/icons';
import { useSyncExternalStore } from 'react';
import styled from 'styled-components';
const {Dragger} =Upload;
const Result=styled.div`
margin-top:10px;
border:1px dashed #ccc;
padding:20px;
`
const H1=styled.h1`
margin:20px;
text-align:center;
`
const Image =styled.img`
max-width:300px;

`
const Component=observer(()=>{
const {ImageStore,UserStore} =useStores();
const ref1=useRef();
const ref2=useRef();


const store = useLocalStore(()=>({
     width:null,
     setWidth(width){
         store.width=width;
     },

     get widthStr(){
      return store.width?`/w/${store.width}`:'';
     },

     height:null,
     setHeight(height){
      store.height=height;
  },
     get heightStr(){

      return  store.height?`/h/${store.height}`:'';
     },

     get fullStr(){
      return ImageStore.serverFile.attributes.url.attributes.url +'?imageView2/0'+store.widthStr+store.heightStr
     }



}));

const bindWidthChange=()=>{
   store.setWidth(ref1.current.value);
};

const bindHeightChange=()=>{
  store.setHeight(ref2.current.value);
};

const  props={
  showUploadList:false,
  beforeUpload:file=>{
    ImageStore.setFile(file);
    ImageStore.setFilename(file.name);
    if(UserStore.currentUser===null ){
      message.warning('请先登录再上传');
       return false;
    }   
    
window.file=file;
    if(!/(svg)$|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)){
      message.error('仅限上传svg/png/jpg/jpeg/gif类型的文件')
      return false;
    }

    if(file.size>1024*1024){
      message.error('仅限上传1M以内大小的图片');
      return false;
    }


    ImageStore.upload()
    .then((serverFile)=>{
      console.log('上传成功')
      console.log(serverFile);
    }).catch(()=>{
      console.log('上传失败')
    });
    return false; 
  }
}; 

return (
<div>
  <Spin tip="上传中" spinning={ImageStore.isUpoading}>
<Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或者拖拽文件进行上传</p>
    <p className="ant-upload-hint">
      仅限上传.svg/.png/.jpg/.gif类型的图片且最大不超过1M
    </p>
  </Dragger>
</Spin>

{ 
 ImageStore.serverFile?
 <Result>
<H1>上传结果</H1>
<dl>
  <dt>在线地址</dt>
  <dd>
    <a target="_blank" href={ImageStore.serverFile.attributes.url.attributes.url}>{ImageStore.serverFile.attributes.url.attributes.url}</a>
  </dd>

  <dt>文件名</dt>
  <dd>
  {ImageStore.filename}
  </dd>

  <dt>图片预览</dt>
  <dd>
<Image src={ImageStore.serverFile.attributes.url.attributes.url}/>
  </dd>

<dt>更多尺寸</dt>
<dd>
<input ref={ref1} onChange={bindWidthChange} placeholder="最大宽度可选"/>
<input ref={ref2} onChange={bindHeightChange} placeholder="最大高度可选"/>
</dd>

<dd>
  <a target="_blank" href={store.fullStr}>{store.fullStr}</a>
</dd>
</dl>

 </Result>:null
}

</div>
);
});



export default  Component;