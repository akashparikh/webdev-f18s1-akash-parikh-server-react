import widgets from "./widgets";

import CourseServiceSingleton from '../services/CourseServiceSingleton'

let initialState = {
    widgets:[],
    preview: false,
};

export const widgetReducer = (state=initialState,action) =>{
    let newState

    console.log(action)

    let position;

    switch (action.type) {

        case "INIT":
            return {
                widgets: CourseServiceSingleton.findWidgetsForTopic(action.topic),
                selectedTopic: action.topic
            }

        case 'DELETE_WIDGET':
            return{
                widgets:state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
        {

            return{
                widgets:[
                    ...state.widgets,
                    action.widget

                ]
            }
        }

        case 'UPDATE_WIDGET':
            return{
                widgets:state.widgets.map(widget=>{
                    if(widget.id===action.widget.id){
                        return action.widget
                    }else{
                        return widget
                    }
                })
            }
        case 'MOVE_UP':
            //console.log(action.widget)
            //console.log(state)
            let upstate={
                widgets:state.widgets.map(widget=>{
                    if(widget.position===(action.widget.position-1))
                        widget.position=widget.position+1
                    if(widget.id===action.widget.id)
                        widget.position=widget.position-1
                    return Object.assign({}, widgets)
                })
            }
            return Object.assign({}, state.widgets);

        case 'MOVE_DOWN':
            var nextPosition=action.widget.position+1;
            let downState={
                widget:state.widgets.map(widget=>{
                    if(widget.position==nextPosition)
                        widget.position=widget.position-1;
                    if (widget.id==action.widget.id)
                        widget.position=widget.position+1;
                    return Object.assign({}, widget)
                })
            }
            return Object.assign({}, downState);

        case 'PREVIEW':
            newState = Object.assign({},state)
            newState.preview!=newState.preview
            return newState


        default:
            return state
    }
}
