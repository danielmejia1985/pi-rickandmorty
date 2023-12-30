const Searchbar = ({onSearch}) => {
    // Este componente nos permitirá buscar y agregar nuevos personajes a nuestra aplicación

    return (
        <div>
            <input type="text"/>
            <button onClick={onSearch}>Agregar</button>
        </div>
    )
};
export default Searchbar;