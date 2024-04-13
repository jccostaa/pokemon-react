/* eslint-disable @typescript-eslint/no-explicit-any */

import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPagina } from "../store/slices/paginacaoSlice";
import { pokemonListaThunk } from "../store/slices/pokemonSlice";

export function Paginacao(){

    const dispatch = useAppDispatch()

    const paginacao = useAppSelector((state)=> state.paginacao)

    const count = Number.isInteger(paginacao.count) ? paginacao.count: 0

    const countPage = Math.ceil(count / paginacao.itensPerPage)

    function mudaPagina(_:any, pagina:number){
        dispatch(setPagina(pagina))
        dispatch(pokemonListaThunk())
    }
    return(
        <>
        <Pagination 
                count={countPage} 
                page={paginacao.page} 
                onChange={mudaPagina} 
                color="primary" 
                sx={{ display: "flex", justifyContent: "center", marginY:"20px" }}  
            />
        </>
    )
}

