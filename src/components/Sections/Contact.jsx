import { FaFacebookF, FaInstagram, FaLinkedinIn,FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";
import CardBlack from "../CardBlack"
const Contact = () => {
    return (
       <CardBlack>
            <div id="contact" className=" grid grid-flow-row">
                <p>Contact</p>
                <div className="flex flex-col justify-content">
                    <a href="https://www.facebook.com/itzellguadalupe.vazquezgutierrez?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/itzell_vzq/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/itzell-guadalupe-vazquez-gutierrez" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://wa.me/3122242432" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:itzell.vazquez.gutierrez@gmail.com">
                        <FaEnvelope />
                    </a>
                    <a href="tel:+523122242432">
                        <FaPhone />
                    </a>
                </div>
            </div>
       </CardBlack>
    )
}
export default Contact