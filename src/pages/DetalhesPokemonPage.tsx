/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Card, CardContent, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { pokemonThunk } from "../store/slices/pokemonUnicoSlice";
import { useEffect } from "react";

import ReplyIcon from '@mui/icons-material/Reply';


export function DetalhesPokemonPage() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const pokemon = useAppSelector(state => state.pokemonUnico);
    const navigate = useNavigate();

    useEffect(() => {
        if (!params) {
            return;
        }
        dispatch(pokemonThunk(Number(params.id)));
    }, [dispatch, params]);
    
    return (
        <Card component={Paper} sx={{ maxWidth: 600, margin: "auto", marginY: 10 }}>
            <CardContent>
                <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Grid item><Avatar sx={{ width: "200px", height: "200px" }} src={pokemon?.sprites.front_default} /></Grid>
                    <Grid item>
                        <Typography variant="h5">#{pokemon?.id}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3">{pokemon?.name}</Typography>
                    </Grid>
                    <Grid item>Tamanho: {pokemon?.height} decimetros</Grid>

                    <Grid item xs={12} sx={{ display: "flex" }} >
                        <List>
                            <Typography variant="h5">Stats:</Typography>
                            {pokemon?.stats.map((stat: any, index: number) => (
                                <ListItem key={index}>
                                    <ListItemText primary={`${stat.stat.name}: ${stat.base_stat} `} />
                                </ListItem>
                            ))}
                        </List>
                        <List>
                            <Typography variant="h5">Habilidades:</Typography>
                            {pokemon?.abilities.map((ability: any, index: number) => (
                                <ListItem key={index}>
                                    <ListItemText primary={`${ability.ability.name}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item>
                    <IconButton onClick={() => navigate("/")}>
                                <ReplyIcon sx={{ width: "50px", height: "50px" }} color="error" />
                            </IconButton>

                    </Grid>

                </Grid>

            </CardContent>
        </Card>
    )
}

