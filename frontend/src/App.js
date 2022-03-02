import React, { Component } from "react"
import {render} from "react-dom"


export default class App extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return <p>This is what we will see in our application!</p>
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);