import { message } from 'antd';
import { observable ,action} from 'mobx';
import { Uploader} from '../models';

class HistoryStore {
   
    @observable list=[];
    @observable isLoading=false;
    @observable hasMore=true;
    @observable  page=0;
    limit=10;
    @action append(newList){
        this.list=this.list.concat(newList);
    }

    @action find(){
        Uploader.find({page:this.page,limit:this.limit})
        .then(newList=>{
            this.append(newList);
            this.page++;
             if(newList.length<this.length)
             { this.hasMore=false;}

        }).catch(error=>{
            message.error('加载数据失败');
        }).finally( ()=>{
            this.Loading=false;
        });
        
    }
        @action reset(){
        this.list={};
        this.isLoading=false;
        this.hasMore=true;
        this.page=0;
    }
}


export default new HistoryStore();