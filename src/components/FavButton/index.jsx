import { useState } from "react"
import FavIcon from "@/assets/heart.svg?react"

const FavButton = ({size = "M",className = ""}) => {

const [fav,setFav] = useState(false)

const medidas = {
    P:{
        rounded:"8px",
        width:"32px",
        height:"32px",
        fav:"14px"

    },
    M:{
        rounded:"20px",
        width:"54px",
        height:"54px",
        fav:"20px"

    }
}

const definirFavorito = ()=> {
    fav?setFav(false):setFav(true)
}


    return ( 
        <button aria-label="Remover e adicionar favoritos" style={{width:medidas[size].width,height:medidas[size].height,borderRadius:medidas[size].rounded}} onClick={()=>{definirFavorito()}} className={`${className} backdrop-blur-[20px] cursor-pointer bg-[image:var(--color-whiteGlass)] flex items-center justify-center`}>
            <FavIcon className={`stroke-roxo ${fav?'fill-lightPurple':'fill-none'}`}
            style={{width:medidas[size].fav, height:medidas[size].fav}}/>
        </button>
    )

}

export default FavButton


// ROUNDED: 8PX / 20PX
// WH 54PX / 32PX
// FAV 20PX / 14PX