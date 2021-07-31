import Style from './card.module.css'
import Item from "../item/item"
import Add from "../add/add"
import { useContext } from 'react'
import Context from '../../context/nodeContext'

function Card() {

    const store = useContext(Context)

    console.log(store.note)

    return(
        <div className={Style.card}>
            <div className={Style.content}>
                <Add/>
                {
                    store.note.map((value, index) => {
                        return <Item key={index} note={value.note} itemIndex={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default Card