import React from 'react'

export default function Container({ visible, data, heading }) {
    return (
        <section className={visible
            ? "container"
            : "container show"}>
            <h1>{heading}</h1>
            {data.map((item) => {
                return (
                    <p key={item.sys.id}>
                        {item.fields.text}
                    </p>
                )
            })}
        </section>
    )
}
