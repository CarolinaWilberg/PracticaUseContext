import { HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <HStack pb="10px" pt="10px" bg='gray.400'>
                <Link to="/">Home</Link>
                <Link to="/favoritos">Favoritos</Link>
            </HStack>
        </nav>  
    )
}