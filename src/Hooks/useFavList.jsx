import { useRecoilValue, useSetRecoilState } from "recoil";
import { FavListState } from '../shared/FavList'

export const useFavList = () => {
    const setFavListState = useSetRecoilState(FavListState);
    const favoritos = useRecoilValue(FavListState);

    const addFavorito = (pelicula) => {
        const yaEstanFaveados = favoritos.find((favorito) => favorito.id === pelicula.id)
        if(!yaEstanFaveados){
            setFavListState([...favoritos, pelicula])
            console.log(favoritos)  
        }
    }

    const deleteFavorito = (pelicula) => {
        const nuevaListaFavoritos = favoritos.filter(favorito => favorito.id !== pelicula.id)
        setFavListState(nuevaListaFavoritos)
    }

    const emptyFavoritos = () => {
        setFavListState([])
    }

    return {favoritos, addFavorito, deleteFavorito, emptyFavoritos}
}