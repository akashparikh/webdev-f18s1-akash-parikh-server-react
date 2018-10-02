import React from 'react';

var style2={pullRight:'true',borderRadius:'5px',float:'right'};
var divStyle = {border:'1px solid black',float:'left',width:'100%'};

export default class Lesson
    extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state={
        value:this.props.title,
        isInEditMode:false
    }

    changeEditMode = ()=>{
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
        console.log("Should go to edit mode");
    }

    updateComponentValue = () =>
    {
        this.setState({
            isInEditMode:false,
            value:this.refs.theTextInput.value
        })
    }

    renderEditView = () => {
        return(
            <div>
                <input type="text" defaultValue={this.state.value} ref="theTextInput">

                </input>
                <button onClick={this.changeEditMode}>X</button>
                <button onClick={this.updateComponentValue}>OK</button>
            </div>
        )
    }

    renderDefaultView = () => {
        return(
            <li className="nav-item">
                <a className="nav-link">{this.props.title}</a>
                <button onClick={()=>this.handleClick(this.props.indexNumber)} className="btn-danger"
                        style={style2}>
                    <i className="fa fa-trash"></i>
                </button>
            </li>)
    }

    handleClick(index) {
        this.props.onClickRemove(index);
    }

    render() {
        return (this.state.isInEditMode ?
                this.renderEditView():this.renderDefaultView()
        );}}

