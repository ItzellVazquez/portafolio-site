import CardTransparent from "../CardTransparent"
const Hero = () => {
    return (
        <CardTransparent>
            <div className="flex flex-row justify-between items-center h-full">
                <div className="flex flex-col justify-center items-start">
                    <p className="text-6xl">Itzell Vazquez</p>
                    <p className="text-4xl text-[#35A9DE]">Front-end Developer</p>
                    <p className="text-3xl">VTEX IO & E-commerce</p>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <img className="h-full max-h-120" src="/src/assets/itzell.jpeg" alt="Itzell Vazquez"></img>
                </div>
            </div>
        </CardTransparent>
    )
}
export default Hero