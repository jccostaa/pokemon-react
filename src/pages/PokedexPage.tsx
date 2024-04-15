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

import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import ReplyIcon from '@mui/icons-material/Reply';

import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useNavigate } from "react-router-dom";
import { removePokemon } from "../store/slices/pokedexSlice";

export function PokedexPage() {
    const pokemons = useAppSelector((state) => state.pokedex)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function handleRemovePokemon(id: number) {
        dispatch(removePokemon(id))
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="Pokedex Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Remover</TableCell>
                        <TableCell width={1}>
                            <IconButton onClick={() => navigate("/")}>
                                <ReplyIcon sx={{ width: "50px", height: "50px" }} color="error" />
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
                            <TableCell>
                                <IconButton onClick={() => handleRemovePokemon(pokemon.id)} >
                                    <PlaylistRemoveIcon sx={{ width: "50px", height: "50px" }} color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}