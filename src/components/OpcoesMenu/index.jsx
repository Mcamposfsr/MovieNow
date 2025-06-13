const OpcoesMenu = ({Logo,texto}) =>{

    const Icon = Logo

    return(
        <li className="flex gap-[15px]">
            <p className={`text-gray  flex gap-[15px] hover:cursor-pointer hover:text-white transition duration-1s`}><Icon stroke="currentColor" fill="none" className="h-[24px] w-[24px]" />{texto}</p>
        </li>
    )
}

export default OpcoesMenu