import PurpleButton from "../../PurpleButton"
import FavButton from "../../FavButton"
import useApiinfo from "@/hooks/useApiinfo.js"


const SectionTop = () => {

    const { cardFilmes } = useApiinfo()

    //  ATRIBUÍ A INSTANCIA DIRETAMENTE POIS AQUI O TAMANHO DA IMAGEM PRECISA SER PERSONALIZADO "getImg('O')

    const filme = cardFilmes[0] || null

    if (!filme) {
        return null
    }
    return (
        <section style={{ backgroundImage: `url(${filme.getBanner("G")})` }} className={`h-[400px] px-[8px] bg-no-repeat bg-top bg-cover flex items-end`}>
            <div className="flex flex-col gap-[20px] py-[60px]">
                <h2 className="text-white text-[48px] font-semibold box-border leading-none">{filme.name}</h2>
                <p className="text-white text-[14px] font-light">{`Lançamento | ${filme.getDate()}`}</p>
                <div className="flex items-center gap-[18px]">
                    <PurpleButton texto={"Explorar"} />
                    <FavButton />
                </div>
            </div>

        </section>
    )
}

export default SectionTop