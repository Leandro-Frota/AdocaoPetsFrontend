import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
// import Home from './pages/home'          
import RegisterPet from './pages/registerPet'

function App() {
  return (
    <BrowserRouter>
      <Routes>            
                    
        <Route path="/main" element={<Layout />} />
                                
      </Routes>
      <Layout>
        <Routes>              
       
          <Route path="/register-pet" element={<RegisterPet />} />            
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
