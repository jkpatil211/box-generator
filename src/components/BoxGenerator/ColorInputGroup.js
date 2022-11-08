const ColorInputGroup = ({value, setValue, label}) => {
    return (
        <div className='input-group'>
            <label>{label}</label>
            <div className="row-flex color-panel">
                <input type="color"
                    onChange={e => setValue(e.target.value)} value={value} />
                <span>{value}</span>
            </div>
        </div>
    )
}

export default ColorInputGroup;