import {createBrowserRouter} from "react-router-dom"
import { PokemonPage } from "../pages/PokemonPage"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<PokemonPage />
    }
])