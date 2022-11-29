import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { cleaningForm, updateForm } from '../../redux/slices/form.js'
import { updateMovieId } from "../../redux/thunks/movies.js"
import { updateSerieId } from "../../redux/thunks/series.js"
import { updateCarouselId } from "../../redux/thunks/carousel.js"
import DivForm from "../DivForm/DivForm"



const Form = () => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form.data)

    console.log(form)

    useEffect(() => {
        return () => {
            dispatch(cleaningForm())
        }
    }, [dispatch])

    const handleChange = (e) => {
        let target = e.target.name
        let value = e.target.value
        dispatch(updateForm({ target, value }))
    }

    const handleClick = (e) => {
        //dispatchar accion que actualiza el documento
        //Si es peli {}
        console.log('hello handleclick')
        const { _id, __v, ...payload} = form
        console.log(payload)
        if (form.movieOrSerie === undefined) {
            !form.season ?
                //movie
                dispatch(updateMovieId({id: form._id, payload})) :
                //serie
                dispatch(updateSerieId({id: form._id, payload}))
        } else {
            //carousel
            dispatch(updateCarouselId({id: form._id, payload}))
        }
    }

    return (<div>
        <button onClick={handleClick}>Actualizar</button>
        {
            !Object.keys(form).length ?
                undefined :
                form.movieOrSerie === undefined ?
                    //PELICULA // SERIE
                    (<div>
                        <DivForm
                            errorMessage="Debes agregar un titulo"
                            initialValue={form.title}
                            label="Título"
                            name="title"
                            receiveState={handleChange}
                            type="text" />
                        {
                            form.season !== undefined &&
                            <DivForm
                                errorMessage=""
                                initialValue={form.season}
                                label="Temporada/Season"
                                name="season"
                                receiveState={handleChange}
                                type="number"
                            />
                        }
                        <DivForm
                            errorMessage="Debes agregar una descripcion"
                            initialValue={form.description}
                            label="Descripción/Sinopsis"
                            name="description"
                            receiveState={handleChange}
                            type="text" />
                        <DivForm
                            errorMessage="Agrega un Director"
                            initialValue={form.director}
                            label="Director"
                            name="director"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            arrayFromData={form.actors}
                            initialValue=""
                            label="Actores"
                            name="actors"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            arrayFromData={form.category}
                            initialValue=""
                            label="Categorías/Generos"
                            name="category"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            errorMessage="Agregá el link del banner"
                            img={form.link_img}
                            initialValue={form.link_img}
                            label="Imagen"
                            name="link_img"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            errorMessage="Agrega otra imagen"
                            img={form.link_img_larger}
                            initialValue={form.link_img_larger}
                            label="Imagen grande"
                            name="link_img_larger"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            errorMessage="Agregá un trailer... vago"
                            initialValue={form.link_trailer}
                            label="Trailer"
                            name="link_trailer"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            errorMessage="Debes agregar año de lanzamiento"
                            initialValue={form.release_year}
                            label="Año de estreno"
                            name="release_year"
                            receiveState={handleChange}
                            type="number"
                        />
                        <DivForm
                            errorMessage="Agregá un tipo de almacenamiento"
                            arrayFromData={form.type_storage}
                            initialValue=""
                            label="Tipo de almacenamiento"
                            name="type_storage"
                            receiveState={handleChange}
                            type="text"
                        />
                    </div>
                    ) :
                    //CAROUSEL
                    (<div>
                        <DivForm
                            errorMessage="Debes agregar un titulo"
                            initialValue={form.title}
                            label="Título"
                            name="title"
                            receiveState={handleChange}
                            type="text" />
                        <DivForm
                            errorMessage="Agregá el link del banner"
                            img={form.movieOrSerie}
                            initialValue={form.movieOrSerie}
                            label="Se visualiza en page de"
                            name="movieOrSerie"
                            placeholder='"serie" o "movie"'
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            errorMessage="Agregá el link del banner"
                            img={form.desktop_img}
                            initialValue={form.desktop_img}
                            label="Imagen de escritorio"
                            name="desktop_img"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            errorMessage="Agregá el link del banner"
                            img={form.phone_img}
                            initialValue={form.phone_img}
                            label="Imagen para smartphone"
                            name="phone_img"
                            receiveState={handleChange}
                            type="text"
                        />
                        <DivForm
                            errorMessage="Agregá el link del banner"
                            img={form.tablet_img}
                            initialValue={form.tablet_img}
                            label="Imagen para tablet"
                            name="tablet_img"
                            receiveState={handleChange}
                            type="text"
                        />
                    </div>)
        }
    </div>)
}

export default Form