import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// 数据
let reducer1 = (state = [], action) => {
        switch (action.type) {
            case "GETALL":
                state = action.data;
                return state;
            default:
                return state;
        }
    }
    // 收藏列表
let reducer2 = (state = [
    { sc: [], name: "收藏1" },
    { sc: [], name: "收藏2" },
    { sc: [], name: "收藏3" },
    { sc: [], name: "收藏4" }
], action) => {
    switch (action.type) {
        case "SAVE":
            state[action.arr[1]].sc.push(action.arr[0]);
            return state;
        case "QUXIAO":
            console.log(action.arr)
            state[action.arr[0]].sc.splice(action.arr[0] - 1, 1);
            return state;
        default:
            return state;
    }
}
let reducers = combineReducers({ reducer1, reducer2 });
export default createStore(reducers, applyMiddleware(thunk));