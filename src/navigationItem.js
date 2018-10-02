import React from 'react';

export default class NavigationListItem
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
            <div className="row">
                <button className="btn btn-secondary" type="button">{this.props.title}</button>
                <button onClick={()=>this.handleClick(this.props.indexNumber)} className="btn-primary">
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        );}}
