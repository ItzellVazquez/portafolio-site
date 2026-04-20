
import Carousel from "../Carousel"

const Skills = () => {

    return (
        <>
            <div id="skills" className="flex flex-col container skills-container m-auto mt-[50px] mb-[50px]">
                <div>
                    <p className="text-3xl mb-3 text-center">Skills</p>
                </div>
                <div>
                    <Carousel>
                        <img className="mx-auto" src="/src/assets/html.png" alt="html"></img>           
                        <img className="mx-auto" src="/src/assets/css.png" alt="css"></img>
                        <img className="mx-auto" src="/src/assets/js.png" alt="js"></img>
                        <img className="mx-auto" src="/src/assets/react.png" alt="react"></img>
                        <img className="mx-auto" src="/src/assets/sass.png" alt="sass"></img>
                        <img className="mx-auto" src="/src/assets/git.png" alt="git"></img>
                        <img className="mx-auto" src="/src/assets/typescript.png" alt="typescript"></img>
                        <img className="mx-auto" src="/src/assets/node.png" alt="node"></img>
                        <img className="mx-auto" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663235196769/fTKxAqjduaiWtPqs.png" alt="vtex"></img>                
                    </Carousel>
                </div>
            </div>
        </>

    )
}
export default Skills