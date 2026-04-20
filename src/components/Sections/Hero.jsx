
import profileImage from "../../assets/itz.png"

const Hero = () => {
    return (
        
        <div className="hero-section flex flex-row justify-center items-center gap-8">   
            <div className="container flex lg:flex-row flex-col  justify-between items-center">
                <div className="flex flex-col justify-center lg:items-start gap-2 mt-5">
                <p className="text-6xl lg:text-start text-center">Itzell Vazquez</p>
                <p className="text-4xl text-[#35A9DE] lg:text-start text-center">Front-end Developer</p>
                <p className="text-3xl lg:text-start text-center">VTEX IO & E-commerce</p>
                </div>
                <div className="flex justify-center items-center">
                <img 
                    // className="max-h-[500px] " 
                    src={profileImage} 
                    alt="Itzell Vazquez" 
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero
