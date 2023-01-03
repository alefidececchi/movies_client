



const Whatsapp = () => {


    return (
        <div>
            <a aria-label="Chat on WhatsApp"
                href={`https://wa.me/${process.env.REACT_APP_PHONE}`}
                rel="noreferrer"
                target="_blank">
                <img alt="Chat on WhatsApp"
                    src="https://www.pngplay.com/wp-content/uploads/8/Whatsapp-PNG-Images-HD.png" />
            </a>
        </div>
    )

}

export default Whatsapp