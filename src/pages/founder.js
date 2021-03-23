import React, { Component } from 'react'
import Image from '../components/Image';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';
import data from '../data/founderData';
export default class founder extends Component {

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
            data: data
        })

    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        let heading = "За Христо Танев";
        return (
            <section className="container founder">
                <div>
                    <h1>Founder</h1>
                    <Image data={data.slice(0, 2)} />
                </div>

                <div>
                    <Container

                        visible={this.state.visible}
                        data={this.state.data.slice(2, 12)}
                        heading={heading}
                    />
                    <ToggleBtn
                        visible={this.state.visible}
                        handleToggle={this.handleToggle}
                    />
                </div>
            </section>
        )
    }
}

