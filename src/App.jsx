import Card from "./components/Card";
import Cards from "./components/Cards";
import Searchbar from "./components/Searchbar";
import characters , {Rick} from "./data/data";

const App = () => {

  const onSearch = () => {
    
  }

  return (
    <div>
      <p>trabajando desde rama danielmejia1985 MEJIA</p>
      <Searchbar onSearch={onSearch}/>
      {/* <Card Rick={Rick}/> */}
      <Cards characters = {characters}/>
      <p>xavier777dev change</p>
      <p>xavier777dev change 2</p>
      <h3>algo</h3>
    </div>
  )
}

export default App
