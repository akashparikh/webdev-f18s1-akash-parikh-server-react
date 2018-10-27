import React from 'react'
import TopicPill from "./TopicPill";

const TopicPills = ({topics, selectTopic, selectedTopic}) =>
    <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                <TopicPill
                    selected={selectedTopic===topic}
                    selectTopic={selectTopic}
                    topic={topic}
                    key={index}/>
            )
        }
        <li className="nav-item">
            <form>
                <input type="text" className="form-control" value="New Topic"
                       placeholder="New Topic">
                </input>
            </form>
        </li>
        <li className="nav-item">
            <button  onClick="" className="btn-primary">Add Topic</button>
        </li>
    </ul>

export default TopicPills