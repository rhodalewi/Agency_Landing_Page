import { HeroData } from "../data/";
import { useState } from "react";

function Hero() {
    const [toggleNav, setToggleNav] = useState(false);
    return (
        <section className="HeroPage">
            <header>
                <img src={HeroData.logo} alt="logo" className="header_logo"/>

                <nav className={`navBar ${toggleNav ? 'open' : ''}`}>
                    <ul>
                        {HeroData.links.map((link) => (
                            <li key={link.id}> {link.title} </li>
                        ))}
                    </ul>
                </nav>

                <img src="/public/images/icon-hamburger.svg" alt="Menu" className='hamburger' onClick={() => setToggleNav(!toggleNav)} />
            </header>

            <div className="heroContent">
                <h1> {HeroData.content.text} </h1>
                <img src={HeroData.content.arrowDown} alt="" />
            </div>
        </section>
    )
}

export default Hero;