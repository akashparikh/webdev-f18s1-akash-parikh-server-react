import React from 'react'
import CourseRow from "./CourseRow";
import CourseAdd from "./CourseAdd";
import {Link, Route} from "react-router-dom";
import RegisterTab from "./RegisterTab";
import ProfileTab from "./ProfileTab";
import LoginTab from "./LoginTab";

var style = {color:'whitesmoke',textDecoration:'none'};
var style2 = {textAlign:'center'};

const CourseTable = ({courses, deleteCourse, addCourse}) =>
    <div>
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-info">
                    <a className="navbar-brand col-8" href="#">Course Manager</a>
                <div className="collapse navbar-collapse col-lg-4 float-right" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/components/Login">
                                <a className="nav-link" style={style}>Login</a>
                            </Link>
                            <Route path="/components/Login"
                                   component={LoginTab}/>
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
        </div>
        <CourseAdd
            addCourse={addCourse}/>
        <table className="table">
            <tbody>
            {
                courses.map((course, index) =>
                    (<CourseRow
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}/>)
                )
            }
            </tbody>
        </table>
    </div>

export default CourseTable