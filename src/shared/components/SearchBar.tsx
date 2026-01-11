import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onNewSearch: (query:string) => void;
}

export const SearchBar = ({placeholder = "Buscar...", onNewSearch}: Props) => {

    const [query,setQuery] = useState('');
    const [isFirstRender, setIsFirstRender] = useState(true); //control para no buscar al cargar

    useEffect(() =>{
        //evitamos que busque nada mas cargar la página si está vacio
        if(isFirstRender){
            setIsFirstRender(false);
            return;
        }

        const timeoutId = setTimeout(()=> {
            // si la query esta vacia no buscamos
            if (query.trim().length === 0) return;
            
            onNewSearch(query);
            setQuery("");
        },2000);

        return () => {
            clearTimeout(timeoutId);
        };


    },[query,onNewSearch]); // se ejecuta cada vez que la query cambia

     const handleManualSearch = () => {
        if(query.trim().length === 0) return;
        onNewSearch(query);
        setQuery("");
     };

     const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            handleManualSearch();
        }
     };

     return (
        <div className="search-container">
            <input type="text"
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown} />
            <button onClick={handleManualSearch}>Buscar</button>
        </div>
     );

    

}