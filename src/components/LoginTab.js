import React from 'react'
import {Link, Route} from "react-router-dom";
import RegisterTab from "./RegisterTab";
import ProfileTab from "./ProfileTab";
import CourseTable from "./CourseTable";

var style = {color:'whitesmoke',textDecoration:'none'};
var style2 = {textAlign:'center'};


export default class LoginTab extends React.Component {

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


                <div className="collapse navbar-collapse col-lg-4 float-right" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                                <a className="nav-link" style={style} href="#">Login</a>
                        </li>
                        <li className="nav-item active">
                            <Link to="/components/Register"><a className="nav-link" style={style}> Register</a></Link>
                            <Route path="/components/Register"
                                   component={RegisterTab}/>
                        </li>
                        <li className="nav-item active">
                            <Link to="/components/Profile"><a className="nav-link" style={style}> Profile</a></Link>
                            <Route path="/components/Profile"
                                   component={ProfileTab}/>
                        </li>
                    </ul>
                </div>

            </nav>

                <div>
                    <h1 style={style2}> Sign In </h1>
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

                        <div className="row">
                            <div className="col-md-7 mb-3"></div>

                            <button className="btn btn-info btn-lg btn-block col-md-4 mb-3" type="submit">
                                <a href="#"
                                   style={style}>
                                    Sign In
                                </a>
                            </button>
                        </div>


                        <div className="row">
                            <div className="col-md-6 mb-3">

                            </div>


                            <div className="col-md-6 mb-3" style={style2}>
                                <a className="col-md-2 mb-3" href="#">
                                    Cancel
                                </a>
                                <a className="col-md-2 mb-3" href="#">
                                    Forgot Password?
                                </a>
                                <a className="col-md-2 mb-3" href="#">
                                    Sign Up
                                </a>
                            </div>
                        </div>


                    </form>
                </div>

            </div>



    )
    }
}