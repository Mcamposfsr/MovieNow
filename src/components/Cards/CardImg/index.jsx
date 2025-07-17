import { forwardRef } from "react"
const CardImg = forwardRef((props,ref) => {

    const {classNameCard,url} = props


    return (

        <div ref={ref} className={`${classNameCard} bg-start bg-cover bg-no-repeat shrink-0 cursor-pointer hover:scale-105 h-[260px] w-[380px] rounded-[20px] relative flex items-end overflow-hidden transition duration-200 card`}>
            <img src={url} alt="Banners Serie/Filme" className="w-full h-full object-cover" />
        </div>
    )


})




export default CardImg