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

        return (
            <>
                <section className="alba-container">
                    <h1>Васа РУСЕВА, галерия „Алба-Авитохол“ в Стара Загора: Редовните ни срещи продължават</h1>
                    <Container data={this.state.data} />

                </section>
                <ToggleBtn
                    handleToggle={this.handleToggle}
                    visible={this.state.visible}
                />
            </>
        )
    }
}
