import FavButton from "../Favbutton?react"
import { forwardRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/utils/slugfy";



const Card = forwardRef((props, ref) => {

    const nav = useNavigate()
    const { classNameCard, info, size } = props
    const { Title, Year, imdbID, Poster } = info
    // DEFINIR TAMANHO DO CARD
    const tamanhoCard = {
        P: {
            h: "280px",
            w: "230px"
        },
        G: {
            h: "250px",
            w: "350px"
        }

    }
    // ID USADO PARA CONFIGURAR FAVORITOS.
    const Id = useRef(imdbID)

    const cardInfo = useRef(null)

    const toggleOpacity = (element) => {
        element.current.classList.toggle("opacity-0")
    }

    const abrirInfoPage = ()=>{
        nav(`Info/${imdbID}/${slugify(Title)}`)
    }


    return (
        <div onClick={() => abrirInfoPage()} onMouseEnter={() => { toggleOpacity(cardInfo) }} onMouseLeave={() => { toggleOpacity(cardInfo) }} ref={ref} style={{ backgroundImage: `url(${Poster})`, width:tamanhoCard[size].w, height:tamanhoCard[size].h }} className={`${classNameCard} shrink-0 cursor-pointer hover:scale-105 w-[350px] h-[250px] rounded-[20px] bg-cover relative flex items-end overflow-hidden transition duration-200 card`}>
            <FavButton className="absolute top-5 right-5" size="P" />
            <div ref={cardInfo} className="w-full px-[20px] bg-[image:var(--color-whiteGlass)] h-[86px] flex flex-col justify-center gap-[10px] transition duration-200">
                <h3 className="font-semibold text-[16px] h-[48px] line-clamp-2">{Title}</h3>
                <p className="h-[24px] text-[14px]">{`Lançamento | ${Year}`}</p>
            </div>

        </div>
    )
})

export default Card