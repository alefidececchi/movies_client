

const ItemCard = (props) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.link_img} alt={props.title} />
            <p>{props.description}</p>
            <h3>Genero:</h3>
            {props.category && props.category.map(c => (<p key={props.title + c}>{c}</p>))}
            <h3>Director: {props.director}</h3>
            <h3>Actores: </h3>
            <ul>{props.actors && props.actors.map(a => (<li key={props.title + a}>{a}</li>))}</ul>
        </div>
    )

}

export default ItemCard