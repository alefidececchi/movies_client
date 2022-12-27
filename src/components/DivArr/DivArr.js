


const DivArr = (props) => {

    let { arr } = props

    return (<div>
        {
            props.type === "options"
                ? (
                    <div>
                        <select name="option" onChange={(e) => props.handleArr({ target: props.father, options: e.target.value })}>
                            {
                                !!props.options && props.options.map((opt, i) => {
                                    return (
                                        <option value={opt} key={opt + i}>{opt}</option>
                                    )
                                })}
                        </select>
                    </div>
                )
                : undefined
        }
        {
            props.type === 'checkbox'
                ? !!props.options && props.options.map(opt => {
                    return (
                        <div key={opt}>
                            <label>{opt}</label>
                            <input
                                checked={arr.includes(opt)}
                                name={opt}
                                onChange={(e) => props.handleArr({ target: props.father, checkbox: { [opt]: e.target.checked } })}
                                type='checkbox'
                                value={opt}
                            />
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