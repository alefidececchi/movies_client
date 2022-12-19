import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getToken } from '../../redux/thunks/user.js'
import DivForm from '../DivForm/DivForm.js'




const Login = () => {

    const [login, setLogin] = useState({ email: '', password: '' })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateLogin = useSelector(state => state.user.stateLogin)
    const token = useSelector(state => state.user.token)
    const id = useSelector(state => state.user.user)

    // useEffect(() => {
    //     console.log(login)
    // }, [login])

    useEffect(() => {
        if (stateLogin) {
            window.localStorage.setItem('user', JSON.stringify({
                token: token,
                stateLogin: stateLogin,
                id: id
            }))
            setLogin({ email: '', password: '' })
            navigate('/')
        }
    }, [id, navigate, stateLogin, token])

    const handleSubmit = (e) => {
        e.preventDefault()
        //dispatchar accion que envie login al backend
        dispatch(getToken(login))
    }

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <DivForm
                    initialValue=''
                    errorMessage="Debes escribir tu email"
                    label="E-mail: "
                    name="email"
                    placeholder='email'
                    receiveState={handleChange}
                    type="email"
                />
                <DivForm
                    errorMessage="Este campo no puede estar vacío"
                    initialValue=''
                    label="Contraseña: "
                    name="password"
                    receiveState={handleChange}
                    type="password"
                />
                <button>Iniciar sesion</button>
            </form>
        </div>
    )


}

export default Login;