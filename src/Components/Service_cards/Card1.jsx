import { ServiceData } from "../../data";
import { useState, useEffect } from "react";

function Card1() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <div className="serviceCards card1">
            {ServiceData.Card1.map((service, index) => {

                if (service.type === "text") {
                    return (
                        <div
                            key={service.id}
                            className={`service ${index === 0 ? "reverse1" : ''} `}
                            style={{backgroundImage: isMobile ? `url(${service.bgMobileImg})` : `url(${service.bgDesktopImg})`}}
                        >
                            <h2>{service.heading}</h2>
                            <p>{service.paragraph}</p>

                            <div className="learn_more_container">
                                <div className="learn_more">
                                    <span className="link_background" style={{backgroundColor: service.borderBgColor && service.borderBgColor}}> </span>
                                    <a href="#" className="linkText">{ service.linkText }</a>
                                </div>
                            </div>
                            
                        </div>
                    )
                } else if (service.type === "image") {
                    return (
                        <div
                        key={service.id}
                        className= {`service image_section ${index === 1 ? "reverse2" : "" }`}
            
                        style={{backgroundImage: isMobile ? `url(${service.bgMobileImg})` : `url(${service.bgDesktopImg})`}}
                        >

                        </div>
                    )
                }
           })}
        </div>
    )
};

export default Card1;