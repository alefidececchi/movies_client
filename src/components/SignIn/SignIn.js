import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { signin } from '../../redux/thunks/user.js'
import { resetMessageSignin } from '../../redux/slices/user.js'
import Dialog from '../Dialog/Dialog.js'
import DivForm from '../DivForm/DivForm.js'


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

const SignIn = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
    })
    const message = useSelector(state => state.user.message)
    const stateSignin = useSelector(state => state.user.stateSignin)

    useEffect(() => {
        return setInput({
            name: '',
            lastName: '',
            email: '',
            password: '',
        })
    },[setInput])

    const handleSubmit = (e) => {
        console.log(input)
        e.preventDefault()
        //DISPATCHAR ACCION QUE ENVIE FORMULARIO A /SIGNIN POST
        dispatch(signin(input))
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <DivForm receiveState={handleChange} errorMessage="Escribe tu nombre" initialValue="" label="Nombre: " name="name" type="text"></DivForm>
            <DivForm receiveState={handleChange} errorMessage="Escribe tu apellido" initialValue="" label="Apellido: " name="lastName" type="text"></DivForm>
            <DivForm receiveState={handleChange} errorMessage="Escribe un mail válido" initialValue="" label="E-mail: " name="email" type="email"></DivForm>
            <DivForm receiveState={handleChange} errorMessage="La contraseña debe tener al menos 6 caracteres" initialValue="" label="Contraseña: " name="password" type="password"></DivForm>
            <div>
                {
                    input.email.length && input.lastName.length && input.name.length && 6 <= input.password.length
                        ? <button>Listo</button>
                        : undefined
                }
            </div>
        </form>
        {
            !stateSignin && !message
                ? undefined
                : <Dialog dispatcher={resetMessageSignin} id='signinMessage' message={message} navigate="/" />
        }
        <div>
            <div id="g_id_onload"
                data-client_id={CLIENT_ID}
                data-login_uri="http://localhost:3000"
            // data-auto_prompt="false"
            >
            </div>
            <div className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
        </div>
    </div>
    )
}

export default SignIn;