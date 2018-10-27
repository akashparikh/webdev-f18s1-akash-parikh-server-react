import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import ModuleList3 from "../components/ModuleList3";
import CourseGrid from "../components/CourseGrid";
import CourseTable from "../components/CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseServiceSingleton from "../services/CourseServiceSingleton";
import CourseEditor from "../components/CourseEditor";
import LoginTab from "../components/LoginTab";
import RegisterTab from "../components/RegisterTab";
import ProfileTab from "../components/ProfileTab";

var style = {color:'whitesmoke',textDecoration:'none'};
var style2 = {textAlign:'center'};

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: CourseServiceSingleton.findAllCourses()
        }
    }
    addCourse = newCourse => {
        CourseServiceSingleton.createCourse(newCourse)
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
    }

    deleteCourse = courseToDelete => {
        CourseServiceSingleton.deleteCourse(courseToDelete.id)
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
    }

    deleteModule = module =>{
        CourseServiceSingleton.deleteModule(module)
        this.setState({
            courses: CourseServiceSingleton.findAllCourses()
        })
    }

    render() {
        return (
            <div>
                <h1>WhiteBoard ({this.state.courses.length})</h1>
                <Router>

                    <div>
                        <Link to="/components/Login">Login |</Link>
                        <Link to="/course/table"> Table |</Link>
                        <Link to="/course/grid"> Grid |</Link>
                        <Link to="/components/Register"> Register |</Link>
                        <Link to="/components/Profile"> Profile |</Link>
                        <Route path="/course/table"
                               render={() =>
                                   <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/grid"
                               component={CourseGrid}/>
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>
                        <Route path="/components/Login"
                               component={LoginTab}/>
                        <Route path="/components/Register"
                               component={RegisterTab}/>
                        <Route path="/components/Profile"
                               component={ProfileTab}/>

                    </div>

                </Router>
            </div>
        );
    }
}