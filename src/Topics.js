import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Topic from './Topic';

var divStyle = {border:'1px solid black',width:'100px',height:'500px',color:'white'};
var modStyle={marginTop:'8%',textAlign:'center',borderRadius:'5px',float:'right'};
var style2={pullRight:'true',borderRadius:'5px',float:'right'};

class Topics extends React.Component // Component 1
{
    constructor(props){
        super(props)
        this.state={
            modules:[
                {
                    title:'Topic 1'
                },
                {
                    title:'Topic 2'
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
            <div>
                <ul className="container-fluid nav nav-tabs bg-light col-lg-10 col-md-10 col-sm-10">
                    <h2>&nbsp;Topic List&nbsp;&nbsp;</h2>
                    {
                        this.state.modules.map((module, index)=>(
                            <Topic key={index} title={module.title} indexNumber={index}
                                    onClickRemove={this.deleteModule}/>
                        ))
                    }
                    <li className="nav-item">
                        <form>
                            <input type="text" onChange={this.formChanged}
                                   className="form-control" id="module-name" placeholder="add module">
                            </input>
                        </form>
                        <button onClick={this.addNewModule} className="btn btn-sm btn-danger"
                                style={style2}>
                            <i className="fa fa-plus-circle"></i>
                        </button>{this.state.newModuleTitle}
                    </li>
                </ul>
            </div>
        )
    }
}
export default Topics;
