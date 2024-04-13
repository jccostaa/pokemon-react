import {createBrowserRouter} from "react-router-dom"
import { PokemonPage } from "../pages/PokemonPage"
import { DetalhesPokemonPage } from "../pages/DetalhesPokemonPage"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<PokemonPage />
    },
    {
        path:"/pokemon/:id",
        element:<DetalhesPokemonPage/>
    }
])