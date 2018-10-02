import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

var divStyle = {border:'1px solid black',width:'100px',height:'500px',color:'white'};
var divStyle2 = {float:'left',margin:'1%'};
var style2={pullRight:'true',borderRadius:'5px',float:'right'};

class CourseHead extends React.Component // Component 1
{
    constructor(props) {
        super(props);
        const dateTime = new Date().getTime();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        this.props.onClickRemove(index);
    }

    render()
    {
        return (
            <div className="card" style={divStyle2}>
            <div className="card-body">
                <h5 className="card-title">Course Name {this.props.title}</h5>
                <p className="card-text">Course Number {this.props.indexNumber+1}</p>
                <p className="card-text">Author : By me</p>
                <p className="card-text">Created on : 10/01/2018</p>
                <p className="card-text">Last Edit: 4 Hour Ago</p>
                <p className="card-text">
                    <button className="btn-primary">Edit</button>
                    <button onClick={()=>this.handleClick(this.props.indexNumber)} className="btn-danger"><i className="fa fa-trash"></i></button>
                </p>
            </div>
            </div>
        )
    }
}
export default CourseHead;
