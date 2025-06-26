import SecaoDestaque from "@/components/SecaoDestaque"
import SecaoSeries from "@/components/SecaoSeries"
import SecaoFilmes from "@/components/SecaoFilmes"

const PaginaPrincipal = ({className}) =>{
    return (
        <main className={`${className} bg-dark h-screen flex-1 overflow-x-hidden`}>
            <SecaoDestaque/>
            <SecaoSeries/>
            <SecaoFilmes/>
        </main>
    )
}

export default PaginaPrincipal