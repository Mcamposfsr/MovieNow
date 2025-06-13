import SearchIcon from "@/assets/search.svg?react"
import SecaoDestaque from "../SecaoDestaque"
import SecaoSeries from "../SecaoSeries"

const PaginaPrincipal = () =>{
    return (
        <main className="bg-dark w-full h-screen">
            <button className="absolute right-5 top-5 cursor-pointer" ><SearchIcon className={"w-[25px] h-[25px]"}/></button>
            <SecaoDestaque/>
            <SecaoSeries/>
            <section>
                <h2>Filmes</h2>
                {/* Componente de carrocel aqui. */}
            </section>
        </main>
    )
}

export default PaginaPrincipal