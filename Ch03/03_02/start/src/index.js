import React from 'react'
import { render } from 'react-dom'
import './style.css'

const Greeting = () => {
    <div>
        <h1>Webpack loading urls</h1>
        <div id="image"></div>
    </div>
}

render(
    <Greeting />,
    document.getElementById('target')
) 