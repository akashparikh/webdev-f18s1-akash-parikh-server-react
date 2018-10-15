import React from 'react'

export const ParagraphWidget=({widget,updateWidget})=> {
    let text;
    let size;
    let widgetType;
    let widgetName;

    return(
        <div>
            <h1>{widget.name}-Widget</h1>
            <select onChange={()=>{
                let w={
                    id:widget.id,
                    widgetType:widgetType.value
                };
                updateWidget(w)
            }}
                    ref={node =>widgetType=node}
                    className="form-control col-3 float-right">
                <option value='PARAGRAPH'>Paragraph Widget</option>
                <option value='HEADING'>Heading Widget</option>
                <option value='LIST'>List Widget</option>
                <option value='IMAGE'>Image Widget</option>
                <option value='LINK'>Link Widget</option>
            </select><br/>
            <label htmlFor='PragraphText'>Paragraph Text</label>
            <textarea id='PragraphText'
                      ref={node =>text=node}
                      onChange={()=>{
                          widget.text=text.value;
                          updateWidget(widget)
                      }}
                      className="form-control"
                      value={widget.text}>Comments</textarea>
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
            <h4>Preview</h4>
            <p>{widget.text}</p>
        </div>
    );
}