import HomePage from "@/components/Pages/HomePage"
import ShowPage from "@/components/Pages/ShowPage"
import InfoPage from "@/components/Pages/InfoPage"
import { Route, Routes } from "react-router-dom"
import useBuscarSeries from "@/hooks/useBuscaSeries.js"
import useBuscaFilmes from "@/hooks/useBuscaFilmes.js"
import Layout from "@/components/Layout/index.jsx"



function App() {

  // Fazer buscas de conteúdo ao abrir o site.

  useBuscarSeries()
  useBuscaFilmes()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>}></Route>
        <Route path="favoritos" element={<ShowPage busca={"favoritos"} />}></Route>
        <Route path="filmes" element={<ShowPage busca={"filmes"} />}></Route>
        <Route path="series" element={<ShowPage busca={"series"} />}></Route>
        {/* ROTAS PARA INFORMAÇÕES */}
        <Route path="info/:type/:id/:title" element={<InfoPage />}></Route>
      </Route>
    </Routes>


  )
}

export default App

