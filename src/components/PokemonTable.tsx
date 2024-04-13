import { 
    Avatar, 
    IconButton, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer,
    TableHead, 
    TableRow 
} from "@mui/material"

import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect } from "react"
import { pokemonListaThunk } from "../store/slices/pokemonSlice"

import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/LocalActivity';
import { Paginacao } from "./Paginacao";

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
                                    <AddIcon sx={{width:"50px", height:"50px"}} color="primary" />
                                </IconButton>

                                <IconButton>
                                    <StarIcon sx={{width:"50px", height:"50px"}} color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>                
            </Table>
            <Paginacao/>
        </TableContainer>
    )
}