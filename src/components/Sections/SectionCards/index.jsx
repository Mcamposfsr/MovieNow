import Carrossel from "@/components/Carrossel"

const SectionCards = ({ titulo, cardsInfo, typeCards, length}) => {

    // CARDS INFO PRECISA SER UM ARRAY.

    return (

        <section className="px-[8px] py-[8px] flex flex-col gap-[10px] max-w-full ">
            <h2 className="font-semibold text-white text-[20px] ">{titulo}</h2>
            <Carrossel cardsInfo={cardsInfo} typeCards={typeCards} length={length} />

        </section>
    )
}

export default SectionCards