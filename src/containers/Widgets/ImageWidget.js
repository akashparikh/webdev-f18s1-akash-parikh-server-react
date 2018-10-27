import React from 'react'
import img_file from './abc.jpg'

export const ImageWidget=({widget,updateWidget,checked})=>{
    let text;
    let widgetType;
    let search;
    let widgetName;
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
                <option value='IMAGE'>Image Widget</option>
                <option value='LINK'>Link Widget</option>
                <option value='HEADING'>Heading Widget</option>
                <option value='LIST'>List Widget</option>
                <option value='PARAGRAPH'>Paragraph Widget</option>
            </select><br/>
            <label htmlFor='URLText'>Image URL</label>
            <input id='URLText'
                   ref={node=>text=node}
                   onChange={()=>{
                       widget.src=text.value;
                       updateWidget(widget);
                   }}
                   value={widget.src}
                   className='form-control'
                   placeholder='Image URL'
            />
            <br/>
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
            </div>}
            <img width='200px'
                 height='200px'
                 src={img_file}/>
        </div>
    )

}