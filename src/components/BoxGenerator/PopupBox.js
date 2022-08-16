const PopupBox = ({showHandler, children}) => {
    return (
        <>
            <div className="overlay" onClick={e => showHandler(false)}></div>
            <div className="generator-div popup">
                <span className="close-popup" onClick={e => showHandler(false)}>+</span>
                {children}
            </div>
        </>
    )
}

export default PopupBox;

