import React from 'react'
import {Link, Route} from "react-router-dom";
import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";

var style = {color:'whitesmoke',textDecoration:'none'};
var style2 = {textAlign:'center'};
var style3 = {textDecoration:'none',color:'aliceblue'}

export default class ProfileTab  extends React.Component {

    render() {
        return(
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark bg-info">

                    <a className="navbar-brand col-8" href="#">Course Manager</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                            aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse col-lg-4" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/components/Login">
                                    <a className="nav-link" style={style}>Login</a>
                                </Link>
                                <Route path="/components/Login"
                                       component={LoginTab}/>
                            </li>
                            <li className="nav-item active">
                                <Link to="/components/Register"><a className="nav-link" style={style}> Register</a></Link>
                                <Route path="/components/Register"
                                       component={RegisterTab}/>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div className="container-fluid">
                    <h1 style={style2}>Profile</h1>
                    <form className="form-signin">

                        <div className="row">

                            <div className="blank col-md-7 mb-3">

                            </div>

                            <div type="text"
                                 className="col-md-4 mb-3 alert alert-success" role="alert">
                                Profile successfully saved!
                            </div>

                        </div>

                        <div className="row" style={style2}>

                            <label className="col-md-7 mb-3"
                                   htmlFor="username">
                                Username
                            </label>

                            <input type="text"
                                   className="form-control col-md-4 mb-3"
                                   id="username"
                                   placeholder="" value="Alice"
                                   required readOnly/>

                        </div>


                        <div className="row" style={style2}>
                            <label className="col-md-7 mb-3"
                                   htmlFor="phone">
                                Phone
                            </label>
                            <input type="text"
                                   className="form-control col-md-4 mb-3"
                                   id="phone"
                                   placeholder="617-888-4430" value=""
                                   required autoFocus/>
                        </div>

                        <div className="row" style={style2}>
                            <label className="col-md-7 mb-3"
                                   htmlFor="email">
                                Email
                            </label>
                            <input type="email"
                                   className="form-control col-md-4 mb-3"
                                   id="email"
                                   placeholder="user@gmail" value=""
                                   required autoFocus/>
                        </div>


                        <div className="row" style={style2}>
                            <label className="col-md-7 mb-3"
                                   htmlFor="role">
                                Role
                            </label>
                            <select id="role" className="form-control col-md-4 mb-3 form-control">
                                <option>Faculty</option>
                                <option>Student</option>
                                <option>Admin</option>
                            </select>
                        </div>


                        <div className="row" style={style2}>
                            <label className="col-md-7 mb-3"
                                   htmlFor="DOB">
                                DOB
                            </label>
                            <input type="date"
                                   className="form-control col-md-4 mb-3"
                                   id="DOB"
                                   value="1992-01-01"
                                   required autoFocus/>
                        </div>


                        <div className="row">
                            <div className="col-md-7 mb-3"></div>

                            <button className="btn btn-success btn-lg btn-block col-md-4 mb-3" type="submit">
                                Update
                            </button>
                        </div>



                        <div className="row">
                            <div className="col-md-7 mb-3"></div>

                            <button className="btn btn-danger btn-lg btn-block col-md-4 mb-3">
                                <a style={style}
                                   href="#">
                                    Logout
                                </a>
                            </button>
                        </div>


                    </form>
                </div>

            </div>
        )
    }
}