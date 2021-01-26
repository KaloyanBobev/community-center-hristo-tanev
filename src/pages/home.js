import React, { Component } from 'react';

import homeData from '../data/data';
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
        console.log(this.state.visible);
        return (
            <>
                <section className={this.state.visible ? "container" : "container show"}    >
                    <h1>НАРОДНО ЧИТАЛИЩЕ „ХРИСТО ТАНЕВ – 2020“ СТАРА ЗАГОРА</h1>
                    <Container data={this.state.data} />
                </section>
                <ToggleBtn
                    visible={this.state.visible}
                    handleToggle={this.handleToggle}
                />
            </>

        )
    }
}
