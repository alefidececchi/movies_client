


const DivArr = (props) => {

    let { arr } = props

    return (<div>
        {
            props.type === 'checkbox'
                ? !!props.options && props.options.map(opt => {
                    return (
                        <div key={opt}>
                            <input
                                checked={arr.includes(opt)}
                                name={opt}
                                onChange={(e) => props.handleArr({ target: props.father, checkbox: { [opt]: e.target.checked } })}
                                type='checkbox'
                                value={opt}
                            />
                            <label>{opt}</label>
                        </div>
                    )
                })
                : !!arr.length && arr.map((current, i) => {
                    return (
                        <div key={current}>{current} <span onClick={() => props.handleArr({ target: props.father, i })} >| x</span></div>
                    )
                })
        }
    </div>)

}


export default DivArr