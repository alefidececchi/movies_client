// const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_ID = "498842285889-f2vvt30uncpdetbv1b647o61je3vu69s.apps.googleusercontent.com"
const SignIn = () => {

    return (<>
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
    </>)
}

export default SignIn;