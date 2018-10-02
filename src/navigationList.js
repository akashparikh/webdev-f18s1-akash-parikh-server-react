import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavigationListItem from "./navigationItem";
var divStyle = {color:'white'};
var divStyle2 = {color:'white'};

class NavigationList extends React.Component // Component 1
{

    constructor(props){
        super(props)
        this.state={
            modules:[
                {
                    title:'Lesson 1'
                },
                {
                    title:'Lesson 2'
                },
                {
                    title:'Lesson 3'
                },
                {
                    title:'Lesson 4'
                }
            ]
        }

    }

    formChanged = (event) => {
        console.log(event.target.value);
        this.setState({
            newModuleTitle:event.target.value
        })
    }

    addNewModule = () => {
        let modules = this.state.modules;
        modules.push({
            title:this.state.newModuleTitle
        })
        this.setState({
            modules: modules
        })
    }

    deleteModule= (index) =>{
        let modules = this.state.modules;
        modules.splice(index,1);
        //alert("Click Deleted key is"+index);
        this.setState({
            modules: modules
        })
    }

    render()
    {
        return (
            <nav className="container-fluid navbar navbar-light bg-dark col-lg-12 col-sm-12 col-md-12">
                <h4 className="h4" style={divStyle}>CS5610-WebDev</h4>
                {
                    this.state.modules.map((module, index)=>(
                        <NavigationListItem key={index} title={module.title} indexNumber={index}
                                        onClickRemove={this.deleteModule}/>
                    ))
                }
                <div className="row col-lg-3">
                    <div className="col-lg-6">
                        <form>
                            <input onChange={this.formChanged} type="text" className="form-control"
                                   placeholder="add module"></input>
                        </form>
                    </div>
                    <div className="col-lg-4" style={divStyle2}>
                        <button onClick={this.addNewModule} className="btn-primary">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                        {this.state.newModuleTitle}
                    </div>
                </div>
            </nav>)
    }
}
export default NavigationList;
