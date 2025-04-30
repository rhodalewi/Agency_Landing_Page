import { ServiceData } from "../../data";
import { useState, useEffect } from "react";

export default function Card2() {
    const [resize, setResize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setResize(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="serviceCards card2">
            {ServiceData.Card2.map(service => {
                if (service.type === "text") {
                    return (
                        <div
                            key={service.id}
                            className="service"
                            style={{backgroundImage: resize ? `url(${service.bgDesktopImg})` : `url(${service.bgMobileImg})`}}
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
                            className="service image_section "
                            style={{backgroundImage: resize ? `url(${service.bgMobileImg})` : `url(${service.bgDesktopImg})`}}
                        >

                        </div>
                    )
                }
            })}
        </div>
    )
};