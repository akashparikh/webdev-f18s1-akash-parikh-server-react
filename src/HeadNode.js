import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EditCourse from "./EditCourse";

var divStyle = {border:'1px solid black',width:'100px',height:'500px',color:'white'};
var style2={pullRight:'true',borderRadius:'5px',float:'right'};



class HeadNode extends React.Component // Component 1
{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        this.props.onClickRemove(index);
    }

    render()
    {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">{this.props.indexNumber+1}</th>
                    <Router>
                        <td>
                            <Link to="/EditCourse">{this.props.title} </Link>
                            <Route path="/EditCourse"
                                   render={() =>
                                       <EditCourse/>}/>
                        </td>
                    </Router>
                    <td>By me</td>
                    <td>10/01/2018</td>
                    <td>6:10</td>
                    <td>
                        <button onClick={()=>this.handleClick(this.props.indexNumber)} className="btn-danger" style={style2}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default HeadNode;
