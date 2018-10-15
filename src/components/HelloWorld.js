import React from 'react'

const HelloWorld = ({message,sendMessage1,sendMessage2}) =>
    <div>
        <h1>Hello World</h1>
        <h2>{message}</h2>
        <button onClick={sendMessage1}>Message 1</button>
        <button onClick={sendMessage2}>Message 2</button>
    </div>

export default HelloWorld