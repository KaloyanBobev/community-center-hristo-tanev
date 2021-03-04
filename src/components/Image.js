import React, { Component } from 'react';

import imgData from '../data/imageData'

export default class Image extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        this.setState({
            data: imgData
        })
    }
    render() {
        return (
            <>
                <h1>Фото галерия</h1>
                {imgData.map((img) => {
                    return (
                        <a key={img.sys.id} href={img.fields.src}>
                            <img src={img.fields.src} alt={img.fields.name}></img>
                        </a>
                    )
                })}
            </>
        )
    }
}
