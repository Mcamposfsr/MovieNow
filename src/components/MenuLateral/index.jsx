// IMPORT DE IMAGENS
import  Logo  from "@/assets/coffee.svg"
import Film from "@/assets/film.svg?react"
import Heart from "@/assets/heart.svg?react"
import Arrow from "@/assets/trending-up.svg?react"

// IMPORT COMPONENTES
import OpcoesMenu from "@/components/OpcoesMenu"



const MenuLateral = () => {
    return (
        <aside className="box-border w-[300px] h-screen bg-dark text-white pl-[20px] drop-shadow-menu py-[35px] z-2">
            <div className="flex gap-[8px] items-center">
                <img src={Logo} alt="Imagem da logo" />
                <h2 className="font-bold text-[22px] font-poppins">MOVIENOW</h2>
            </div>
            <ul className="flex flex-col gap-[40px] mt-[50px] ">
                <OpcoesMenu
                    Logo={Film}
                    texto={"Home"}
                />
                <OpcoesMenu
                    Logo={Heart}
                    texto={"Favourites"}
                />
                <OpcoesMenu
                    Logo={Arrow}
                    texto={"Trending"}
                />
            </ul>
        </aside>
    )
}

export default MenuLateral 