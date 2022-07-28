import { useEffect, useState } from 'react'
import './BoxShadowGenerator.css'
import RangeInputGroup from './RangeInputGroup';
import ColorInputGroup from './ColorInputGroup';

export default function BoxShadowGenerator() {

    const [verticle, setVerticle] = useState(2);
    const [horizontal, setHorizontal] = useState(3);
    const [blurRadius, setBlurRadius] = useState(5);
    const [spreadRadius, setSpreadRadius] = useState(1);
    const [borderRadius, setBorderRadius] = useState(1);
    const [bgColor, setBgColor] = useState('#f1fd8f');
    const [shadowColor, setShadowColor] = useState('#000000');

    const [boxShadow, setBoxShadow] = useState(() => `${horizontal}px ${verticle}px ${blurRadius}px ${spreadRadius}px #000000`)

    useEffect(() => {
        setBoxShadow(`${horizontal}px ${verticle}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`)
    }, [horizontal, verticle, blurRadius, spreadRadius, shadowColor])
    

    return (
        <div className="shadow-generator">
            <div className='generator-div controller'>
                <RangeInputGroup label='Horizontal' value={horizontal} setValue={setHorizontal} min={-100} />
                <RangeInputGroup label='Vertical' value={verticle} setValue={setVerticle} min={-100} />
                <RangeInputGroup label='Blur' value={blurRadius} setValue={setBlurRadius} />
                <RangeInputGroup label='Spread' value={spreadRadius} setValue={setSpreadRadius} />
                <ColorInputGroup label='Shadow Color' value={shadowColor} setValue={setShadowColor} />
            </div>
            <div className='generator-div display'>
                <div className='model' style={{
                    boxShadow: boxShadow, 
                    borderRadius: `${borderRadius}%`, 
                    backgroundColor: bgColor,
                    }}>
                </div>
            </div>
            <div className='generator-div div-properties'>
                <RangeInputGroup label='Border Radius' value={borderRadius} setValue={setBorderRadius}
                 min={0} max={50} unit='%' />
                 <ColorInputGroup label='Background color' value={bgColor} setValue={setBgColor} />
               
            </div>
        </div>
    )
}