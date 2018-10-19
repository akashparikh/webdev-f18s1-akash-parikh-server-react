import React from 'react'
import LessonTab from "./LessonTab";

const LessonTabs = ({lessons, selectLesson, selectedLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    selected={selectedLesson === lesson}
                    selectLesson={selectLesson}
                    lesson={lesson}
                    key={index}/>
            )
        }
        <li className="list-item">
            <form>
                <input type="text" className="form-control" value="New Lesson"
                       placeholder="New Topic">
                </input>
            </form>
        </li>
        <li className="list-item">
            <button  onClick="" className="btn-primary">Add Lesson</button>
        </li>
    </ul>

export default LessonTabs