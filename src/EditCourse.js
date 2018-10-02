import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavigationList from "./navigationList";
import Modules from "./Modules";
import Topics from "./Topics";
import Lessons from "./Lessons";
import Widget from "./Widgets";
var divStyle = {border:'1px solid black',width:'100px',height:'500px',color:'white'};

class EditCourse extends React.Component // Component 1
{
    render()
    {
        return (
            <div>
                <div>
                    <NavigationList/>
                </div>
                <div>
                    <Modules/>
                </div>
                <div>
                    <Topics/>
                </div>
            </div>
        )
    }
}
export default EditCourse;
