import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

import { cleaningForm, createForm, modifyDeleteArr, modifyFilterArr, modifyPushArr, resetMessage, updateForm } from '../../redux/slices/form.js'
import { createMovie, updateMovieId } from "../../redux/thunks/movies.js"
import { createSerie, updateSerieId } from "../../redux/thunks/series.js"
import { createCarousel, updateCarouselId } from "../../redux/thunks/carousel.js"
import DivForm from "../DivForm/DivForm"
import Dialog from "../Dialog/Dialog.js"



const Form = () => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form.data)
    const [queryParams] = useSearchParams()
    const message = useSelector(state => state.form.message)

    console.log(form)

    useEffect(() => {
        if (queryParams.get('selected')) {
            //DISPATCHAR ACCIONES DEPENDIENDO DE SELECTED
            dispatch(createForm(queryParams.get('selected')))
        }
        return () => {
            dispatch(cleaningForm())
        }
    }, [dispatch, queryParams])

    const handleChange = (e) => {
        let target = e.target.name
        let value = e.target.value
        if (target !== 'actors' || target !== 'category' || target !== 'type_storage') {
            dispatch(updateForm({ target, value }))
        }
    }

    const handleArr = ({ checkbox, i, input, target }) => {
        if (input !== undefined) {
            //dispatchar accion que pushea string en el array
            dispatch(modifyPushArr({ target, input }))
        } else if (i !== undefined) {
            //dispatcha accion que eliminar elemento clickeado
            dispatch(modifyDeleteArr({ target, i }))
        } else if (checkbox !== undefined) {
            //dispatchar accion
            const opt = Object.keys(checkbox)[0]
            console.log('checkbox', checkbox)
            if (checkbox[opt]) {
                dispatch(modifyPushArr({ target, input: opt }))
            } else {
                dispatch(modifyFilterArr({ target, opt }))
            }
        }
    }

    const handleClickUpdate = (e) => {
        const { _id, __v, ...payload } = form
        if (form.movieOrSerie === undefined) {
            !form.season ?
                //movie
                dispatch(updateMovieId({ id: form._id, payload })) :
                //serie
                dispatch(updateSerieId({ id: form._id, payload }))
        } else {
            //carousel
            dispatch(updateCarouselId({ id: form._id, payload }))
        }
    }
    const handleClickCreate = (e) => {
        const { _id, __v, ...payload } = form
        console.log(payload)
        if (form.movieOrSerie === undefined) {
            !form.season ?
                //movie
                dispatch(createMovie(payload)) :
                //serie
                dispatch(createSerie(payload))
        } else {
            //carousel
            dispatch(createCarousel(payload))
        }
    }

    return (
        <div>
            {message !== '' ?
                <Dialog dispatcher={resetMessage} id={`dialog`} message={message} /> : undefined}
            {
                form._id === undefined ?
                    <button onClick={handleClickCreate}>Crear</button> :
                    <button onClick={handleClickUpdate}>Actualizar</button>
            }
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
                                handleArr={handleArr}
                                initialValue=""
                                label="Actores"
                                name="actors"
                                type="text"
                            />
                            <DivForm
                                arrayFromData={form.category}
                                handleArr={handleArr}
                                initialValue=""
                                label="Categorías/Generos"
                                name="category"
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
                                arrayFromData={form.type_storage}
                                handleArr={handleArr}
                                errorMessage="Agregá un tipo de almacenamiento"
                                initialValue=""
                                label="Tipo de almacenamiento"
                                name="type_storage"
                                type="checkbox"
                                options={["dvd", "pendrive"]}
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
        </div>
    )
}

export default Form