import Carrossel from "@/components/Carrossels/Carrossel"

const SectionCards = ({ titulo, cardsInfo, typeCards, length,className}) => {

    // CARDS INFO PRECISA SER UM ARRAY.

    return (

        <section className={`px-[1em] flex flex-col gap-[2em] max-w-full ${className} `}>
            <h2 className="font-semibold text-white text-[20px] ">{titulo}</h2>
            <Carrossel cardsInfo={cardsInfo} typeCards={typeCards} length={length} />

        </section>
    )
}

export default SectionCards