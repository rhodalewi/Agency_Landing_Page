import { ServiceData } from "../../data";
import { useState, useEffect } from "react";

export default function Card3() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, []);


    return (
        <div className="serviceCards card3" >
            {ServiceData.Card3.map(service => {
                 const serviceStyle = {
                    backgroundColor: service.BgColor || "white",
                    backgroundImage: isMobile ? `url(${service.bgMobileImg})` : `url(${service.bgDesktopImg})`,
                    color: service.textColor || "black",
                };

                const linkBgColor = {
                    backgroundColor: service.borderBgColor && service.borderBgColor
                };

                if (service.type === "text") {
                    return (
                        <div
                            key={service.id}
                            className="service"
                            style={serviceStyle}
                        >
                            <h2>{service.heading}</h2>
                            <p>{service.paragraph}</p>

                            <div className="learn_more">
                                <span
                                    className="link_background"
                                    style={linkBgColor}
                                > </span>
                                <a href="#" className="linkText">{ service.linkText }</a>
                            </div>
                        </div>
                    )
                } else if (service.type === "image") {
                    return (
                        <div
                            key={service.id}
                            className="service image_section "
                            style={serviceStyle}
                        >

                        </div>
                    )
                }
            })}
        </div>
    )
}