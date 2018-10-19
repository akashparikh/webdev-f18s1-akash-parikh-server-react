import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({addModule,modules, deleteModule, selectModule, selectedModule}) =>
    <ul className="list-group">
        {
            modules.map((module, index) =>
                <ModuleListItem
                    selected={selectedModule === module}
                    selectModule={selectModule}
                    deleteModule={deleteModule}
                    key={index}
                    module={module}/>
            )
        }
        <li className="list-group">
            <form>
                <input type="text" className="form-control" value="New Topic"
                       placeholder="New Topic">
                </input>
            </form>
            <button  onClick={() => addModule()} className="btn-primary">Add Module</button>
        </li>
    </ul>

export default ModuleList