// IMPORT DE IMAGENS
import  Logo  from "@/assets/coffee.svg"
import Film from "@/assets/film.svg?react"
import Heart from "@/assets/heart.svg?react"
import Home from "@/assets/home-outline.svg?react"
import Play from "@/assets/play-screen.svg?react"
// IMPORT COMPONENTES
import OpcoesMenu from "@/components/OpcoesMenu"



const MenuLateral = ({className}) => {

    return (
        <aside className={`${className} box-border shrink-0 w-[300px] h-screen bg-dark text-white pl-[20px] drop-shadow-menu py-[35px] z-30`}>
            <div className="flex gap-[8px] items-center">
                <img src={Logo} alt="Imagem da logo" />
                <h2 className="font-bold text-[22px] font-poppins">MOVIENOW</h2>
            </div>
            <ul className="flex flex-col gap-[40px] mt-[50px] ">
                <OpcoesMenu
                    Logo={Home}
                    texto={"Home"}
                    link={"/"}
                />
                <OpcoesMenu
                    Logo={Film}
                    texto={"Filmes"}
                    link={"/filmes"}
                />
                    <OpcoesMenu
                        Logo={Play}
                        texto={"Series"}
                        link={"/series"}
                    />
                <OpcoesMenu
                    Logo={Heart}
                    texto={"Favoritos"}
                    link={"/favoritos"}
                />
            </ul>
        </aside>
    )
}

export default MenuLateral 