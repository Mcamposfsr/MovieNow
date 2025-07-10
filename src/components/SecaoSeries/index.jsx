import Carrossel from "../Carrossel"
import useApiInfo from "@/hooks/useApiInfo"


const SecaoSeries = () =>{

    const { cardSeries } = useApiInfo()
    

    return(
        <section className="px-[8px] py-[8px] flex flex-col gap-[10px] max-w-full ">
            <h2 className="font-semibold text-white text-[20px] ">Series</h2>
            <Carrossel sizeCard={"P"} cardsInfo={cardSeries} />

        </section>
    )
}

export default SecaoSeries