import PurpleButton from "@/components/PurpleButton"
import FavButton from "@/components/FavButton"
import ImgCard from "@/components/ImgCard"
import Star from "@/assets/star.svg?react"
import Carrossel from "@/components/Carrossel"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReqController from "@/utils/reqController"
import formatarTempo from "@/utils/formatarTempo.js"
import NormalizeTmdbData from "@/utils/normalizeTmdbData"


const InfoPage = () => {

    const { type,id } = useParams()

    const [dados,setDados] = useState(null)

    useEffect(()=>{
        const buscarDados = async ()=>{
            const info = await ReqController.handleId(id,type)
            const dados = NormalizeTmdbData(info)
            setDados(dados)
            
        }
        buscarDados()
    },[id,type])
    useEffect(()=>{
        console.log(dados)
    },[dados])

    if(!dados){
        return null
    }

    return (
        <main className="flex bg-dark flex-1 flex-col gap-[30px] h-screen overflow-x-hidden px-[40px] pt-[70px]">
    

            <section className="flex gap-[30px] items-center">
                <img src={dados.Poster} alt="Foto do filme" className="rounded-[20px] w-[550px] h-[450px]" />
                <div className="grid h-[450px] grid-cols-3 grid-rows-[2fr_1fr_3fr_2fr] flex-1">
                    <h3 className="text-[32px] font-semibold text-white row-start-1 col-start-1 col-span-2 self-center">{dados.Title}</h3>
                    <div className="flex gap-[5px] items-center justify-self-end justify-center row-start-1 col-start-3"><Star /> <p className="text-[18px] font-medium text-white">{`${dados.imdbRating}/10`}</p></div>
                    <ul className="flex justify-around items-center w-[50%] col-start-1 col-span-3 row-start-2">
                        <li className="text-[18px] text-white font-medium">{dados.getDate()}</li>
                        <li className="text-[18px] text-white font-medium">{dados.getGeneros()}</li>
                        <li className="text-[18px] text-white font-medium">{formatarTempo(dados.Runtime)}</li>
                    </ul>
                    <p className="text-[16px] row-start-3 col-start-1 col-span-3 text-white">{dados.getPlot()}</p>
                    <div className="flex items-center gap-[18px] col-start-1 col-span-2 row-start-4">
                        
                        <FavButton />
                    </div>

                </div>

            </section>

            <section className="px-[8px] py-[8px] flex flex-col gap-[10px] max-w-full ">
                <h2 className="font-semibold text-white text-[20px] ">Galeria</h2>
                <Carrossel CardComponent={ImgCard} />

            </section>

        </main>
    )
}

export default InfoPage