import React, { Component } from 'react';


export default class Image extends Component {
    render() {
        return (
            <>
                {this.props.data.map((img) => {
                    return (
                        <div id="image-cont">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                key={img.sys.id}
                                href={img.fields.src}>
                                <img className="img"
                                    src={img.fields.src}
                                    alt={img.fields.name}></img>

                            </a>
                            {this.props.isShow ? <span>{img.fields.name}</span> : ""}
                        </div>
                    )
                })}
            </>
        )
    }
}
