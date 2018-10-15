import {MESSAGE_1,MESSAGE_2} from "../actions/index";

let initialState={
    msg:'Good Bye World'
}

export const reducer = (state=initialState,action) => {
    switch (action.type) {
        case MESSAGE_1:
            return{
                msg:'this is message 1'
            }
        case MESSAGE_2:
            return{
                msg:'this is message 2'
            }
        default:
            return state
    }
}
