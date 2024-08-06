
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>

    <h1>💻 Ecommer Electronic 💻</h1>
    <NavBar/>
    {/* <CounterComponents/> */}
    <ItemListContainer greeting='Bienvenidos a la mejor tienda de electronica del mundo ! 📱'/>

    </>
  )
}

export default App
