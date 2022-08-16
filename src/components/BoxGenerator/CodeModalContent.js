import { useRef, useState } from "react";

const COPY = "Copy";
const COPIED = "Copied!";

const CodeModalContent = ({boxShadow, borderRadius}) => {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        console.log('clicked')
        navigator.clipboard.writeText(codeRef.current.innerText);
        setCopied(true)
    }

    return (
        <div className="code">
            <h3 style={{marginTop: "0.5rem"}}>Copy below code</h3>
            <pre ref={codeRef}>
                <span className="styleAttribute">box-shadow: </span>{boxShadow}<span className="endline">;</span><br />
                <span className="styleAttribute">border-radius: </span>{borderRadius}%<span className="endline">;</span>
            </pre>
            <button className={"btn " + (copied ? "btn-disabled" : "")} disabled={copied} onClick={copyCode}>{copied ? COPIED : COPY}</button>
        </div>
    )
}

export default CodeModalContent;