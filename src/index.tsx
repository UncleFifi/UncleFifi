import React, { useState } from "react"
import { render } from "react-dom"
import './styles/index.scss'

import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
const RootComponent = <Provider store={store}><App /></Provider>
const RootNode = document.getElementById("root")
render(RootComponent, RootNode);