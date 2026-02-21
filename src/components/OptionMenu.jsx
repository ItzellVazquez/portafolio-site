const OptionMenu = (props) => {

    const {linkTo, label} = props

    return (
        <a className="px-8 hover:text-[#35A9DE] hover:underline hover:underline-offset-6 text-lg transition duration-500 ease-in-out"
            href={`#${linkTo}`}
        >
            {label}
        </a>
    )
}
export default OptionMenu