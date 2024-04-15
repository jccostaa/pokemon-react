/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Avatar,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    capitalize
} from "@mui/material"

import { useAppDispatch, useAppSelector } from "../store/hooks"
import { pokemonListaThunk } from "../store/slices/pokemonSlice"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import StarIcon from '@mui/icons-material/LocalActivity';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { Paginacao } from "./Paginacao";
import { addPokemon } from "../store/slices/pokedexSlice";

export function PokemonTable() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const pokemons = useAppSelector((state) => state.pokemons)

    function handleAddPokedex(pokemon: any) {
        dispatch(addPokemon(pokemon))
    }


    useEffect(() => {
        dispatch(pokemonListaThunk())
    }, [dispatch])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="Pokémon Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Tamanho</TableCell>
                        <TableCell>Visualizar | Add na Pokedex</TableCell>
                        <TableCell width={1}>
                            <IconButton onClick={() => { navigate(`/pokedex`) }}>
                                <CatchingPokemonIcon sx={{ width: "50px", height: "50px" }} color="error" />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {pokemons.map((pokemon) => (
                        <TableRow key={pokemon.id}>
                            <TableCell><Avatar src={pokemon.sprites.front_default} sx={{ height: "100px", width: "100px" }} alt={pokemon.name} /></TableCell>
                            <TableCell><h3>{`#${pokemon.id}`}</h3></TableCell>
                            <TableCell><h3>{capitalize(pokemon.name)}</h3></TableCell>
                            <TableCell><h4>{`${pokemon.height} decimetros`}</h4></TableCell>
                            <TableCell width={"250px"}>
                                <IconButton onClick={() => { navigate(`/pokemon/${pokemon.id}`) }}>
                                    <VisibilityIcon sx={{ width: "50px", height: "50px" }} color="primary" />
                                </IconButton>

                                <IconButton onClick={() => handleAddPokedex(pokemon)}>
                                    <StarIcon sx={{ width: "50px", height: "50px" }} color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Paginacao />
        </TableContainer>
    )
}