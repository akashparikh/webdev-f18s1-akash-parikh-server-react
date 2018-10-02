import React from 'react';
import ModuleListItem from './ModuleListItem';

export default class ModuleList extends React.Component {

    constructor(props){
        super(props)
        this.state={
            modules:[
                {
                    title:'week 1'
                },
                {
                    title:'week 2'
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

    render() { return (
        <h2>
        <ul className="list-group">
            <li className="list-group-item active col-lg-3">Modules</li>
            {
                this.state.modules.map((module, index)=>(
                    <ModuleListItem key={index} title={module.title} indexNumber={index}
                                    onClickRemove={this.deleteModule}/>
                ))
            }
            <li>
                <div className="row col-lg-3">
                    <div className="col-lg-9">
                            <form>
                                <input onChange={this.formChanged} type="text" className="form-control"
                                       placeholder="add module"></input>
                             </form>
                    </div>
                    <div className="col-lg-3">
                        <btn onClick={this.addNewModule} className="btn-primary">Add</btn>
                        {this.state.newModuleTitle}
                    </div>
                </div>
            </li>
        </ul>


        </h2>
    );}}
