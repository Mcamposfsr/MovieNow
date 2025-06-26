import FavButton from "../Favbutton?react"
import { forwardRef } from "react"

const CardsSeries = forwardRef((props,ref) =>{

    let {classNameCard} = props
    const urlImg = "/Astronauta.png"

    return(
        <div ref={ref} style={{backgroundImage:`url(${urlImg})`}} className={`${classNameCard} shrink-0 cursor-pointer hover:scale-105 w-[230px] h-[280px] rounded-[20px] bg-cover relative flex items-end overflow-hidden transition duration-200 card`}>
            <FavButton className="absolute top-5 right-5" size="P"/>
            <div className="w-full px-[20px] bg-[image:var(--color-whiteGlass)] h-[86px] flex flex-col justify-center gap-[10px] ">
                <h3 className="font-semibold text-16">Moonfall</h3>
                <p>2022 | Sci-fi</p>
            </div>

        </div>
    )
}
)
export default CardsSeries

// 