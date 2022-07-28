import { Text, HStack, Image, VStack, Button } from '@chakra-ui/react'
//import { useFavContext } from '../../context/FavContext'
import { TiDelete } from 'react-icons/ti'
import { useFavList } from '../../Hooks/useFavList'

export const Favoritos = () => {

    //const { favoritos, deleteFavorito, emptyFavoritos } = useFavContext()
    //console.log(favoritos)
    const { favoritos, deleteFavorito, emptyFavoritos } = useFavList()

    return (
        <VStack>

        { favoritos.length ? 

            <>
                <Text>Tus Favoritos</Text>
                <HStack>
                  {favoritos.map((favorito => <VStack key={favorito.id}>
                    <Image src={favorito.img} w="200px"/>
                    <Text fontSize="2xl">{favorito.name}</Text>
                    <HStack>
                        <Text fontSize="md">Quitar de favoritos</Text>
                        <TiDelete onClick={() => deleteFavorito(favorito)}/>
                    </HStack>
                    </VStack>))}  
                </HStack>
                <Button onClick={emptyFavoritos}>Vaciar Lista</Button>
            </>

            :

            <Text>Aun no tienes favoritos</Text>
        }

        </VStack>  
    )
}