import React, {useState, createContext} from 'react';

export const MovieContext = createContext();


export const MovieProvider = (props) => {
    const [movies,setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        }

    ]);
    return (
        // provide the inormations into the deffenrences components then we can render all the child components by{props.child}
        // the value can render the movies by array format
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}