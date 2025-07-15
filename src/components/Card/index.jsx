import FavButton from "@/components/Favbutton?react"
import { forwardRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/utils/slugfy";
import NormalizeTmdbData from "@/utils/normalizeTmdbData";



const Card = forwardRef((props, ref) => {

    const nav = useNavigate()
    const { classNameCard, dados, size } = props

    // RECEBER DADOS JÁ PADRONIZADOS E MANIPULADOS.
    const dadosCard = dados.getData()
    

    // DEFINIR TAMANHO DO CARD
    const tamanhoCard = {
        P: {
            h: "310px",
            w: "220px"
        },
        G: {
            h: "380px",
            w: "260px"
        }

    }
    // ID USADO PARA CONFIGURAR FAVORITOS.
    // const Id = useRef(id)

    const cardInfo = useRef(null)

    const toggleOpacity = (element) => {
        element.current.classList.toggle("opacity-0")
    }

    const abrirInfoPage = ()=>{
        nav(`/info/${dadosCard.type}/${dadosCard.id}/${slugify(dadosCard.name)}`)
    }


    return (
        <div onClick={() => abrirInfoPage()} onMouseEnter={() => { toggleOpacity(cardInfo) }} onMouseLeave={() => { toggleOpacity(cardInfo) }} ref={ref} style={{ backgroundImage: `url(${dadosCard.img})`, width:tamanhoCard[size].w, height:tamanhoCard[size].h }} className={`${classNameCard} bg-start bg-cover bg-no-repeat shrink-0 cursor-pointer hover:scale-105 rounded-[20px] relative flex items-end overflow-hidden transition duration-200 card`}>
            <FavButton className="absolute top-5 right-5" size="P" />
            <div ref={cardInfo} className="w-full px-[20px] bg-[image:var(--color-whiteGlass)] h-[86px] flex flex-col justify-center gap-[10px] transition duration-200">
                <h3 className="font-semibold flex items-start text-[18px] leading-6 h-[48px] line-clamp-2">{dadosCard.name}</h3>
                <p className="h-[24px] text-[14px]">{`Lançamento | ${dadosCard.date}`}</p>
            </div>

        </div>
    )
})

export default Card