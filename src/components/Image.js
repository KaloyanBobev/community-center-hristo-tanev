import React, { Component } from 'react';


export default class Image extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                {this.props.data.map((img) => {
                    return (
                        <a
                            target="_blank"
                            rel="noreferrer"
                            key={img.sys.id}
                            href={img.fields.src}>
                            <img className="img"
                                src={img.fields.src}
                                alt={img.fields.name}></img>
                        </a>
                    )
                })}
            </>
        )
    }
}
