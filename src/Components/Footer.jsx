import { HeroData, FooterData } from "../data";

function Footer() {
    const FooterLinks = HeroData.links.filter(link => link.title !== "Contacts")
    return (
        <section className="footer">
            <img src={HeroData.logo} alt="Logo" className="footer_logo" />
            <div className="footer_links">  
                {FooterLinks.map(link => (
                    <a href={link.href} key={link.id}> {link.title}  </a>
                ))}
            </div>

            <div className="socialLinks">
                {FooterData.map(social => (
                    <a href={social.href} key={social.id}>
                        <img src={social.socialIcon} alt={social.alt} />
                    </a>
                ))}
            </div>

            <div style={{display: "none"}}>
                <p style={{ fontWeight: "500" }}> Challenge by
                    <a
                        href="https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef"
                        style={{ color: "blueviolet", textDecoration: "none" }}> Frontend Mentor
                    </a> Coded by
                    <a
                        href="https://www.frontendmentor.io/profile/rhodalewi"
                        style={{ color: "blueviolet", textDecoration: "none" }}> Alewi Rhoda
                    </a>
                </p>
            </div>
       </section>
   )
};

export default Footer;