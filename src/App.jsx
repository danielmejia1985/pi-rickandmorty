import Card from "./components/Card";
import Cards from "./components/Cards";
import Searchbar from "./components/Searchbar";
import characters , {Rick} from "./data/data";
import "./index.css"

const App = () => {

  const onSearch = () => {
  }

  return (
    <div>
      <Searchbar onSearch={onSearch}/>
      <p>trabajando desde rama danielmejia1985 MEJIA</p>
      {/* <Card Rick={Rick}/> */}
      <Cards characters = {characters}/>
    </div>
  )
}

export default App
