import React, { Component } from 'react';
import {connect} from 'react-redux';

class Shoucang extends Component {
    render() {
        //   这是收藏页   收藏列表
        return (
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return <div key={index} style={{height:'60px'}} onClick={()=>{
                            this.props.history.push('/main/shoucangdetail',index)
                        }}>
                            <h4>{item.name}</h4>
                            <p>该收藏夹有{item.sc.length}个项目</p>
                        </div>
                    })
                }
            </div>
        );
    }
}
let mapState=(state)=>{
    return {
        list:state.reducer2
    }
}
let mapDispatch=(dispatch)=>{
    return {
       
    }
}
export default connect(mapState,mapDispatch)(Shoucang);
