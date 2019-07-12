import React, { Component } from 'react';
import {connect} from 'react-redux';

class Shoucangdetail extends Component {
    constructor(props){
        super(props)
    }
    //   收藏夹详情   
    render() {
        let scindex=this.props.location.state;
        return (
            <div>
                {
                    this.props.list[scindex].sc.map((item,index)=>{
                        return <p key={index}>{item} <button onClick={()=>{
                            this.props.quxiao([scindex,index]);
                            this.setState({})
                        }}>取消收藏</button></p>
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
       quxiao(arr){
           dispatch({type:"QUXIAO",arr})
       }
    }
}
export default connect(mapState,mapDispatch)(Shoucangdetail);
