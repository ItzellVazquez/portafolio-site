
const Hero = () => {
    return (
        
        <div className="hero-section flex flex-row justify-center items-center gap-8">   
            <div className="container flex flex-row justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-2">
                <p className="text-6xl">Itzell Vazquez</p>
                <p className="text-4xl text-[#35A9DE]">Front-end Developer</p>
                <p className="text-3xl">VTEX IO & E-commerce</p>
                </div>
                <div className="flex justify-center items-center">
                <img 
                    // className="max-h-[500px] " 
                    src="/src/assets/itz.png" 
                    alt="Itzell Vazquez" 
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero