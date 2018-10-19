import React from 'react'
import {connect} from 'react-redux'
import WidgetList from "../components/WidgetList"

const stateToPropertyMapper = state => ({
    widgets:state.widgets,
    preview: state.preview,
    images:state.images
})


const dispatcherToPropertyMapper = dispatch => ({

    init: (widgets, topic) => dispatch({
        type: 'INIT',
        widgets: widgets,
        topic: topic
    }),


    deleteWidget: (widget) => dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
    }),

    createWidget:(topic)=>dispatch({
        type:'CREATE_WIDGET',
        topic: topic
    })

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
(WidgetList)

export default WidgetListContainer