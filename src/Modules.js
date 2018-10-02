import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Module from './Module';
var divStyle = {border:'1px solid black',width:'100px',height:'500px',color:'white'};
var style0={pullLeft:'true',float:'left'};
var style1={textAlign:'center',borderRadius:'5px'};
var style2={pullRight:'true',borderRadius:'5px',float:'right'};
var modStyle={marginTop:'8%',textAlign:'center',borderRadius:'5px'};



class Modules extends React.Component // Component 1
{
    constructor(props){
        super(props)
        this.state={
            modules:[
                {
                    title:' Module 1'
                },
                {
                    title:'Module 2'
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
            <nav className="container-fluid col-lg-2 col-md-2 col-sm-2 navbar navbar-light bg-light" style={style0}>

                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item bg-warning col-lg-12" style={style1}>
                            {
                                this.state.modules.map((module, index)=>(
                                    <Module key={index} title={module.title} indexNumber={index}
                                                    onClickRemove={this.deleteModule}/>
                                ))
                            }
                        </li>
                        <li className="nav-item bg-warning" style={modStyle}>
                         <span className="li-element">
                        <form>
                        <input type="text" onChange={this.formChanged}
                               className="form-control" id="module-name" placeholder="add module">
                        </input>
                        </form>
                         </span>
                            <button onClick={this.addNewModule} className="btn btn-sm btn-danger"
                                    style={style2}>
                                <i className="fa fa-plus-circle"></i>
                            </button>{this.state.newModuleTitle}
                        </li>


                    </ul>

                </div>

            </nav>
        )
    }
}
export default Modules;
