import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import RegisterPet from './pages/registerPet'

function App() {
  return (
    <BrowserRouter>
      <Layout >
        
        <Routes>
          <Route path="/register-pet" element={<RegisterPet/>}/>
        </Routes>
      </Layout>
   </BrowserRouter>
  )
}

export default App
