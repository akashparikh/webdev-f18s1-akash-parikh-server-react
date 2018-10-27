import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import widgets from "../reducers/widgets"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'
import Switch from 'react-switch';

import WhiteBoard from "../containers/WhiteBoard";

const store = createStore(widgets)

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const courseId = this.props.match.params.courseId;

        // use courseId to find the course object from the
        // courses array passed in as a property
        const course = this.props.courses.find(
            course => course.id === courseId);

        const selectedModule = course.modules[0];
        const selectedLesson = selectedModule.lessons[0];
        const selectedTopic = selectedLesson.topics[0];

        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic: selectedTopic,
            checked:false
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(checked){
        this.setState({checked});
    }

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0]
        })
    }

    render() {
        return(
            <div>
                <h2>Course Editor:
                    {this.state.course.title}
                    ({this.props.match.params.courseId})
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            modules={this.state.course.modules}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}/>

                        <br/>

                        <TopicPills
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}
                            topics={this.state.selectedLesson.topics}/>

                        <br/>

                        <ul className="list-group">
                            <li className="list-group-item">
                                <button className="btn btn-success">Save</button>
                                {/*<button value={this.preview}*/}
                                        {/*onClick={()=>this.preview=!this.preview*/}
                                        {/*}*/}
                                        {/*className="btn btn-warning float-right">*/}
                                    {/*Preview*/}
                                {/*</button>*/}
                                <span className="float-right mt-2">
                                    <label>
                                        <Switch
                                            onChange={this.handleChange}
                                            checked={this.state.checked}
                                            id="normal-switch"
                                        />
                                    </label>
                                </span>
                            </li>
                        </ul>

                        <Provider store={store}>
                            <WidgetListContainer
                                topic={this.state.selectedTopic}
                                widgetsInit={this.state.selectedTopic.widgets}
                                checked={this.state.checked}
                            />
                        </Provider>

                    </div>
                </div>
            </div>
        )
    }
}
