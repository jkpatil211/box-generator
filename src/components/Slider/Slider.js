import { useState } from "react";
import ImageData from "./ImageData";
import './Slider.css'

const Slider = ({infinite = true}) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        // setCurrentSlide(prev => (prev > 0) ? prev - 1 : ImageData.length - 1);
        setCurrentSlide(prev => {
            if(prev > 0) return prev - 1;
            if(infinite) return ImageData.length - 1;
            return prev;
        })
    }

    const nextSlide = () => {
        // setCurrentSlide(prev => (prev+1)%(ImageData.length))
        setCurrentSlide(prev => {
            if(prev < ImageData.length - 1) return prev + 1;
            if(infinite) return 0
            return ImageData.length - 1;
        });
    }

    return (
        <div className = "slider">
            <span className={"prev " + ((!infinite && currentSlide <= 0 ) ? "disable" : undefined)} onClick={prevSlide}> &lsaquo; </span>
            <div style={{position: "relative"}}>
                { ImageData.map(({id, title, url}, i) => {
                    return (
                        <div key={i} className="slider-container"
                            style={{display: (currentSlide !== i) && "none"}}>
                            <h2 className="title">{title}</h2>
                            <img src={url} alt={title} />
                        </div>
                    )
                })
                }
                <div className="pagination-dots">
                    {
                        ImageData.map((image, i) => (
                            <span key={i} className={currentSlide === i ? 'active' : undefined} onClick={() => setCurrentSlide(i)}></span>
                        ))
                    }
                </div>
               
            </div>
           
            <span className={"next " + ((!infinite && currentSlide >= ImageData.length - 1) ? "disable" : undefined) } onClick={nextSlide}> &rsaquo; </span>
        </div>
    )
}

export default Slider;