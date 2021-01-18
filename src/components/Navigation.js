import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation({ nav }) {

    return (
        <>
            {nav.map((data, i) => {
                return <Link key={i} to={data.to}>{data.text}</Link>
            })}
        </>
    )

}
