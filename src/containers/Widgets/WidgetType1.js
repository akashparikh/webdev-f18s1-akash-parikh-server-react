import React from 'react'

export const WidgetType1 = ({widget,updateWidget}) => {
    let widgetType;
    return(<div>
        <h1>Widget Type 1 {widget.title}</h1>
        <select onChange={()=>{
                let w={
                    id:widget.id,
                    widgetType:widgetType.value
                };
                updateWidget(w)
                }}
                ref={node =>widgetType=node}
                className="form-control col-4">
            <option value="WT1">Widget Type 1</option>
            <option value="WT2">Widget Type 2</option>
            <option value="WT3">Widget Type 3</option>
        </select>
    </div>)
}