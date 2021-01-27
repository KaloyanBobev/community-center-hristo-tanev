import React, { Component } from 'react'
import albaData from '../data/albaData.js';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';

export default class galleryAvia extends Component {

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
            data: albaData
        })
    }
    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        let heading = "Васа РУСЕВА, галерия „Алба-Авитохол“ в Стара Загора: Редовните ни срещи продължават";
        return (
            <>

                <Container
                    className={"alba-text"}
                    visible={this.state.visible}
                    data={this.state.data}
                    heading={heading}
                />

                <ToggleBtn
                    handleToggle={this.handleToggle}
                    visible={this.state.visible}
                />
            </>
        )
    }
}
