import { NavLink } from "react-router-dom"

const OpcoesMenu = ({Logo,texto,link}) =>{

    const Icon = Logo

    return(
        <li className="flex gap-[15px]">
            <NavLink to={link} className={({isActive})=>`${isActive?"text-white":""} text-gray  flex gap-[15px] hover:cursor-pointer hover:text-white transition duration-1s`}><Icon stroke="currentColor" fill="none" className="h-[24px] w-[24px]" />{texto}</NavLink>
        </li>
    )
}

export default OpcoesMenu