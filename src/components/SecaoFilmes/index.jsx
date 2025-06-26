import CardGrande from "../CardGrande"
import Carrossel from "../Carrossel"


const SecaoFilmes = () =>{
    return(
        <section className="px-[8px] py-[8px] flex flex-col gap-[10px] max-w-full ">
            <h2 className="font-semibold text-white text-[20px] ">Filmes</h2>
            <Carrossel CardComponent={CardGrande}/>

        </section>
    )
}

export default SecaoFilmes