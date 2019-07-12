import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        let {list} = this.props;
        return (
            <div>
                <div className="title">
                    欢迎进入  智能世界
                </div>
                <div className="findNew">
                    {
                        list[0]&&list[0].children.map((item,index)=>{
                            return <div  key={index} className="item">
                                    <h4>{item.tit}</h4>
                                    <p>{item.text}</p>
                                </div>
                        })
                    }
                </div>
            </div>
        );
    }
    componentWillMount() {
        //判断是否登陆
        if(this.props.location.pathname==="/main/home"){
            if(!localStorage.getItem('name')){
                alert("要先登录才能看哦")
                this.props.history.push('/login');
            }
        }
    }
}
let mapState=(state)=>{
    return {
        list:state.reducer1
    }
}
let mapDispatch=(dispatch)=>{
    return {
        
    }
}
export default connect(mapState,mapDispatch)(Home);
