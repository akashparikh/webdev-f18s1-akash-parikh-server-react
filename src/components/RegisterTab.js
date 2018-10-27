import React from 'react'
import {Link, Route} from "react-router-dom";
import LoginTab from "./LoginTab"
import CourseTable from "./CourseTable";

var style = {color:'whitesmoke',textDecoration:'none'};
var style2 = {textAlign:'center'};
var style3 = {textDecoration:'none',color:'aliceblue'}

export default class RegisterTab  extends React.Component {

    render() {
        return(
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark bg-info">

                    <Link to="/course/table">
                        <a className="navbar-brand col-8" href="#">Course Manager</a>
                    </Link>
                    <Route path="/course/table"
                           render={() =>
                               <CourseTable
                                   addCourse={this.addCourse}
                                   deleteCourse={this.deleteCourse}
                                   courses={this.state.courses}/>}/>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                            aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse col-lg-4" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/components/Login">
                                    <a className="nav-link" style={style}>Login</a>
                                </Link>
                                <Route path="/components/Login"
                                       component={LoginTab}/>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div className="container-fluid">
                    <h1 style={style2}> Register</h1>
                    <form className="form-signin">

                        <div className="row" style={style2}>
                            <label className="col-md-7 mb-3"
                                   htmlFor="username">
                                Username
                            </label>
                            <input type="text"
                                   className="form-control col-md-4 mb-3"
                                   id="username"
                                   placeholder="alice@gmail.com" value=""
                                   required autoFocus/>
                        </div>


                        <div className="row" style={style2}>
                            <label className="col-md-7 mb-3"
                                   htmlFor="password">
                                Password
                            </label>
                            <input type="password"
                                   className="form-control col-md-4 mb-3"
                                   id="password"
                                   placeholder="pass@123" value=""
                                   required autoFocus/>
                        </div>


                        <div className="row" style={style2}>
                            <label className="col-md-7 mb-3"
                                   htmlFor="verifypassword">
                                Verify Password
                            </label>
                            <input type="password"
                                   className="form-control col-md-4 mb-3"
                                   id="verifypassword"
                                   placeholder="pass@123" value=""
                                   required autoFocus/>
                        </div>


                        <div className="row">
                            <div className="col-md-7 mb-3"></div>

                            <button className="btn btn-info btn-lg btn-block col-md-4 mb-3" type="submit">
                                <a href="#"
                                   style={style3}>Register</a>
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}