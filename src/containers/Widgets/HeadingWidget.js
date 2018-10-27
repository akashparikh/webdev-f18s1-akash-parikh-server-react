import React from 'react'

export const HeadingWidget = ({preview,widget,updateWidget,checked}) =>
{
    let text;
    let size;
    let widgetType;
    let widgetName;
    return(
        <div>
            {!checked &&
            <div>
            <div hidden={widget.preview}>
            <h1>{widget.preview}
                {widget.title}-Widget</h1>
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
                <option value='HEADING'>Heading Widget</option>
                <option value='LIST'>List Widget</option>
                <option value='PARAGRAPH'>Paragraph Widget</option>
                <option value='IMAGE'>Image Widget</option>
                <option value='LINK'>Link Widget</option>
            </select><br/>
            <label htmlFor="text">Heading Text</label>
            <input
                   onChange={()=>{
                       widget.text=text.value;
                       updateWidget(widget)
                   }}
                   ref={node => text = node}
                   className="form-control"
                   value={widget.text}
                   placeholder="Heading Text" id="text"/><br/>
            <label htmlFor="size">Heading Size</label>
            <select
                onChange={()=>{
                widget.size=size.value;
                updateWidget(widget)
                }}
                ref={node => size = node}
                className="form-control" id="size"
                value={widget.size}
            >
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
            </select><br/>
            <label htmlFor='widgetNameText'>Widget Name</label>
            <input id='widgetNameText'
                   className='form-control'
                   placeholder='Widget Name'
                   ref={(node)=>widgetName=node}
                   value={widget.name}
                   onChange={()=>{
                       widget.title=widgetName.value
                       updateWidget(widget);
                   }}

            />
               </div>
            <h4>Preview</h4>
            </div>}
            {widget.size === '1' && <h1>{widget.text}</h1>}
            {widget.size === '2' && <h2>{widget.text}</h2>}
            {widget.size === '3' && <h3>{widget.text}</h3>}
            {widget.size === '4' && <h4>{widget.text}</h4>}
        </div>
    )
}
