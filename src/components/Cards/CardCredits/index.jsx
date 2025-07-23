import FavButton from "@/components/Favbutton?react"
import { forwardRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import  slugfy  from "@/utils/slugfy";



const CardCredits = forwardRef((props, ref) => {

    const nav = useNavigate()
    const { classNameCard, dados } = props

    // console.log(dados)
  
    // ID USADO PARA CONFIGURAR FAVORITOS.
    // const Id = useRef(id)

    const cardInfo = useRef(null)

    const toggleOpacity = (element) => {
        element.current.classList.toggle("opacity-0")
    }

    // const abrirInfoPage = ()=>{
    //     nav(`/info/${dadosCard.type}/${dadosCard.id}/${slugfy(dadosCard.name)}`)
    // }

    if(!dados){
        return null
    }


    return (
        <div  onMouseEnter={() => { toggleOpacity(cardInfo) }} onMouseLeave={() => { toggleOpacity(cardInfo) }} ref={ref} style={{ backgroundImage: `url(${dados.fotoPerfil})`}} className={`${classNameCard} w-[220px] h-[310px] bg-center bg-cover bg-no-repeat shrink-0 cursor-pointer hover:scale-105 rounded-[20px] relative flex items-end overflow-hidden transition duration-200 card`}>
            <div ref={cardInfo} className="w-full px-[20px] bg-[image:var(--color-whiteGlass)] h-[86px] flex flex-col justify-center gap-[10px] transition duration-200">
                <h3 className="font-semibold flex items-start text-[18px] leading-6 h-[42px] line-clamp-2">{dados.nome}</h3>
                <p className="h-[30px] text-[14px]">{`${dados.personagem || ""}`}</p>
            </div>

        </div>
    )
})

export default CardCredits