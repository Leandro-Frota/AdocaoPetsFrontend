import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
// import Home from './pages/home'          
import RegisterPet from './pages/registerPet'
import SearchPets from './pages/SearchPets'
import Login from './pages/login'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />         
      <Route element={<Layout />}>  
        <Route path='/main' element={""} />  
          <Route path="/register-pet" element={<RegisterPet />} /> 
          <Route path="/search-pet" element={<SearchPets />} />  
      </Route>     
         
          
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
