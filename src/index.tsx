import React from "react"
import { render } from "react-dom"
import './styles/index.scss'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { App } from './App'
const RootComponent = <App />
const RootNode = document.getElementById("root")
render(RootComponent, RootNode);