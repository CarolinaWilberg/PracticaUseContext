import { movies } from '../../assets/data'
import { HStack, VStack, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
//import { useFavContext } from '../../context/FavContext'
import { useFavList } from '../../Hooks/useFavList'

export const MovieCards = () => {

    //const { favoritos, addFavorito } = useFavContext()
    const { favoritos, addFavorito } = useFavList()

    return (
        <HStack>
            {movies.map((movie => <VStack key={movie.id}>
                <Image src={movie.img} w="200px"/>
                <Text fontSize="2xl">{movie.name}</Text>
                <HStack>
                   {favoritos.includes(movie) ?
                    <>
                        <Text fontSize="md">Añadido a favoritos</Text>
                        <AiFillHeart/>
                    </>
                    :
                    <>
                        <Text fontSize="md">Añadir a favoritos</Text>
                        <AiOutlineHeart onClick={()=> addFavorito(movie)}/>
                    </>
                   } 
                </HStack>
            </VStack>))}
        </HStack>
    )
}