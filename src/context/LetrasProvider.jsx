import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] =  useState('')

    const busquedaLetra = async busqueda => {
        try {
            const { artista , cancion } = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const {data} = await axios(url)
            console.log(data.Lyrics)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LetrasContext.Provider
        value={{
            alerta,
            setAlerta,
            busquedaLetra
        }}>
            {children}
        </LetrasContext.Provider>
    )

}

export {
    LetrasProvider
}

export default LetrasContext