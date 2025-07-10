import Carrossel from "../Carrossel"
import useApiInfo from "@/hooks/useApiInfo"


const SecaoFilmes = () =>{
    // Acesso a informação dos filmes

    const { cardFilmes } = useApiInfo()

    return(
        <section className="px-[8px] py-[8px] flex flex-col gap-[10px] max-w-full ">
            <h2 className="font-semibold text-white text-[20px] ">Filmes</h2>
            <Carrossel sizeCard={"G"} cardsInfo={cardFilmes} />

        </section>
    )
}

export default SecaoFilmes