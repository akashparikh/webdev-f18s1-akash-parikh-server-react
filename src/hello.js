import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
var divStyle = {color:'white'};

class HelloWorld extends React.Component // Component 1
{
    render()
    {
        return (
            <nav className="container-fluid navbar navbar-light bg-dark col-lg-12 col-sm-12 col-md-12">
                <h4 className="h4" style={divStyle}>CS5610-WebDev</h4>
                <button className="btn btn-secondary" type="button">Build</button>
                <button className="btn btn-secondary" type="button">Pages</button>
                <button className="btn btn-secondary" type="button">Theme</button>
                <button className="btn btn-secondary" type="button">Store</button>
                <button className="btn btn-secondary" type="button">Apps</button>
                <button className="btn btn-secondary" type="button">Settings</button>
                <button className="btn btn-sm btn-secondary">
                    <span className="glyphicon glyphicon-plus">+</span>
                </button>
            </nav>)
    }
}
export default HelloWorld;
