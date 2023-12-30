import Card from "./components/Card";
import Cards from "./components/Cards";
import Searchbar from "./components/Searchbar";
import characters , {Rick} from "./data/data";
import "./index.css"

const App = () => {
  const onSearch = () => {
  }

  return (
    <>
      <Searchbar onSearch={onSearch}/>
      {/* <Card Rick={Rick}/> */}
      <Cards characters = {characters}/>
    </>
  )
}

export default App
