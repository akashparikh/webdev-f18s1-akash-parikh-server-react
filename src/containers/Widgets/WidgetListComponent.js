import React from 'react'
import {WidgetType1} from "./WidgetType1";
import {WidgetType2} from "./WidgetType2";
import {WidgetType3} from "./WidgetType3";
import {HeadingWidget} from "./HeadingWidget";
import {ListWidget} from "./ListWidget";
import {ParagraphWidget} from "./ParagraphWidget";
import {LinkWidget} from "./LinkWidget";
import {ImageWidget} from "./ImageWidget";

export const WidgetListComponent = ({widgets,deleteWidget,createWidget,updateWidget,moveUp,moveDown}) =>
{
    let widgetTitle;
    let widgetType;
    let position;
    let preview=false;
    return (
        <div>
        <h3>Widget List</h3>
        <ul className="list-group">
            <li className="list-group-item">
                <button className="btn btn-success">Save</button>
                <button onClick={()=>preview=!preview}
                    className="btn btn-warning float-right">
                    Preview
                </button>
            </li>
            <li className="list-group-item">
                <input ref={node => widgetTitle = node} className="form-control"/><br/>
                <select ref={node =>widgetType=node}
                    className="form-control col-4">
                    <option value="HEADING">Heading Widget</option>
                    <option value="LIST">List Widget</option>
                    <option value="LINK">Link Widget</option>
                    <option value="PARAGRAPH">Paragraph Widget</option>
                    <option value="IMAGE">Image Widget</option>
                </select><br/>
                <button onClick={
                    ()=>{
                        console.log(widgets.length)
                        let widget ={
                            title:widgetTitle.value,
                            id:(new Date()).getTime(),
                            widgetType:widgetType.value

                    };
                    widgetTitle.value='';
                    widget.position=widgets.length;
                    widget.preview=preview;

                    createWidget(widget)
                    }
                }
                        className="btn btn-success">
                    <i className='fa fa-plus-circle'/>
                </button>
            </li>

            {!!widgets && widgets.length!=0 &&
                widgets.map((widget, index) =>
                <li className="list-group-item" key={index}>
                    {/*{widget.title} ({widget.id})-{widget.widgetType}*/}
                    <button onClick={
                        () =>
                            deleteWidget(widget.id)}
                            className="float-right btn-danger">
                        <i className='fa fa-times'/>
                    </button>

                    <button className='btn btn-warning float-right ml-1'
                            hidden={widget.position === 0}
                            onClick={() => moveUp(widget)}>
                        <i className='fa fa-arrow-up'/>
                    </button>
                    <button className='btn btn-warning float-right'
                            onClick={() => moveDown(widget)}>
                        <i className='fa fa-arrow-down'/>
                    </button>
                    <div>
                        {widget.widgetType === 'HEADING'
                        && <HeadingWidget preview={preview}
                            widget={widget} updateWidget={updateWidget}/>}
                        {widget.widgetType === 'LIST'
                        && <ListWidget preview={preview}
                            widget={widget} updateWidget={updateWidget}/>}
                        {widget.widgetType === 'PARAGRAPH'
                        && <ParagraphWidget preview={preview}
                            widget={widget} updateWidget={updateWidget}/>}
                        {widget.widgetType === 'LINK'
                        && <LinkWidget preview={preview}
                            widget={widget} updateWidget={updateWidget}/>}
                        {widget.widgetType === 'IMAGE'
                        && <ImageWidget preview={preview}
                            widget={widget} updateWidget={updateWidget}/>}
                    </div>
                </li>
            )}
        </ul>
    </div>)
}

export default WidgetListComponent