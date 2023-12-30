import Card from "./components/Card";
import Cards from "./components/Cards";
import Searchbar from "./components/Searchbar";
import characters , {Rick} from "./data/data";

const App = () => {

  const onSearch = () => {
    
  }

  return (
    <div>
      <p>trabajando desde rama danielmejia1985</p>
      <Searchbar onSearch={onSearch}/>
      {/* <Card Rick={Rick}/> */}
      <Cards characters = {characters}/>
    </div>
  )
}

export default App
