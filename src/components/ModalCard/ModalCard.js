



const ModalCard = (props) => {


    return (
        <div>
            <div>
                <img src={props.img} alt={props.title} />
            </div>
            <div>
                <button onClick={props.handleModal}>x</button>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h3>Genero:</h3>
                {props.category && props.category.map(c => (<p key={props.title + c}>{c}</p>))}
                <h3>Director: {props.director}</h3>
                <h3>Actores: </h3>
                <ul>{props.actors && props.actors.map(a => (<li key={props.title + a}>{a}</li>))}</ul>
                <iframe width="420" height="315" src={props.trailer} title={props.title} />
            </div>
        </div>
    )

}

export default ModalCard