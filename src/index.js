import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello';
import ModuleList from "./ModuleList";
import NavigationList from "./navigationList";
import LongDiv from "./h";
import LongHigh from "./l";
import Mid from "./mid";
import Toggle from "./toggle";
import Header from "./Header";
import Modules from "./Modules";
import Module from "./Module";
import HeadNode from "./HeadNode";
import CardHeader from "./CardHeader";
import HeaderSwitch from "./HeaderSwitch";
import Lessons from "./Lessons";
import Topics from "./Topics";
import Widget from "./Widgets";
import Edit from "./edit";
import EditCourse from "./EditCourse";


function getModules() {
    return <li className="list-group-item">ss</li>;
}


const element = (
    <ul className="btn-primary col-lg-4">
        {getModules()} {getModules()} {getModules()} {getModules()}
    </ul>
);

const element2 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);



const element3 = (
    <ul className="list-group">
        <li className="list-group-item col-lg-3">Module 1</li>
        <li className="list-group-item col-lg-3">Module 2</li>
        <li className="list-group-item col-lg-3">Module 3</li>
        <li className="list-group-item col-lg-3">Module 4</li>
        <li className="list-group-item col-lg-3">New Module</li>
    </ul>
);

ReactDOM.render(<HeaderSwitch/>,document.getElementById('root'));













