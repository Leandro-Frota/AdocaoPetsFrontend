import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
// import Home from './pages/home'          
import RegisterPet from './pages/registerPet'
import SearchPets from './pages/SearchPets'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>        
 
          <Route path="/register-pet" element={<RegisterPet />} /> 
          <Route path="/search-pet" element={<SearchPets />} />       
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
