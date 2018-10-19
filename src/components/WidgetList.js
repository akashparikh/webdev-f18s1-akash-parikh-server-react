import React from 'react'
import {HeadingWidget} from "../containers/Widgets/HeadingWidget";
import {ListWidget} from "../containers/Widgets/ListWidget";
import {ParagraphWidget} from "../containers/Widgets/ParagraphWidget";
import {LinkWidget} from "../containers/Widgets/LinkWidget";
import {ImageWidget} from "../containers/Widgets/ImageWidget";

import './style.css';

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit, props.topic)
        let count=0;
    }

    componentDidUpdate() {
        this.props.init(this.props.widgetsInit, this.props.topic)
    }
    render() {
        return(
            <div>
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
            </ul>
            <ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index}
                            className="list-group-item">

                            <button className='btn btn-warning float-right ml-1'
                                    id='moveUp'
                                    hidden={widget.position === 0}
                                    onClick={() => this.props.moveUp(widget)}>
                                <i className='fa fa-arrow-up'/>
                            </button>
                            <button className='btn btn-warning float-right'
                                    id='moveDown'
                                    onClick={() => this.props.moveDown(widget)}>
                                <i className='fa fa-arrow-down'/>
                            </button>
                            <button
                                onClick={() => this.props.deleteWidget(widget)}
                                className="btn btn-danger">
                                <i className='fa fa-times'/>
                            </button>

                            {widget.type === "HEADING" && <HeadingWidget updateWidget={this.props.updateWidget}
                                                                         widget={widget}/>}
                            {widget.type === "LIST" && <ListWidget updateWidget={this.props.updateWidget}
                                                                   widget={widget}/>}
                            {widget.type === 'PARAGRAPH'
                            && <ParagraphWidget
                                widget={widget} updateWidget={this.props.updateWidget}/>}
                            {widget.type === 'LINK'
                            && <LinkWidget
                                widget={widget} updateWidget={this.props.updateWidget}/>}
                            {widget.type === 'IMAGE'
                            && <ImageWidget
                                widget={widget} updateWidget={this.props.updateWidget}/>}
                        </li>

                    )
                }

            </ul>
             <ul className="list-group">
               <li className="list-group-item">
                <button onClick={()=>{this.props.createWidget(this.props.topic)}}
                        className="btn btn-danger float-right">
                    <i className='fa fa-plus-circle'/>
                </button>
               </li>
              </ul>
            </div>
        )
    }
}
export default WidgetList