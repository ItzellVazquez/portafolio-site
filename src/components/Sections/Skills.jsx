import Carousel from "../Carousel"
import cssLogo from "../../assets/css.png"
import gitLogo from "../../assets/git.png"
import htmlLogo from "../../assets/html.png"
import jsLogo from "../../assets/js.png"
import nodeLogo from "../../assets/node.png"
import reactLogo from "../../assets/react.png"
import sassLogo from "../../assets/sass.png"
import typescriptLogo from "../../assets/typescript.png"
import vtexLogo from "../../assets/vtex.png"

const Skills = () => {

    return (
        <>
            <div id="skills" className="flex flex-col container skills-container m-auto mt-[50px] mb-[50px]">
                <div>
                    <p className="text-3xl mb-3 text-center">Skills</p>
                </div>
                <div>
                    <Carousel>
                        <img className="mx-auto" src={htmlLogo} alt="html"></img>           
                        <img className="mx-auto" src={cssLogo} alt="css"></img>
                        <img className="mx-auto" src={jsLogo} alt="js"></img>
                        <img className="mx-auto" src={reactLogo} alt="react"></img>
                        <img className="mx-auto" src={sassLogo} alt="sass"></img>
                        <img className="mx-auto" src={gitLogo} alt="git"></img>
                        <img className="mx-auto" src={typescriptLogo} alt="typescript"></img>
                        <img className="mx-auto" src={nodeLogo} alt="node"></img>
                        <img className="mx-auto" src={vtexLogo} alt="vtex"></img>                
                    </Carousel>
                </div>
            </div>
        </>

    )
}
export default Skills
