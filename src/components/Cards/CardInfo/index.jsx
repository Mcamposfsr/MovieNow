import FavButton from "@/components/Favbutton?react"
import { forwardRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import  slugfy  from "@/utils/slugfy";
import NormalizeTmdbData from "@/utils/normalizeTmdbData";



const CardInfo = forwardRef((props, ref) => {

    const nav = useNavigate()
    const { classNameCard, dados, size } = props

    // RECEBER DADOS JÁ PADRONIZADOS E MANIPULADOS.
    const dadosCard = dados.getData()
    

    // DEFINIR TAMANHO DO CARD
    const tamanhoCard = {
        P: {
            h: "310px",
            w: "220px",
            title:"text-[1em]"
        },
        G: {
            h: "380px",
            w: "260px",
            title:"text-[1.2em]"
        }

    }
    // ID USADO PARA CONFIGURAR FAVORITOS.
    // const Id = useRef(id)

    const cardInfo = useRef(null)

    const toggleOpacity = (element) => {
        element.current.classList.toggle("opacity-0")
    }

    const abrirInfoPage = ()=>{
        nav(`/info/${dadosCard.type}/${dadosCard.id}/${slugfy(dadosCard.name)}`)
    }


    return (
        <div onClick={() => abrirInfoPage()} onMouseEnter={() => { toggleOpacity(cardInfo) }} onMouseLeave={() => { toggleOpacity(cardInfo) }} ref={ref} style={{ backgroundImage: `url(${dadosCard.img})`, width:tamanhoCard[size].w, height:tamanhoCard[size].h }} className={`${classNameCard} bg-start bg-cover bg-no-repeat shrink-0 cursor-pointer hover:scale-105 rounded-[20px] relative flex items-end overflow-hidden transition duration-200 card`}>
            <FavButton className="absolute top-5 right-5" size="P" />
            <div ref={cardInfo} className="w-full px-[1em] pt-[.5em] pb-[1em]  bg-[image:var(--color-whiteGlass)] h-[100px] flex flex-col transition duration-200 justify-around">
                <h3 className={`font-semibold  line-clamp-2 ${tamanhoCard[size].title}`}>{dadosCard.name}</h3>
                <p className="h-[1em] text-[14px]">{`Lançamento | ${dadosCard.date}`}</p>
            </div>

        </div>
    )
})

export default CardInfo