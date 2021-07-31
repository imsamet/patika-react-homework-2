import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import cn from 'classnames'
import Style from './item.module.css'
import Context from '../../context/nodeContext'

function Item({note}) {

    const inputRef = useRef()
    const [isActive, setActive] = useState(true)

    const store = useContext(Context)

    const InputClick = () => {
        setActive(!inputRef.current.checked)
    }

    const CloseClick = () => {
        let newNote = []

        store.note.map((value) => {
            value.note != note && newNote.push(value)
        })

        store.setNote(newNote)
    }

    return(
        <div className={Style.item}>
            <input className={Style.input} type="checkbox" onClick={InputClick} ref={inputRef}/>
            <span className={Style.checkbox}>
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.727 15.784l-4.295-4.075L3 13.067 8.727 18.5 21 6.858 19.568 5.5 8.728 15.784z"
                        fill="currentColor"
                    />
                </svg>
            </span>
            <h1 className={cn(Style.note, isActive && Style.active)}>{note}</h1>
            <span className={Style.close} onClick={CloseClick}>×</span>
        </div>
    )
}

export default Item