import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import HeadNode from './HeadNode';
import CourseHead from "./CourseHead";

var divStyle = {border:'1px solid black',width:'100px',height:'500px'};
var divStyle2 = {color:'white'};

class HeaderSwitch extends React.Component // Component 1
{


    constructor(props){

        super(props)

        this.GRID_VIEW = "GRID"
        this.DEFAULT_VIEW_MODE="LIST"
        this.LIST_VIEW = "LIST"

        this.state={
            modules:[
                {
                    title:'CS 1234'
                },
                {
                    title:'CS 5600'
                }
            ],

            currentView:this.DEFAULT_VIEW_MODE
        }

    }

    formChanged = (event) => {
        console.log(event.target.value);
        this.setState({
            newModuleTitle:event.target.value
        })
    }

    addNewModule = () => {
        let modules = this.state.modules;
        modules.push({
            title:this.state.newModuleTitle
        })
        this.setState({
            modules: modules
        })
    }

    deleteModule= (index) =>{
        let modules = this.state.modules;
        modules.splice(index,1);
        //alert("Click Deleted key is"+index);
        this.setState({
            modules: modules
        })
    }

    changeViewList = (viewName) =>
    {
        this.setState({
            currentView:viewName
        });
    }

    render()
    {
        return (<div>
            { this.state.currentView === this.DEFAULT_VIEW_MODE?              <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-info">
                    <a className="collapse navbar-collapse navbar-brand col-lg-3" href="#">
                        White Board
                    </a>
                    <div className="row col-lg-8">
                        <div className="col-lg-6">
                            <form>
                                <input type="text" className="form-control"
                                       onChange={this.formChanged} id="module-name"
                                       placeholder="Add Course"></input>
                            </form>
                        </div>
                        <div className="col-lg-4" style={divStyle2}>
                            <button onClick={this.addNewModule} className="btn-primary">
                                <i className="fa fa-plus-circle"></i>
                            </button>
                            {this.state.newModuleTitle}
                            <button onClick={()=>{this.changeViewList(this.LIST_VIEW)}}
                                className="btn-primary">List</button>
                            <button onClick={()=>{this.changeViewList(this.GRID_VIEW)}}
                                className="btn-primary">Grid</button>
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarsExample04"
                            aria-controls="navbarsExample04" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="login/login.template.client.html"> Login</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="register/register.template.client.html">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="Table">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Created on</th>
                            <th scope="col">Last Modified</th>
                            <th scope="col">Remove</th>
                        </tr>
                        </thead>
                    </table>
                    <table className="table">
                        <tbody>
                        <tr>
                            {
                                this.state.modules.map((module, index)=>(
                                    <HeadNode key={index} title={module.title} indexNumber={index}
                                              onClickRemove={this.deleteModule}/>
                                ))
                            }
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div> :               <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-info">
                    <a className="collapse navbar-collapse navbar-brand col-lg-3" href="#">
                        White Board
                    </a>
                    <div className="row col-lg-8">
                        <div className="col-lg-6">
                            <form>
                                <input type="text" className="form-control"
                                       onChange={this.formChanged} id="module-name"
                                       placeholder="Add Course"></input>
                            </form>
                        </div>
                        <div className="col-lg-4" style={divStyle2}>
                            <button onClick={this.addNewModule} className="btn-primary">
                                <i className="fa fa-plus-circle"></i>
                            </button>
                            {this.state.newModuleTitle}
                            <button onClick={()=>{this.changeViewList(this.LIST_VIEW)}}
                                    className="btn-primary">List</button>
                            <button onClick={()=>{this.changeViewList(this.GRID_VIEW)}}
                                    className="btn-primary">Grid</button>
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarsExample04"
                            aria-controls="navbarsExample04" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="login/login.template.client.html"> Login</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="register/register.template.client.html">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {
                        this.state.modules.map((module, index)=>(
                            <CourseHead key={index} title={module.title} indexNumber={index}
                                        onClickRemove={this.deleteModule}/>
                        ))
                    }
                </div>
            </div> }
        </div>)
    }
}
export default HeaderSwitch;
