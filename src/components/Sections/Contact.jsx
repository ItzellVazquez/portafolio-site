import { FaFacebookF, FaInstagram, FaLinkedinIn,FaWhatsapp, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa6";
const Contact = () => {
    return (
            <div id="contact" className="contact-container m-auto mt-[50px] mb-[50px]">
                <div className="flex flex-row justify-around container m-auto h-16 items-center">
                    <a href="https://www.facebook.com/itzellguadalupe.vazquezgutierrez?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={30}/>
                    </a>
                    <a href="https://www.instagram.com/itzell_vzq/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/itzell-guadalupe-vazquez-gutierrez" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={30} />
                    </a>
                    <a href="https://wa.me/3122242432" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} />
                    </a>
                    <a href="mailto:itzell.vazquez.gutierrez@gmail.com">
                        <FaEnvelope size={30} />
                    </a>
                    <a href="tel:+523122242432">
                        <FaPhone size={30} />
                    </a>
                    <a href="https://github.com/ItzellVazquez" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
    )
}
export default Contact