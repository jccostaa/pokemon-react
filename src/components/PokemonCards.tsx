import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useAppSelector } from "../store/hooks"

export function PokemonTable() {

    const pokemons = useAppSelector((state) => state.pokemons)



    return (
        <TableContainer>
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
                {pokemons.map((pokemon) =>(
                    <TableRow key={pokemon.id}>
                        <TableCell>{pokemon.sprites}</TableCell>
                        <TableCell>{pokemon.id}</TableCell>
                        <TableCell>{pokemon.name}</TableCell>
                        <TableCell>{pokemon.height}</TableCell>
                        <TableCell>
                            
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableContainer>
    )
}