import { useEffect, useState } from 'react'
import './BoxGenerator.css'
import RangeInputGroup from './RangeInputGroup';
import ColorInputGroup from './ColorInputGroup';
import PopupBox from './PopupBox';
import CodeModalContent from './CodeModalContent';

export default function BoxGenerator({title}) {

    const [verticle, setVerticle] = useState(2);
    const [horizontal, setHorizontal] = useState(3);
    const [blurRadius, setBlurRadius] = useState(5);
    const [spreadRadius, setSpreadRadius] = useState(1);
    const [borderRadius, setBorderRadius] = useState(1);
    const [bgColor, setBgColor] = useState('#f1fd8f');
    const [shadowColor, setShadowColor] = useState('#000000');
    const [showPopup, setShowPopup] = useState(false);

    const boxShadow = `${horizontal}px ${verticle}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;

    return (
        <>
            <h2 className='component-title'>{title}</h2>
            <div className="shadow-generator">
                <div className='generator-div controller'>
                    <RangeInputGroup label='Horizontal' value={horizontal} setValue={setHorizontal} min={-100} />
                    <RangeInputGroup label='Vertical' value={verticle} setValue={setVerticle} min={-100} />
                    <RangeInputGroup label='Blur' value={blurRadius} setValue={setBlurRadius} />
                    <RangeInputGroup label='Spread' value={spreadRadius} setValue={setSpreadRadius} min={-100} />
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
                <div className='column-flex div-properties '>
                    <div className='generator-div'>
                        <RangeInputGroup label='Border Radius' value={borderRadius} setValue={setBorderRadius}
                        min={0} max={50} unit='%' />
                        <ColorInputGroup label='Background color' value={bgColor} setValue={setBgColor} />
                    </div>
                    <div className='generator-div get-code'>
                        <button className='btn' onClick={e => setShowPopup(true)}>Get code</button>
                    </div>
                </div>
            </div>
            { showPopup && 
                <PopupBox showHandler={setShowPopup}>
                    <CodeModalContent boxShadow={boxShadow} borderRadius={borderRadius} />
                </PopupBox>
            }

        </>
    )
}