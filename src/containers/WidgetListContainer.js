import React from 'react'
import {connect} from 'react-redux'
import WidgetListComponent from "./Widgets/WidgetListComponent"

const stateToPropertyMapper = state => ({
    widgets:state.widgets,
    preview: state.preview,
    images:state.images
})


const dispatcherToPropertyMapper = dispatch => ({
    deleteWidget:(wid)=>dispatch({
        type:'DELETE_WIDGET',
        widgetId:wid
    }),
    createWidget:(widget)=>
    {
        console.log(widget)
        return dispatch({
            type:'CREATE_WIDGET',
            widget:widget,
        })
    }

    ,
    updateWidget:widget=>dispatch({
        type:'UPDATE_WIDGET',
        widget:widget
    }),
    saveWidgets:()=>dispatch({
        type:'SAVE_WIDGETS'
    }),
    findAllWidgets:(topicID)=>{

    },
    togglePreview:()=>dispatch({
       type:'PREVIEW'
    }),
    moveUp:widget=>dispatch({
        type:'MOVE_UP',
        widget:widget
    }),
    moveDown:widget=>dispatch({
        type:'MOVE_DOWN',
        widget:widget
    }),
})

const WidgetListContainer=connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(WidgetListComponent)

export default WidgetListContainer