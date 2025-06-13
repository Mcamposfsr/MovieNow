import FavButton from "../Favbutton"
const CardsSeries = () =>{

    const urlImg = "/Astronauta.png"

    return(
        <div style={{backgroundImage:`url(${urlImg})`}} className="cursor-pointer hover:scale-105 w-[255px] h-[300px] rounded-[20px] bg-cover relative flex items-end overflow-hidden transition duration-200">
            <FavButton className="absolute top-5 right-5" size="P"/>
            <div className="w-[255px] px-[20px] bg-[image:var(--color-whiteGlass)] h-[86px] flex flex-col justify-center gap-[10px] ">
                <h3 className="font-semibold text-16">Moonfall</h3>
                <p>2022 | Sci-fi</p>
            </div>

        </div>
    )
}
export default CardsSeries

// 