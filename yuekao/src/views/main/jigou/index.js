import React, { Component } from 'react';
import {connect} from 'react-redux';
class Jigou extends Component {
    render() {
        let {list} = this.props;
        //  投资机构页
        return (
            <div className="w100p">
                <div className="nav">
                    <div><span>行业</span><span style={{color:"#55f"}}>不限</span><span>社交</span><span>行业</span><span>电商</span><span>行业</span></div>
                    <div><span>行业</span><span style={{color:"#55f"}}>不限</span><span>未知</span><span>行业</span><span>种子轮</span><span>天使轮</span></div>
                </div>
                <div>
                    {
                        list[1]&&list[1].children.map((item,index)=>{
                            return <div  key={index} className="item" >
                                    <h4>{item.tit}</h4>
                                    <p>{item.text}</p>
                                </div>
                        })
                    }
                </div>
            </div>
        );
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
export default connect(mapState,mapDispatch)(Jigou);
