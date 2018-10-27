import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import HelloWorld from './components/HelloWorld'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import WhiteBoard from './containers/WhiteBoard'
import {WidgetListComponent} from "./containers/Widgets/WidgetListComponent";
import {widgetReducer} from "./reducers/WidgetReducer";
import WidgetListContainer from "./containers/WidgetListContainer";
import LoginTab from "./components/LoginTab";
import RegisterTab from "./components/RegisterTab"
import ProfileTab from "./components/ProfileTab";


const courses = [
    {
        title: 'CS5200'
    },
    {
        title: 'CS5610'
    }
]

let store = createStore(widgetReducer)

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <div className="container-fluid">
        <WhiteBoard courses={courses}/>

        <Route path='/widgets' component={WidgetListContainer}/>
    </div>
    </Router>
    </Provider>,
    document.getElementById("root")
)