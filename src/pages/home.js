import React, { Component } from 'react';

import homeData from '../data/homeData';
import ToggleBtn from '../components/ToggleBtn';
import Container from '../components/Container';

export default class home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            visible: true
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: homeData
        })

    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        let heading = "НАРОДНО ЧИТАЛИЩЕ „ХРИСТО ТАНЕВ – 2020“ СТАРА ЗАГОРА";
        return (
            <>
                <Container
                    data={this.state.data}
                    heading={heading}
                />
                <ToggleBtn
                    visible={this.state.visible}
                    handleToggle={this.handleToggle}
                />
            </>

        )
    }
}
