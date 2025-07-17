import CardInfo from "@/components/Cards/CardInfo"
import CardsContext from "@/hooks/useApiinfo.js"

const ShowPage = ({ busca }) => {

    const title = busca[0].toUpperCase() + busca.slice(1)

    const { cardFilmes, cardSeries } = CardsContext()

    let dados = null

    // VERIFICAR O CONTEÚDO QUE SERÁ EXIBIDO

    if (busca == "filmes") {
        dados = cardFilmes
    } else if (busca == "series") {
        dados = cardSeries
    } else if (busca == "favoritos") {
        dados = cardSeries
    }

    if(!dados){
        return null
    }

    return (
        <main className="flex-1 flex bg-dark h-screen  overflow-x-hidden px-[20px] flex-col gap-[40px] pt-[70px]">
            <h2 className="text-white text-[20px] font-semibold ">{title}</h2>
            <div className="py-[20px] px-[20px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] flex-wrap gap-y-[20px] overflow-y-scroll">
                {
                    dados.map((elemento, i) => {
                        return (<CardInfo size={"G"} key={`key-show-${i}`} dados={elemento} />)
                    })
                }

            </div>


        </main>
    )
}

export default ShowPage