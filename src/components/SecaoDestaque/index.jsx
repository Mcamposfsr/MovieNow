import PurpleButton from "../PurpleButton"
import FavButton from "../FavButton"

const SecaoDestaque = () =>{


    return (
        <section className="bg-[url('/SectionImgDestaque.png')] h-[400px] px-[8px] bg-no-repeat bg-center bg-cover flex items-end">
            <div className="flex flex-col gap-[20px] py-[60px]">
                <h2 className="text-white text-[48px] font-semibold box-border leading-none">Insiderh</h2>
                    <p className="text-white text-[14px] font-light">2022 | Comedy horror | 1 Season</p>
                    <div className="flex items-center gap-[18px]">
                        <PurpleButton texto={"Watch Now"}/>
                        <FavButton/>
                    </div>
            </div>

        </section>
    )
}

export default SecaoDestaque