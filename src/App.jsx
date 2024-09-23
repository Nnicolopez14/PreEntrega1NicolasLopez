import NavBar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  

  return (
  <div>
    <NavBar />
    <ItemListContainer saludo={"Bienvenidos a Adidas Argentina"} />
  </div>
  )
}

export default App
