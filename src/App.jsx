import MenuLateral from "./components/MenuLateral"
import PaginaPrincipal from "@/components/Pages/PaginaPrincipal"
import ShowPage from "@/components/Pages/ShowPage"
import InfoPage from "@/components/Pages/InfoPage"
import SearchBar from "@/components/SearchBar"
import { Route, Routes } from "react-router-dom"
import useBuscarSeries from "@/hooks/useBuscaSeries.js"
import useBuscaFilmes from "./hooks/useBuscaFilmes.js"



function App() {

  // Fazer buscas de conteúdo ao abrir o site.

  useBuscarSeries()
  useBuscaFilmes()

  return (
    <div className="flex w-full box-border relative">
      <SearchBar />
      <MenuLateral />
      <Routes>

        <Route path="/" element={<PaginaPrincipal />}></Route>
        <Route path="/favoritos" element={<ShowPage busca={"favoritos"}/>}></Route>
        <Route path="/filmes" element={<ShowPage busca={"filmes"}/>}></Route>
        <Route path="/series" element={<ShowPage busca={"series"}/>}></Route>

        <Route path="/info/:id/:title" element={<InfoPage/>}></Route>
        
      </Routes>

       
    </div>
  )
}

export default App
