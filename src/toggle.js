import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import LongDiv from "./h";


var divStyle = {border:'1px solid black',width:'800px',height:'100px'};

class Toggle extends React.Component // Component 1
{
    render()
    {
        return (
            <div style={divStyle}>
                <Router>
                    <div>
                        <Link to="/h"> Table </Link>
                        <Route path="/h" component={LongDiv}/>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Toggle;
