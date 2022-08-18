import CodeSnippet from "./CodeSnippet";

const CodeModalContent = ({boxShadow, borderRadius}) => {

    return (
        <div className="code">
            <h3 style={{marginTop: "0.5rem"}}>Copy below code</h3>
            
            <CodeSnippet label="Box Shadow" cssProperty="box-shadow" cssValue={boxShadow}/>
            <CodeSnippet label="Border" cssProperty="border-radius" cssValue={borderRadius+"%"} />
        </div>
    )
}

export default CodeModalContent;