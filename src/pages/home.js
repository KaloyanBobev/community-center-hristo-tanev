import React, { Component } from 'react';

import homeData from '../data/data';
import ToggleBtn from '../components/ToggleBtn';

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

        return (
            <section className={this.state.visible ? "container" : "container show"}>
                <div className="text-box">
                    <h1>НАРОДНО ЧИТАЛИЩЕ „ХРИСТО ТАНЕВ – 2020“ СТАРА ЗАГОРА</h1>
                    {this.state.data.map((item) => {
                        return (
                            <div key={item.sys.id}>{item.fields.text}</div>
                        )
                    })}
                </div>
                <ToggleBtn
                    visible={this.state.visible}
                    handleToggle={this.handleToggle}
                />

            </section>
        )
    }
}
