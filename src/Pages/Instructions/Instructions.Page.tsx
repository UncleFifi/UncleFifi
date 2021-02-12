import React, { FC } from "react"
import { Row } from './Row'
import { Title } from './Title'

export const Instructions: FC = () => (<div className="flexed col stretched">
    <Row>
        <Title>Step#1 - Add Dependencies</Title>
        <div className="stretched pad-20">
            npm i -D @types/react-redux
        </div>
        <div className="stretched pad-20">
            npm i react-redux redux redux-thunk
        </div>
    </Row>
    <Row>
        <Title>Step#2 - Move Redux folder inside your ./src</Title>
    </Row>
    <Row>
        <Title>Step#3 - Change your index.tsx so that you reference the Provider and store configuration</Title>
    </Row>
</div>)