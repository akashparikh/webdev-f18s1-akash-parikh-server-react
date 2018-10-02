import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
var divStyle = {border:'1px solid black',width:'100px',height:'500px',color:'white'};

class LongHigh extends React.Component // Component 1
{
    render()
    {
        return (
            <div style={divStyle}><h1>HelloWorld</h1></div>
        )
    }
}
export default LongHigh;
