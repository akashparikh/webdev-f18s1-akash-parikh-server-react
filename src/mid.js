import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import LongDiv from "./h";
import LongHigh from "./l";

class Mid extends React.Component // Component 1
{
    render()
    {
        return (
            <div>
            <div>
                <LongDiv/>
             </div>
             <div>
                <LongHigh/>
             </div>
            </div>
            )
    }
}
export default Mid;