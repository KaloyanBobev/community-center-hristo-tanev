import React, { Component } from 'react';


export default class Image extends Component {
    render() {
        return (
            <>
                {this.props.data.map((img) => {
                    return (
                        <div
                            className="image-cont"
                            key={img.sys.id}
                        >
                            <a
                                target="_blank"
                                rel="noreferrer"

                                href={img.fields.src}>
                                <img className="img"
                                    src={img.fields.src}
                                    alt={img.fields.name}
                                >

                                </img>

                            </a>
                            {this.props.isShow ? <span>{img.fields.name}</span> : ""}
                        </div>
                    )
                })}
            </>
        )
    }
}
