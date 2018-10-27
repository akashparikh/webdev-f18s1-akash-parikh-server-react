import React from 'react'

export const ListWidget=({widget,updateWidget,checked})=> {
    let text;
    let size;
    let widgetType;
    let widgetName;
    let ordered;

    return(
        <div>
            {!checked &&
                <div>
            <h1>{widget.name}-Widget</h1>
            <select onChange={()=>{
                let w={
                    id: widget.id,
                    title: 'widget 1',
                    type: widgetType.value,
                    size: 1,
                    text: 'Heading 1'
                };
                updateWidget(w)
            }}
                    ref={node =>widgetType=node}
                    className="form-control col-3 float-right">
                <option value='LIST'>List Widget</option>
                <option value='HEADING'>Heading Widget</option>
                <option value='PARAGRAPH'>Paragraph Widget</option>
                <option value='IMAGE'>Image Widget</option>
                <option value='LINK'>Link Widget</option>
            </select><br/>
            <label>List Text</label>
            <textarea ref={node =>text=node}
                      onChange={()=>{
                          widget.text='';
                          widget.listIems=text.value;
                          updateWidget(widget);
                      }}
                      className="form-control"
                      value={widget.listIems}>

            </textarea>
            <label htmlFor='widgetNameText'>Widget Name</label>
            <input id='widgetNameText'
                   className='form-control'
                   placeholder='Widget Name'
                   ref={(node)=>widgetName=node}
                   value={widget.name}
                   onChange={()=>{
                       widget.name=widgetName.value
                       updateWidget(widget);
                   }}

            />
            <label>
                <input ref={node=>ordered=node}
                       onClick={()=>{
                           widget.ordered=ordered.checked;
                           updateWidget(widget);
                       }
                       }
                       checked={widget.ordered} type="checkbox"/>Ordered
            </label>
            <h4>Preview</h4>
             </div>}
            {!widget.ordered &&
            <ul>
                {widget.listIems!==undefined && widget.listIems.split('\n').map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            }
            {widget.ordered &&
            <ol>
                {widget.listIems!==undefined && widget.listIems.split('\n').map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ol>
            }
        </div>
    );
}