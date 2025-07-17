import PurpleButton from "@/components/PurpleButton"
import FavButton from "@/components/FavButton"
import useApiinfo from "@/hooks/useApiinfo.js"
import { useNavigate } from "react-router-dom"
import slugfy from "@/utils/slugfy.js"


const SectionTop = () => {

    const { cardFilmes } = useApiinfo()
    const nav = useNavigate()

    //  ATRIBUÍ A INSTANCIA DIRETAMENTE POIS AQUI O TAMANHO DA IMAGEM PRECISA SER PERSONALIZADO "getImg('O')

    let indice = Math.floor(Math.random()*20)
    

    const filme = cardFilmes[indice] || null

    const abrirInfoPage = ()=>{
        nav(`/info/${filme.getType()}/${filme.getId()}/${slugfy(filme.getName())}`)
    }
    if (filme) {
        console.log(filme)
    }

    if (!filme) {
        return null
    }
    return (
        <section style={{ backgroundImage: `url(${filme.getBanner("O")})` }} className={`h-[500px] px-[8px] bg-no-repeat bg-top bg-cover flex items-end`}>
            <div className="flex flex-col gap-[20px] py-[60px]">
                <h2 className="text-white text-[48px] font-semibold box-border leading-none">{filme.name}</h2>
                <p className="text-white text-[14px] font-light">{`Lançamento | ${filme.getDate()}`}</p>
                <div className="flex items-center gap-[18px]">
                    <PurpleButton texto={"Explorar"} click={abrirInfoPage}/>
                    <FavButton />
                </div>
            </div>

        </section>
    )
}

export default SectionTop