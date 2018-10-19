import React from 'react'

export const LinkWidget=({widget,updateWidget})=> {
    let text;
    let url;
    let size;
    let widgetType;
    let widgetName;

    return(
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
                <option value='LINK'>Link Widget</option>
                <option value='HEADING'>Heading Widget</option>
                <option value='LIST'>List Widget</option>
                <option value='PARAGRAPH'>Paragraph Widget</option>
                <option value='IMAGE'>Image Widget</option>
            </select><br/>
            <label htmlFor='linkText'>Link Text</label><br/>
            <input
                id='LinkText'
                ref={node=>text=node}
                onChange={()=>{
                    widget.text=text.value;
                    updateWidget(widget);
                }}
            /><br/>
            <label htmlFor='LinkText'>URL</label>
            <input id='LinkText'
                      ref={node =>url=node}
                      onChange={()=>{
                          widget.href=url.value;
                          updateWidget(widget);
                      }}
                      className="form-control"
                      />
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
            <a href={widget.href}>{widget.text}</a>
        </div>
    );
}