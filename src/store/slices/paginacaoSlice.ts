import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPaginacao } from "../../types/paginacao.model";

const initialState: IPaginacao = {
    page: 1,
    itensPerPage: 20,
    count: 0,
}

const paginacaoSlice = createSlice({
    name:"paginacao",
    initialState,
    reducers:{
        setCount:(state, action:PayloadAction<number>)=>{
            return {
                ...state,
                count: action.payload
            }
        },
        setPagina:(state, action:PayloadAction<number>)=>{
            return{
                ...state,
                page:action.payload
            }
        }
    }

})

export default paginacaoSlice.reducer

export const { setCount, setPagina } = paginacaoSlice.actions;