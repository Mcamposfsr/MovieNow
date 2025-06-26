import PurpleButton from "@/components/PurpleButton"
import FavButton from "@/components/FavButton"
import ImgCard from "@/components/ImgCard"
import Star from "@/assets/star.svg?react"
import Carrossel from "@/components/Carrossel"

const InfoPage = () => {
    return (
        <main className="flex bg-dark flex-1 flex-col gap-[30px] h-screen overflow-x-hidden px-[40px] pt-[70px]">
    

            <section className="flex gap-[30px] items-center">
                <img src="mulher.png" alt="Foto do filme" className="rounded-[20px] w-[550px] h-[450px]" />
                <div className="grid grid-cols-3 grid-rows-[1fr_1fr_3fr_2fr] flex-1">
                    <h3 className="text-[32px] font-semibold text-white row-start-1 col-start-1 col-end-2">House of Wealth</h3>
                    <div className="flex gap-[5px] items-center justify-self-end justify-center row-start-1 col-start-3"><Star /> <p className="text-[18px] font-medium text-white">{`${"7.8"}/10`}</p></div>
                    <ul className="flex justify-around items-center w-[50%] col-start-1 col-span-2 row-start-2">
                        <li className="text-[18px] text-white font-medium">2023</li>
                        <li className="text-[18px] text-white font-medium">Drama</li>
                        <li className="text-[18px] text-white font-medium">2h 38m</li>
                    </ul>
                    <p className="text-[16px] row-start-3 col-start-1 col-span-3 text-white">The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.</p>
                    <div className="flex items-center gap-[18px] col-start-1 col-span-2 row-start-4">
                        <PurpleButton texto={"Watch Now"} />
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