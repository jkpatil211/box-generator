import { useRef, useState } from 'react';
import copy from '../../icons/copy.png';
import check from '../../icons/check.png';

const CodeSnippet = ({label, cssProperty, cssValue }) => {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const DELAY_TIME = 3000;

    const copyCode = () => {
        if(copied) return;
        navigator.clipboard.writeText(codeRef.current.innerText);
        setCopied(true);
        let delayId = setTimeout(() => {
            setCopied(false);
            clearTimeout(delayId)
        }, DELAY_TIME);
    }

    return (
        <div className="codeSnippet">
            <h4>{label}</h4>
            <div className='relative'>
                <span className='copyIcon absolute' onClick={copyCode}>
                    <img src={ copied ? check : copy} />
                </span>
                <pre ref={codeRef}>
                    <span className="styleAttribute">{cssProperty}: </span>{cssValue}<span className="endline">;</span><br />
                </pre>
            </div>
            
        </div>
    )
}

export default CodeSnippet;