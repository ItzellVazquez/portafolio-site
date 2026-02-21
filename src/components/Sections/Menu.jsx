import OptionMenu from "../OptionMenu"
const Menu = () => {

    const menuItems = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "vtexProjects", label: "Vtex Projects" },
    { id: "reactProjects", label: "React Projects" },
    { id: "contact", label: "Contact" }
    ]

    return (
        <div className='flex flex-row'>
            {
                menuItems.map(item => (
                    <OptionMenu 
                        key={item.id}
                        linkTo={item.id}
                        label={item.label}
                    />
                ))
            }
        </div>
    )
} 
export default Menu