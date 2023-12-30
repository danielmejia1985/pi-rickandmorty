const Searchbar = ({onSearch}) => {
    // Este componente nos permitirá buscar y agregar nuevos personajes a nuestra aplicación

    return (
        <div>
            <button onClick={onSearch}>agregar</button>
        </div>
    )
};
export default Searchbar;