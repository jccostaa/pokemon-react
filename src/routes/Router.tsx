import { createBrowserRouter } from "react-router-dom"
import { PokemonPage } from "../pages/PokemonPage"
import { DetalhesPokemonPage } from "../pages/DetalhesPokemonPage"
import { PokedexPage } from "../pages/PokedexPage"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <PokemonPage />
    },
    {
        path: "/pokemon/:id",
        element: <DetalhesPokemonPage />
    },
    {
        path: "/pokedex",
        element: <PokedexPage />
    }
])