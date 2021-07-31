import { useContext } from 'react'
import Context from '../../context/nodeContext'
import Style from './add.module.css'

function Add() {

    const store = useContext(Context)

    const handleKeyPress = (e) => {

        if (e.code === "Enter") {
            let newNote = store.note
            newNote.push({note: e.target.value})
            store.setNote([...newNote])
            console.log(newNote)
            e.target.value = ""
        }
    }

    return(
        <div className={Style.add}>
            <input onKeyPress={handleKeyPress} className={Style.input} placeholder="Write a note"/>
        </div>
    )
}

export default Add