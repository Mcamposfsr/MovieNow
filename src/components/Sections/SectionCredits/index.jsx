import CarrosselCredits from "../../Carrossels/CarrosselCredits"

const SectionCredits = ({ titulo, cardsInfo }) => {

    // SE NÃO TIVER INFORMAÇÕES, A SECTION NÃO É MOSTRADA.
    if (cardsInfo.length < 1) {
        return null
    } 

    return (

        <section className="flex flex-col gap-[2em] max-w-full ">
            <h2 className="font-semibold text-white text-[20px] ">{titulo}</h2>
            <CarrosselCredits cardsInfo={cardsInfo} />

        </section>
    )
}

export default SectionCredits