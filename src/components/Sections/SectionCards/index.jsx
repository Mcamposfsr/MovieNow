import Carrossel from "@/components/Carrossel"
import useApiInfo from "@/hooks/useApiInfo"

const SectionCards = ( {type} ) =>{

        const { cardSeries, cardFilmes } = useApiInfo()

        const tipoSection = {
            series:{
                title:"Series",
                info:cardSeries,
                size:"P"
            },
            filmes:{
                title:"Filmes",
                info:cardFilmes,
                size:"G"
            },
            
        }    

    return(

        <section className="px-[8px] py-[8px] flex flex-col gap-[10px] max-w-full ">
            <h2 className="font-semibold text-white text-[20px] ">{tipoSection[type].title}</h2>
            <Carrossel sizeCard={tipoSection[type].size} cardsInfo={tipoSection[type].info} />

        </section>
    )
}

export default SectionCards