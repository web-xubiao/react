import React, { Component } from 'react';

class TM_FILENAME_BASE extends Component {
    constructor(props){
        super(props)
        this.state={
            value:""
        }
    }
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <div>
                    <p>姓名:<input value={this.state.value} onChange={(e)=>{
                        this.setState({
                            value:e.target.value
                        })
                    }} type="text"/></p>
                    <p><button onClick={()=>{
                        if(this.state.value===""){
                            alert("不能输入空名字")
                        }else{
                            //本地存储
                            localStorage.setItem("name",this.state.value);
                            this.props.history.go(-1);
                        }
                    }}>登录</button></p>
                </div>
            </div>
        );
    }
}

export default TM_FILENAME_BASE;
