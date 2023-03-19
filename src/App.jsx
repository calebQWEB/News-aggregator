import { Route, Routes } from 'react-router-dom'
import Details from './Pages/Details/Details'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/pages/:author/:title/details' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
