import { useState } from "react"

import ModalCard from "../ModalCard/ModalCard"


const ItemCard = (props) => {

    const [showModal, setModal] = useState(false)
    const handleClick = () => {
        setModal(!showModal)
    }

    return (
        <div>
            {
                showModal
                    ? <ModalCard
                        actors={props.actors}
                        category={props.category}
                        description={props.description}
                        director={props.director}
                        handleModal={handleClick}
                        img={props.img}
                        key={props._id}
                        season={props.season}
                        title={props.title}
                        trailer={props.trailer}
                    />
                    : undefined
            }
            <img src={props.img} alt={props.title} />
            <button onClick={handleClick}>ver más...</button>
        </div>
    )

}

export default ItemCard