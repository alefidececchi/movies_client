import { useState } from 'react'

import DivForm from '../DivForm/DivForm.js'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID


const SignIn = () => {

    const [input, setInput] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        console.log(input)
        e.preventDefault()
    }

    const comparePasswords = (event, err) => {
        // if (!!err.length) {
        //     setError("")
        // } else 
        // event.target.name !== "password2"
        //     ? undefined
        //     : input.password !== event.target.value ? setError("Las contraseñas deben ser iguales")
        //         : setError("")

        // if (event.target.name === "password2") {
        //     if (input.password !== event.target.value) {
        //         setError("Las contraseñas deben ser iguales")
        //     } else {
        //         setError("")
        //     }
        // }
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <DivForm receiveState={handleChange} errorMessage="Escribe un nombre" htmlFor="name" initialValue="" label="Nombre: " name="name" type="text"></DivForm>
            <DivForm receiveState={handleChange} errorMessage="Escribe tu apellido" htmlFor="lastName" initialValue="" label="Apellido: " name="lastName" type="text"></DivForm>
            <DivForm receiveState={handleChange} errorMessage="Escribe un mail válido" htmlFor="email" initialValue="" label="E-mail: " name="email" type="email"></DivForm>
            <DivForm compare={comparePasswords} receiveState={handleChange} errorMessage="Este campo no puede estar vacío" htmlFor="password" initialValue="" label="Contraseña: " name="password" type="password"></DivForm>
            <DivForm compare={comparePasswords} receiveState={handleChange} errorMessage="Este campo no puede estar vacío" htmlFor="password2" initialValue="" label="Una vez mas: " name="password2" type="password"></DivForm>
            {error}
            <div>
                <input type="submit" value="hecho" />
            </div>
        </form>
        <div>
            <div id="g_id_onload"
                data-client_id={CLIENT_ID}
                data-login_uri="http://localhost:3001/signin"
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