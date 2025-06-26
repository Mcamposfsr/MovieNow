import { forwardRef } from "react"

const ImgCard = forwardRef((props, ref) => {
    const {urlImg, classNameCard} = props

    return (
        <div ref={ref} className={`${classNameCard} shrink-0 cursor-pointer hover:scale-105 w-[300px] h-[200px] rounded-[20px] bg-cover relative flex items-center justify-center overflow-hidden transition duration-200 card`}>
            <img src="screne1.png" alt="Cenas do filme" className="w-[300px] h-[200px]" />
        </div>
    )
})

export default ImgCard