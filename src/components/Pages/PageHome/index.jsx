import SectionTop from "@/components/Sections/SectionTop"
import SectionCards from "@/components/Sections/SectionCards"


const PageHome = ({className}) =>{
    return (
        <main className={`${className} bg-dark h-screen flex-1 overflow-x-hidden`}>
            <SectionTop/>
            <SectionCards type={"series"}/>
            <SectionCards type={"filmes"}/>
        </main>
    )
}

export default PageHome