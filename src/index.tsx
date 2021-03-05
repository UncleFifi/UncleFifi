import React from "react"
import { render } from "react-dom"
import './styles/index.scss'
import { App } from './App'
const RootComponent = <App />
const RootNode = document.getElementById("root")
render(RootComponent, RootNode);