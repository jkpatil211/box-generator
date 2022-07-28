
const RangeInputGroup = ({label, value, setValue, min = 0, max = 100, unit = "px"}) => {
    return (
        <div className='input-group'>
            <div className='row-flex label-group'>
                <label>{label}</label>
                <span>
                    <input type='number' value={value} onChange={e => setValue(e.target.value)} />
                    &nbsp;{unit}
                </span>
            </div>
            <input type="range" min={min} max={max} value={value}
                onChange={e => setValue(e.target.value)} />
        </div>
    )
}

export default RangeInputGroup;