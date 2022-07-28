import { createContext, useContext, useState } from 'react'

const FavContext = createContext();

export const useFavContext = () => useContext(FavContext)

/*export const FavProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([])

    const addFavorito = (pelicula) => {
        const yaEstanFaveados = favoritos.find((favorito) => favorito.id === pelicula.id)
        if(!yaEstanFaveados){
          setFavoritos([...favoritos, pelicula])
            console.log(favoritos)  
        }
    }

    const deleteFavorito = (pelicula) => {
        const nuevaListaFavoritos = favoritos.filter(favorito => favorito.id !== pelicula.id)
        setFavoritos(nuevaListaFavoritos)
    }

    const emptyFavoritos = () => {
        setFavoritos([])
    }

    return(
        <FavContext.Provider value={{favoritos, addFavorito, deleteFavorito, emptyFavoritos}}>
            {children}
        </FavContext.Provider>
    )
}*/