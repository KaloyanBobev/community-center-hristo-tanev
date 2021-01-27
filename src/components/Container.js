import React from 'react'

export default function Container({ className, visible, data, heading }) {
    return (
        <section className={visible
            ? "container"
            : "container show"}>
            <h1>{heading}</h1>
            <div className={className}>
                {data.map((item) => {
                    return (
                        <p key={item.sys.id}>
                            {item.fields.text}
                        </p>
                    )
                })}
            </div>
        </section>
    )
}
