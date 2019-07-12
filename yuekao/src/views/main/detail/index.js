import React, { Component } from 'react';
import {connect} from 'react-redux';

class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            flag:false
        }
    }
    //  这是详情页
    render() {
        let detailData=this.props.location.state;
        return (
            <div>
                <h1 style={{height:"100px",lineHeight:"100px"}}>{detailData.tit}</h1>
                <p style={{height:"50px",lineHeight:"50px"}}>{detailData.text}</p>
                <button onClick={()=>{
                    this.setState({
                        flag:true
                    })
                }}>收藏</button>
                {
                    this.state.flag?<div className="shoucang">
                    {
                        this.props.list.map((item,index)=>{
                            return <p key={index}><input type="checkbox" onClick={()=>{
                                this.props.save([detailData.tit,index])
                                alert('收藏成功咯')
                            }}/>{item.name}</p>
                        })
                    }
                </div>:""
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
        save(arr){
            dispatch({type:"SAVE",arr})
        }
    }
}
export default connect(mapState,mapDispatch)(Detail);
