import SectionTop from "@/components/Sections/SectionTop"
import SectionCards from "@/components/Sections/SectionCards"
import useApiInfo from "@/hooks/useApiInfo"




const HomePage = ({ className }) => {

    const { cardSeries, cardFilmes } = useApiInfo()


    return (
        <main className={`${className} flex flex-col bg-dark h-screen flex-1 overflow-x-hidden gap-[2em] pb-[20px]`}>
            <SectionTop />
            <SectionCards titulo={"Series Populares"} cardsInfo={cardSeries} typeCards={"info"} length={10}/>
            <SectionCards titulo={"Filmes Populares"} cardsInfo={cardFilmes} typeCards={"info"} length={10}/>
        </main>
    )
}

export default HomePage