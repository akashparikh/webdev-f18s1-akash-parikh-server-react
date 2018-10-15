import React from 'react';
var headerWidget = {border:'1px solid whitesmoke',marginTop:'1%',borderRadius:'5px'};
var btnMr={float:'left',marginBottom:'1%'};
var btnWr={float:'left',borderRadius:'5px'};
var btnDw={marginleft:'2%',float:'left',borderradius:'5px'};
var sel={marginleft:'4%',float:'left'};
var btnDan={marginleft:'2%',float:'left',borderradius:'5px;'};
var mtOne={marginTop:'1%'};
var mtTwo={marginTop:'2%'};
var borFive={borderradius:'5px'};
var addBtn={float:'right',margintop:'1%',marginbottom:'1%'};
var divStyle = {border:'1px solid black',width:'100px',height:'500px',color:'white'};



    class Widget extends React.Component // Component 1
    {
        render()
    {
        return (
            <div className="container-fluid col-lg-10 col-md-10 col-sm-10 all-widgets">

                <div className="header-widget bg-light col-lg-12 col-sm-12 col-md-12"
                     style={headerWidget}>

                    <h3 className="h3"><b>Heading Widget</b></h3>

                    <div className="btn-group mr-2 col-lg-4 col-sm-4 col-md-4"
                         style={btnMr}>

                        <button className="btn btn-sm btn-warning"
                                style={btnWr}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button className="btn btn-sm btn-warning"
                                style={btnDw}>
                            <i className="fa fa-arrow-down"></i>
                        </button>

                        <select id="role" className="form-control col-lg-5 col-md-5 col-sm-5"
                                style={sel}>
                            <option>Heading</option>
                            <option>List</option>
                            <option>Paragrapgh</option>
                            <option>Image</option>
                            <option>Link</option>
                        </select>

                        <button className="btn btn-sm btn-danger"
                                style={btnDan}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>

                    <form>

                        <select id="heading-type" className="form-control col-lg-8 col-sm-8 col-md-8">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                        </select>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="address" placeholder="widget name"
                               style={mtTwo}>
                        </input>

                        <div className="widget-heading-preview col-lg-12 col-sm-12 col-md-12"
                             style={mtOne}>
                            <h5 className="h5"> Preview </h5>
                            <h2 className="h2"> Heading Text </h2>
                        </div>

                    </form>

                </div>


                <div className="header-widget bg-light col-lg-12 col-sm-12 col-md-12"
                     style={headerWidget}>

                    <h3 className="h3"><b>List Widget</b></h3>

                    <div className="btn-group mr-2 col-lg-4 col-sm-4 col-md-4"
                         style={btnMr}>

                        <button className="btn btn-sm btn-warning"
                                style={btnWr}>
                            <i className="fa fa-arrow-up"></i>
                        </button>

                        <button className="btn btn-sm btn-warning"
                                style={btnDw}>
                            <i className="fa fa-arrow-down"></i>
                        </button>

                        <select id="widget-type" className="form-control col-lg-5 col-md-5 col-sm-5"
                                style={sel}>
                            <option>List</option>
                            <option>Heading</option>
                            <option>Paragrapgh</option>
                            <option>Image</option>
                            <option>Link</option>
                        </select>

                        <button className="btn btn-sm btn-danger"
                                style={btnDan}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>

                    <form>

                        <div className="form-group">
                <textarea className="form-control col-lg-8 col-sm-8 col-md-8" rows="3" id="comment">Put Each item
in a
separate row
                            </textarea>
                        </div>

                        <select id="list-type" className="form-control col-lg-8 col-sm-8 col-md-8" style={mtTwo}>
                            <option>Unordered List</option>
                            <option>Ordered List</option>
                        </select>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="widget-name" placeholder="widget name"
                               style={mtTwo}>
                        </input>

                        <div className="widget-heading-preview col-lg-12 col-sm-12 col-md-12"
                             style={mtOne}>
                            <h5 className="h5"> Preview </h5>
                            <ul>
                                <li>Put each</li>
                                <li>item in a</li>
                                <li>separate</li>
                            </ul>
                        </div>

                    </form>

                </div>


                <div className="header-widget bg-light col-lg-12 col-sm-12 col-md-12"
                     style={headerWidget}>

                    <h3 className="h3"><b> Paragraph Widget</b></h3>

                    <div className="btn-group mr-2 col-lg-4 col-sm-4 col-md-4"
                         style={btnMr}>

                        <button className="btn btn-sm btn-warning"
                                style={btnWr}>
                            <i className="fa fa-arrow-up"></i>
                        </button>

                        <button className="btn btn-sm btn-warning"
                                style={btnDw}>
                            <i className="fa fa-arrow-down"></i>
                        </button>

                        <select id="widget-type" className="form-control col-lg-5 col-md-5 col-sm-5"
                                style={sel}>
                            <option>Paragraph</option>
                            <option>Heading</option>
                            <option>List</option>
                            <option>Image</option>
                            <option>Link</option>
                        </select>

                        <button className="btn btn-sm btn-danger"
                                style={btnDan}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>

                    <form>

                        <div className="form-group">
                            <textarea className="form-control col-lg-8 col-sm-8 col-md-8" rows="3"
                                      id="paragraphwidget">
                                        lorem ipsum
                            </textarea>
                        </div>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="widgetname" placeholder="widget name"
                               style={mtTwo}>
                        </input>

                        <div className="widget-heading-preview col-lg-12 col-sm-12 col-md-12"
                             style={mtOne}>
                            <h5 className="h5"> Preview </h5>
                            <span>
                    lorem ipsum
                </span>
                        </div>

                    </form>

                </div>


                <div className="header-widget bg-light col-lg-12 col-sm-12 col-md-12"
                     style={headerWidget}>

                    <h3 className="h3"><b>Link Widget</b></h3>

                    <div className="btn-group mr-2 col-lg-4 col-sm-4 col-md-4"
                         style={btnMr}>

                        <button className="btn btn-sm btn-warning"
                                style={btnWr}>
                            <i className="fa fa-arrow-up"></i>
                        </button>

                        <button className="btn btn-sm btn-warning"
                                style={btnDw}>
                            <i className="fa fa-arrow-down"></i>
                        </button>

                        <select id="widget-type" className="form-control col-lg-5 col-md-5 col-sm-5"
                                style={sel}>
                            <option>Link</option>
                            <option>Heading</option>
                            <option>Paragrapgh</option>
                            <option>Image</option>
                            <option>List</option>
                        </select>

                        <button className="btn btn-sm btn-danger"
                                style={btnDan}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>

                    <form>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="link-address"
                               value="https://www.youtube.com/user/jannunzi">
                        </input>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="link-text"
                               value="Link Text" style={mtOne}>
                        </input>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="link-address"
                               value="https://www.youtube.com/user/jannunzi"
                               style={mtOne}>
                        </input>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="widget-name" placeholder="widget name"
                               style={mtTwo}>
                        </input>

                        <div className="widget-heading-preview col-lg-12 col-sm-12 col-md-12"
                             style={mtOne}>
                            <h5 className="h5"> Preview </h5>
                            <a href="https://www.youtube.com/user/jannunzi">Link Text</a>
                        </div>

                    </form>

                </div>


                <div className="header-widget bg-light col-lg-12 col-sm-12 col-md-12"
                     style={headerWidget}>

                    <h3 className="h3"><b>Image Widget</b></h3>

                    <div className="btn-group mr-2 col-lg-4 col-sm-4 col-md-4"
                         style={btnMr}>

                        <button className="btn btn-sm btn-warning"
                                style={btnWr}>
                            <i className="fa fa-arrow-up"></i>
                        </button>

                        <button className="btn btn-sm btn-warning"
                                style={btnDw}>
                            <i className="fa fa-arrow-down"></i>
                        </button>

                        <select id="widget-type" className="form-control col-lg-5 col-md-5 col-sm-5"
                                style={sel}>
                            <option>Image</option>
                            <option>Heading</option>
                            <option>Paragrapgh</option>
                            <option>Link</option>
                            <option>List</option>
                        </select>

                        <button className="btn btn-sm btn-danger"
                                style={btnDan}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>

                    <form>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="image-address"
                               value="abc.jpg">
                        </input>

                        <input type="text" className="form-control col-lg-8 col-sm-8 col-md-8"
                               id="widget-name" placeholder="widget name"
                               style={mtTwo}>
                        </input>

                        <div className="widget-heading-preview col-lg-12 col-sm-12 col-md-12"
                             style={mtOne}>
                            <h5 className="h5"> Preview </h5>

                        </div>

                    </form>

                </div>


                <div className="container-fluid col-lg-1"
                     style={addBtn}>
                    <button className="btn btn-sm btn-danger"
                            style={borFive}>
                        <i className="fa fa-plus-circle"></i>
                    </button>

                </div>

            </div>
    )
    }
    }
    export default Widget;


