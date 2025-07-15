import SearchBar from "@/components/SearchBar"
import MenuLateral from "@/components/MenuLateral"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex w-full box-border relative">
            <SearchBar />
            <MenuLateral />
            <Outlet/>
        </div>
    )
}

export default Layout