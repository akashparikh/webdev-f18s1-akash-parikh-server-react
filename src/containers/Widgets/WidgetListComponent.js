import React from 'react'
import {WidgetType1} from "./WidgetType1";
import {WidgetType2} from "./WidgetType2";
import {WidgetType3} from "./WidgetType3";
import {HeadingWidget} from "./HeadingWidget";
import {ListWidget} from "./ListWidget";
import {ParagraphWidget} from "./ParagraphWidget";
import {LinkWidget} from "./LinkWidget";
import {ImageWidget} from "./ImageWidget";

class WidgetListComponent extends React.Component {

    constructor(props)
    {
        super(props);
        this.widgetTitle;
        this.widgetType;
        props.init(props.widgetsInit, props.topic)
    }

    componentDidUpdate() {
        this.props.init(this.props.widgetsInit,this.props.topic)
    }

    // componentWillReceiveProps(newProps)
    // {
    //     if (newProps.topicId !== this.props.topicId)
    //     {
    //         this.props.findAllWidgets(newProps.topicId);
    //     }
    // }

    render() {
        return(
        <div>
        <h3>Widget List</h3>
        <ul className="list-group">
            <li className="list-group-item">
                <button className="btn btn-success">Save</button>
                <button value={this.preview}
                    onClick={()=>this.preview=!this.preview
                    }
                    className="btn btn-warning float-right">
                    Preview
                </button>
            </li>
            <li className="list-group-item">
                <input ref={node => this.widgetTitle = node} className="form-control"/><br/>
                <select ref={node =>this.widgetType=node}
                    className="form-control col-4">
                    <option value="HEADING">Heading Widget</option>
                    <option value="LIST">List Widget</option>
                    <option value="LINK">Link Widget</option>
                    <option value="PARAGRAPH">Paragraph Widget</option>
                    <option value="IMAGE">Image Widget</option>
                </select><br/>

                    <button onClick={()=>{this.props.createWidget(this.props.topic)}}
                        className="btn btn-danger">
                    <i className='fa fa-plus-circle'/>
                </button>

            </li>

            {this.props.widgets.map((widget,index) =>
                <li className="list-group-item" key={index}>
                    {/*{widget.title} ({widget.id})-{widget.widgetType}*/}
                    <button onClick={
                        () =>
                            this.props.deleteWidget(widget.id)}
                            className="float-right btn-danger">
                        <i className='fa fa-times'/>
                    </button>

                    <button className='btn btn-warning float-right ml-1'
                            hidden={widget.position === 0}
                            onClick={() => this.props.moveUp(widget)}>
                        <i className='fa fa-arrow-up'/>
                    </button>
                    <button className='btn btn-warning float-right'
                            onClick={() => this.props.moveDown(widget)}>
                        <i className='fa fa-arrow-down'/>
                    </button>
                    <div>
                        {widget.type === 'HEADING'
                        && <HeadingWidget
                            widget={widget} updateWidget={this.props.updateWidget}/>}
                        {widget.type === 'LIST'
                        && <ListWidget
                            widget={widget} updateWidget={this.props.updateWidget}/>}
                        {widget.type === 'PARAGRAPH'
                        && <ParagraphWidget
                            widget={widget} updateWidget={this.props.updateWidget}/>}
                        {widget.type === 'LINK'
                        && <LinkWidget
                            widget={widget} updateWidget={this.props.updateWidget}/>}
                        {widget.type === 'IMAGE'
                        && <ImageWidget
                            widget={widget} updateWidget={this.props.updateWidget}/>}
                    </div>
                </li>
            )}
        </ul>
    </div>)
    }
}

export default WidgetListComponent