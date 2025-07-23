import { useParams } from "react-router-dom"
import SectionInfo from "@/components/Sections/SectionInfo"
import SectionCards from "@/components/Sections/SectionCards"
import ReqController from "@/utils/reqController"
import { useEffect, useState } from "react"
import SectionCredits from "../../Sections/SectionCredits"


const InfoPage = () => {

    const { type, id } = useParams()
    const [dataImg, setDataImg] = useState(null)
    const [dataCredits, setDataCredits] = useState(null)

    useEffect(() => {
        const buscarDados = async () => {
            const banners = await ReqController.handleGallery(id, type)
            const credits = await ReqController.handleCredits(id, type)
            setDataCredits(credits.getData())
            setDataImg(banners.getData())

        }
        buscarDados()

    }, [id, type])


    if (!dataImg || !dataCredits) {
        return null
    }

    return (
        <main className="flex bg-dark flex-1 flex-col gap-[2em] h-screen overflow-x-hidden px-[1em] py-[3em]">
            <SectionInfo type={type} id={id} />
            <SectionCards titulo={"Galeria"} cardsInfo={dataImg.backdrops} typeCards={"img"} length={30} className={"!px-0"}/>
            <SectionCredits titulo={"Atores"} cardsInfo={dataCredits.atores}/>
            <SectionCredits titulo={"Diretores"} cardsInfo={dataCredits.diretores}/>
            <SectionCredits titulo={"Escritores"} cardsInfo={dataCredits.escritores}/>
        </main>
    )
}

export default InfoPage