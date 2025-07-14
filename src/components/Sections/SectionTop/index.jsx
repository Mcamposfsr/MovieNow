import PurpleButton from "../../PurpleButton"
import FavButton from "../../FavButton"
import useApiinfo from "@/hooks/useApiinfo.js"
import formatarStringUrlBanner from "@/utils/formatarStringUrlBanner"
import formatarDataTMDB from "../../../utils/formatarDataTMDB"

const SecaoDestaque = () => {

    const { cardFilmes } = useApiinfo()

    const filme = cardFilmes[0] || null

    if (!filme) {
        return null
    }
    return (
        <section style={{ backgroundImage: `url(${formatarStringUrlBanner(filme.backdrop_path,"O")})` }} className={`h-[400px] px-[8px] bg-no-repeat bg-top bg-center bg-cover flex items-end`}>
            <div className="flex flex-col gap-[20px] py-[60px]">
                <h2 className="text-white text-[48px] font-semibold box-border leading-none">{filme.original_title}</h2>
                <p className="text-white text-[14px] font-light">{`Lançamento | ${formatarDataTMDB(filme.release_date)}`}</p>
                <div className="flex items-center gap-[18px]">
                    <PurpleButton texto={"Explorar"} />
                    <FavButton />
                </div>
            </div>

        </section>
    )
}

export default SecaoDestaque