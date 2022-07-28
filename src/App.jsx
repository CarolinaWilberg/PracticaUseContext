import { Routes, Route } from "react-router-dom";
import { MovieCards } from './components/MovieCards/MovieCards'
import { Navbar } from './components/Navbar/Navbar'
import { Favoritos } from './components/Favoritos/Favoritos'
import { Center } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Navbar/>
      <Center>
        <Routes>
          <Route path="/" element={<MovieCards />} />
          <Route path="/favoritos" element={<Favoritos />}/>
        </Routes>
      </Center>
        
    </>
  )
}

export default App
