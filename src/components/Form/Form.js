import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { cleaningForm, createForm, modifyDeleteArr, modifyFilterArr, modifyPushArr, resetMessage, updateForm } from '../../redux/slices/form.js'
import { createMovie, deleteMovieId, updateMovieId } from "../../redux/thunks/movies.js"
import { createSerie, deleteSerieId, updateSerieId } from "../../redux/thunks/series.js"
import { createCarousel, deleteCarouselId, updateCarouselId } from "../../redux/thunks/carousel.js"
import { fetchCategories } from '../../redux/thunks/categories.js'
// import { forLoop } from '../../helpers/forLoop.js'

import DashboardMenu from "../DashboardMenu/DashboardMenu.js"
import Dialog from "../Dialog/Dialog.js"
import DivForm from "../DivForm/DivForm"



const Form = () => {

    const categoriesRedux = useSelector(state => state.categories.data)
    const dispatch = useDispatch()
    const form = useSelector(state => state.form.data)
    const [queryParams] = useSearchParams()
    const message = useSelector(state => state.form.message)
    const navigate = useNavigate()
    const selected = queryParams.get('selected')
    const token = useSelector(state => state.user.token)

    useEffect(() => {
        if (selected) {
            //DISPATCHAR ACCIONES DEPENDIENDO DE SELECTED
            dispatch(createForm(selected))
        }
        return () => {
            dispatch(cleaningForm())
        }
    }, [dispatch, selected, queryParams])

    useEffect(() => {
        if (categoriesRedux.length === 0) {
            dispatch(fetchCategories())
        }
    }, [categoriesRedux, dispatch])

    const handleChange = (e) => {
        let target = e.target.name
        let value = e.target.value
        if(target === "link_trailer") {
            value = value.split('watch?v=').join('embed/')
        }
        if (target !== 'actors' && target !== 'category' && target !== 'type_storage') {
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
            console.log('checkbox:', checkbox)
            console.log('opt:', opt)
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
                dispatch(updateMovieId({ id: form._id, payload, token })) :
                //serie
                dispatch(updateSerieId({ id: form._id, payload, token }))
        } else {
            //carousel
            dispatch(updateCarouselId({ id: form._id, payload, token }))
        }
    }

    const handleClickDelete = (e) => {
        if (window.confirm(`Est??s seguro que quer??s eliminar ${form.title}?`)) {
            if (form.movieOrSerie !== undefined) {
                //carousel
                dispatch(deleteCarouselId({ id: form._id, token }))
            } else if (!form.season) {
                //movie
                dispatch(deleteMovieId({ id: form._id, token }))
            } else {
                //serie
                dispatch(deleteSerieId({ id: form._id, token }))
            }
        }
    }

    const handleClickCreate = (e) => {
        const { _id, __v, ...payload } = form
        if (form.movieOrSerie === undefined) {
            !form.season ?
                //movie
                dispatch(createMovie({ payload, token })) :
                //serie
                dispatch(createSerie({ payload, token }))
        } else {
            //carousel
            dispatch(createCarousel({ payload, token }))
        }
    }

    return (
        <div>
            <DashboardMenu />
            {console.log(form)}
            {
                message
                    ? <Dialog dispatcher={resetMessage} id={`dialog`} message={message} navigate={`/dashboard`} />
                    : undefined
            }
            {
                form._id === undefined
                    ? <button onClick={handleClickCreate}>Crear</button>
                    : <div>
                        <button onClick={() => navigate(-1)}>???</button>
                        <button onClick={handleClickDelete}>Eliminar</button>
                        <button onClick={handleClickUpdate}>Actualizar</button>
                    </div>
            }
            {
                !Object.keys(form).length
                    ? undefined
                    : form.movieOrSerie === undefined
                        ? //PELICULA - SERIE
                        (<div>
                            <DivForm
                                errorMessage="Debes agregar un titulo"
                                initialValue={form.title}
                                label="T??tulo"
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
                                label="Descripci??n/Sinopsis"
                                name="description"
                                receiveState={handleChange}
                                type="textArea" />
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
                                label="Categor??as/Generos"
                                name="category"
                                options={categoriesRedux}
                                type="checkbox"
                            />
                            <DivForm
                                errorMessage="Agreg?? el link del banner"
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
                                errorMessage="Agreg?? un trailer... vago"
                                initialValue={form.link_trailer}
                                label="Trailer"
                                name="link_trailer"
                                receiveState={handleChange}
                                type="text"
                            />
                            <DivForm
                                errorMessage="Debes agregar a??o de lanzamiento"
                                initialValue={form.release_year}
                                label="A??o de estreno"
                                name="release_year"
                                receiveState={handleChange}
                                type="number"
                            />
                            <DivForm
                                arrayFromData={form.type_storage}
                                handleArr={handleArr}
                                errorMessage="Agreg?? un tipo de almacenamiento"
                                initialValue=""
                                label="Tipo de almacenamiento"
                                name="type_storage"
                                type="checkbox"
                                options={["dvd", "pendrive"]}
                            />
                        </div>
                        ) : //CAROUSEL
                        (<div>
                            <DivForm
                                errorMessage="Debes agregar un titulo"
                                initialValue={form.title}
                                label="T??tulo"
                                name="title"
                                receiveState={handleChange}
                                type="text" />
                            <DivForm
                                errorMessage="Agreg?? el link del banner"
                                initialValue={form.movieOrSerie}
                                label="Se visualiza en page de"
                                name="movieOrSerie"
                                placeholder='"serie" o "movie"'
                                receiveState={handleChange}
                                type="text"
                            />
                            <DivForm
                                errorMessage="Agreg?? el link del banner"
                                img={form.desktop_img}
                                initialValue={form.desktop_img}
                                label="Imagen de escritorio"
                                name="desktop_img"
                                receiveState={handleChange}
                                type="text"
                            />
                            <DivForm
                                errorMessage="Agreg?? el link del banner"
                                img={form.phone_img}
                                initialValue={form.phone_img}
                                label="Imagen para smartphone"
                                name="phone_img"
                                receiveState={handleChange}
                                type="text"
                            />
                            <DivForm
                                errorMessage="Agreg?? el link del banner"
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