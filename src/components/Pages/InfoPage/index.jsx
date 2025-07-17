import { useParams } from "react-router-dom"
import SectionInfo from "@/components/Sections/SectionInfo"
import SectionCards from "@/components/Sections/SectionCards"
import ReqController from "@/utils/reqController"
import { useEffect, useState } from "react"


const InfoPage = () => {

    const { type, id } = useParams()
    const [dataImg, setDataImg] = useState(null)

    useEffect(() => {
        const buscarDados = async () => {
            const banners = await ReqController.handleGallery(id, type)
            setDataImg(banners.getData())

        }
        buscarDados()

    }, [id, type])


    if(dataImg == null){
        return null
    }

    return (
        <main className="flex bg-dark flex-1 flex-col gap-[30px] h-screen overflow-x-hidden px-[40px] pt-[70px]">
            <SectionInfo type={type} id={id} />
            <SectionCards titulo={"Filmes Populares"} cardsInfo={dataImg.backdrops} typeCards={"img"} length={30} />
        </main>
    )
}

export default InfoPage