import React from 'react';
import { ImArrowDown } from "react-icons/im";
import { ImArrowUp } from "react-icons/im";

export default function ToggleBtn({ handleToggle, visible }) {

    return (
        <button className="btn"
            onClick={handleToggle}>
            {visible ?
                <span>Покажи<ImArrowDown /> </span> :
                <span>Скрии<ImArrowUp /> </span>
            }
        </button>
    )

}
