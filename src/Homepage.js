import "./Homepage.css";
import React, { useRef, useEffect, useState, Componenet } from "react";
import React from "react";
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Splitter } from '@progress/kendo-react-layout';
import './styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panes: [
                { size: '20%', scrollable: false },
                {}
            ],
        };
    }

    onChange = (event) => {
        this.setState({
            panes: event.newState
        });
    }

    render() {
        return (
            <div>
                <Splitter
                    style={{ height: 200 }}
                    panes={this.state.panes}
                    onChange={this.onChange}
                >
                    <div>
                        <h3>Non-scrollable content</h3>
                    </div>
                    <h3>Main content</h3>
                </Splitter>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);