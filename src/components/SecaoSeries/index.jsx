import Carrossel from "../Carrossel"
import CardsSeries from "../CardSeries"

const SecaoSeries = () =>{

    return(
        <section className="px-[8px] py-[8px] flex flex-col gap-[10px] max-w-full ">
            <h2 className="font-semibold text-white text-[20px] ">Series</h2>
            <Carrossel CardComponent={CardsSeries}/>

        </section>
    )
}

export default SecaoSeries