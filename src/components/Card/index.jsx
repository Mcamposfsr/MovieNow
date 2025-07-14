import FavButton from "@/components/Favbutton?react"
import { forwardRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/utils/slugfy";
import NormalizeTmdbData from "@/utils/normalizeTmdbData";



const Card = forwardRef((props, ref) => {

    const nav = useNavigate()
    const { classNameCard, info, size } = props

    // CLASSE QUE LIDA COM MANIPULAÇÃO E PADRONIZAÇÃO DOS DADOS.
    const dados = NormalizeTmdbData(info)

    // DEFINIR TAMANHO DO CARD
    const tamanhoCard = {
        P: {
            h: "320px",
            w: "230px"
        },
        G: {
            h: "280px",
            w: "350px"
        }

    }
    // ID USADO PARA CONFIGURAR FAVORITOS.
    // const Id = useRef(id)

    const cardInfo = useRef(null)

    const toggleOpacity = (element) => {
        element.current.classList.toggle("opacity-0")
    }

    const abrirInfoPage = ()=>{
        nav(`Info/${dados.getId()}/${slugify(name)}`)
    }


    return (
        <div onClick={() => abrirInfoPage()} onMouseEnter={() => { toggleOpacity(cardInfo) }} onMouseLeave={() => { toggleOpacity(cardInfo) }} ref={ref} style={{ backgroundImage: `url(${dados.getImg("M")})`, width:tamanhoCard[size].w, height:tamanhoCard[size].h }} className={`${classNameCard} bg-start bg-cover bg-no-repeat shrink-0 cursor-pointer hover:scale-105 rounded-[20px] relative flex items-end overflow-hidden transition duration-200 card`}>
            <FavButton className="absolute top-5 right-5" size="P" />
            <div ref={cardInfo} className="w-full px-[20px] bg-[image:var(--color-whiteGlass)] h-[86px] flex flex-col justify-center gap-[10px] transition duration-200">
                <h3 className="font-semibold text-[18px] leading-6 h-[48px] line-clamp-2">{dados.getName()}</h3>
                <p className="h-[24px] text-[14px]">{`Lançamento | ${dados.getDate()}`}</p>
            </div>

        </div>
    )
})

export default Card