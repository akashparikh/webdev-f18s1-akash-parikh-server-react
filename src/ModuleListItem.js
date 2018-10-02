import React from 'react';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        this.props.onClickRemove(index);
    }

    render() {
        return (
            <div className="row col-lg-3">
                <div className="col-lg-9">
                    <li className="group-list-item"> {this.props.title}</li>
                </div>
                <div className="col-lg-3">
                    <btn onClick={()=>this.handleClick(this.props.indexNumber)} class="btn-primary">X</btn>
                </div>
            </div>
    );}}
