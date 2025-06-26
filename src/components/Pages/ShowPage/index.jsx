import CardGrande from "@/components/CardGrande"
import { useEffect } from "react"
const ShowPage = ({busca}) =>{

    const title = busca[0].toUpperCase() + busca.slice(1)


    useEffect(()=>{

    },[])
    
    return(
        <main className="flex-1 flex bg-dark h-screen  overflow-x-hidden px-[20px] flex-col gap-[40px] pt-[70px]">
            <h2 className="text-white text-[20px] font-semibold ">{title}</h2>
            <div className="py-[20px] px-[20px] grid grid-cols-[1fr_1fr_1fr_1fr] flex-wrap gap-y-[20px] overflow-y-scroll">
                {
                    [0,1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,11,1,1,1,1,1,11,1,1,].map((e,i)=>{
                        return(<CardGrande key={`key-${i}`}/>)
                    })
                }

            </div>
            

        </main>
    )
}

export default ShowPage