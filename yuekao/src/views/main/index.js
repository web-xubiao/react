import React, { Component } from 'react';
import {Route,Switch,Redirect,NavLink} from 'react-router-dom';
import Home from './home/index';
import Xiangmu from './xiangmu/index';
import Jigou from './jigou/index';
import Detail from './detail/index';
import Shoucang from './shoucang/index';
import Shoucangdetail from './shoucangdetail/index';
import './index.css';
import axios from 'axios';
import {connect} from 'react-redux';
class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="top">
                    <button onClick={()=>{
                        //  抽屉样式   
                        document.querySelector('.chouti').style.right='0';
                    }}>我的</button>
                    <div className="chouti">
                        <p onClick={()=>{
                            //  点击进入收藏页面
                            this.props.history.push('/main/shoucang');
                        }}>我的收藏</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <p><NavLink to="/main/home">首页</NavLink></p>
                        <p><NavLink to="/main/xiangmu">创业项目</NavLink></p>
                        <p><NavLink to="/main/jigou">投资机构</NavLink></p>
                    </div>
                    <div className="right">
                        <Switch>
                            <Route path="/main/home" component={Home} />
                            <Route path="/main/xiangmu" component={Xiangmu} />
                            <Route path="/main/jigou" component={Jigou} />
                            <Route path="/main/detail" component={Detail} />
                            <Route path="/main/shoucang" component={Shoucang} />
                            <Route path="/main/shoucangdetail" component={Shoucangdetail} />
                            <Redirect from="/main" to="/main/home"/>
                        </Switch>
                    </div>
                </div>
                
            </div>
        );
    }
    componentDidMount(){
        this.props.getAllData(this.request);
    }
    //异步请求数据
    request(next){
        axios.get("/api/getData").then(res=>{
            next({type:"GETALL",data:res.data})
        })
    }
}
let mapState=(state)=>{
    return {
        list:state.reducer1 //数据
    }
}
let mapDispatch=(dispatch)=>{
    return {
        //dispatch一个函数
        getAllData(fn){
            dispatch(fn)
        }
    }
}
export default connect(mapState,mapDispatch)(Main);
