const ColorInputGroup = ({value, setValue, label}) => {
    return (
        <div className='input-group'>
            <label>{label}</label>
            <span className='value'>{value}</span>
            <input type="color"
                onChange={e => setValue(e.target.value)} value={value} />
        </div>
    )
}

export default ColorInputGroup;