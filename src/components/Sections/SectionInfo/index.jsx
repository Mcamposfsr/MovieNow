import ReqController from "@/utils/reqController"
import { useEffect, useState } from "react"
import FavButton from "@/components/FavButton"
import Star from "@/assets/star.svg?react"

const SectionInfo = ({ type, id }) => {

    const [dados, setDados] = useState(null)

    useEffect(() => {
            const buscarDados = async () => {
                const info = await ReqController.handleId(id, type)
                setDados(info)
            }
            buscarDados()
        }, [id, type])

    if (!dados) {
        return null
    }


    return (
        <section className="flex gap-[30px] items-center box-border h-[400px]">
            <img src={dados.getBanner("O")} alt="Foto do filme" className="rounded-[20px] w-[600px]" />
            <div className="grid grid-cols-3 grid-rows-[1fr_1fr_3fr_1fr] flex-1 gap-y-[1em] py-[50px] box-border">
                <h3 className="text-[32px] font-semibold text-white row-start-1 col-start-1 col-span-2 self-center">{dados.getName()}</h3>
                <div className="flex gap-[5px] items-center justify-self-end justify-center row-start-1 col-start-3"><Star /> <p className="text-[18px] font-medium text-white">{`${dados.getNota()}/10`}</p></div>
                <ul className="flex justify-between items-center w-[90%] col-start-1 col-span-3 row-start-2 ">
                    <li className="text-[18px] text-white font-medium">{dados.getDate()}</li>
                    <li className="text-[18px] text-white font-medium">{dados.getGeneros()}</li>
                    <li className="text-[18px] text-white font-medium">{dados.getDuracao(type)}</li>
                </ul>
                <p className="text-[16px] row-start-3 col-start-1 col-span-3 text-white">{dados.getPlot()}</p>
                <div className="flex items-center gap-[18px] col-start-1 col-span-2 row-start-4">

                    <FavButton />
                </div>
            </div>
        </section>

    )
}

export default SectionInfo