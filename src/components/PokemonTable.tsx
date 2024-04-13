import { Avatar, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect } from "react"
import { pokemonListaThunk } from "../store/slices/pokemonSlice"
import { Delete, Edit } from "@mui/icons-material"

export function PokemonTable() {
    const dispatch = useAppDispatch()


    const pokemons = useAppSelector((state) => state.pokemons)

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
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pokemons.map((pokemon) => (
                        <TableRow key={pokemon.id}>
                            <TableCell><Avatar src={pokemon.sprites.front_default} sx={{ height: "100px", width: "100px" }} alt={pokemon.name} /></TableCell>
                            <TableCell>{pokemon.id}</TableCell>
                            <TableCell>{pokemon.name}</TableCell>
                            <TableCell>{`${pokemon.height} dm`}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <Edit color="primary" />
                                </IconButton>

                                <IconButton>
                                    <Delete color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}