//AQUI ES DONDE TRAEMOS LA INFO DEL JSON POR MEDIO DE LAS ACTION

import axios from 'axios'

export function getInfoTotal(){
    return async function(dispatch){
        var json = await axios("https://mocki.io/v1/01c0d17b-6d1f-483a-96f8-5a526f80d3dc",{})
        return dispatch({
            type: "GET_INFO",
            payload: json.data.results[0]
        })
    }
}
export function getInfoTotalLista(){
    return async function(dispatch){
        var info = await axios("https://mocki.io/v1/7c7f9add-243b-47ed-804e-b5441625260a",{})
        return dispatch({
            type: "GET_INFO_LISTA",
            payload: info.data
        })
    }
}

export function getVolkswagen(){
    return async function(dispatch){
        var info = await axios("https://mocki.io/v1/7c7f9add-243b-47ed-804e-b5441625260a",{})
        return dispatch({
            type: "GET_VOLKSWAGEN",
            payload: info.data.children[0]
        })
    }
}

export function getNissan(){
    return async function(dispatch){
        var info = await axios("https://mocki.io/v1/7c7f9add-243b-47ed-804e-b5441625260a",{})
        return dispatch({
            type: "GET_NISSAN",
            payload: info.data.children[1]
        })
    }
}

export function getChevrolet(){
    return async function(dispatch){
        var info = await axios("https://mocki.io/v1/7c7f9add-243b-47ed-804e-b5441625260a",{})
        return dispatch({
            type: "GET_CHEVROLET",
            payload: info.data.children[2]
        })
    }
}

export function limpiar(){
    return async function(dispatch){
        return dispatch({
            type: "GET_CHEVROLET",
            payload:{}
        })
    }
}